import { createContext, useContext, useState } from 'react';
import { LANGUAGES, COLLECTION, COMPLETE, INCOMPLETE } from '../utils/constants';
import data from '../utils/projects.json';

const ProjectsContext = createContext(null);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(data);

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

export const useProjects = () => {
  return useContext(ProjectsContext);
};
