import { createContext, useContext, useState } from 'react';
import { BACKERS, EXPIRATION, FINANCED, NEWEST, LANGUAGES, COLLECTION, COMPLETE, INCOMPLETE } from '../utils/constants';
import data from '../utils/projects.json';

const ProjectsContext = createContext(null);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(data.slice(0, data.length - 2));
  return (
    <ProjectsContext.Provider value={{
      projects: projects,
      setProjects,
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useFilterProjects = () => {
  const { setProjects } = useContext(ProjectsContext);
  return function(filter) {
    let newProjects = [...data];
    if (filter.type === LANGUAGES) {
      newProjects = newProjects.filter((p) => p.languages.includes(filter.value));
    } else if (filter.type === COLLECTION) {
      let min = parseInt(filter.value.min);
      let max = parseInt(filter.value.max);
      if (max < min) {
        [max, min] = [min, max];
      }
      newProjects = newProjects.filter((p) => p.amountCollected >= min && p.amountCollected <= max);
    } else if (filter.type === COMPLETE) {
      newProjects = newProjects.filter((p) => p.progress >= 100);
    } else if (filter.type === INCOMPLETE) {
      newProjects = newProjects.filter((p) => p.progress < 100);
    } else setProjects(data);
    setProjects(newProjects);
  };
};

export const useSortProjects = () => {
  const { setProjects } = useContext(ProjectsContext);
  return function(sort) {
    setProjects((oldState) => {
      const newProjects = [...oldState];
      switch (sort) {
      case NEWEST: {
        newProjects.sort((a, b) => {
          const firstDate = new Date(a.createdAt).getTime();
          const secondDate = new Date(b.createdAt).getTime();
          if (firstDate > secondDate) return 1;
          else return -1;
        });
        break;
      }
      case FINANCED: {
        newProjects.sort((a, b) => {
          return b.amountCollected - a.amountCollected;
        });
        break;
      }
      case BACKERS: {
        newProjects.sort((a, b) => {
          if (a.backers < b.backers) return 1;
          else return -1;
        });
        break;
      }
      case EXPIRATION: {
        newProjects.sort((a, b) => {
          const firstDate = new Date(a.createdAt).getTime();
          const secondDate = new Date(b.createdAt).getTime();
          if (firstDate < secondDate) return 1;
          else return -1;
        });
        break;
      }
      default: return oldState;
      }
      return newProjects;
    });
  };
};

export const useSearchProjects = () => {
  const { setProjects } = useContext(ProjectsContext);
  return function(search) {
    setProjects(data.filter((p) => p.title.toLowerCase().includes(search.toLowerCase().trim())));
  };
};

export const useProjects = () => {
  return useContext(ProjectsContext);
};
