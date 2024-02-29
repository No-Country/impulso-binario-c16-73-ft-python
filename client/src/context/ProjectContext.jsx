import { createContext, useContext, useState } from 'react';
import data from '../utils/projects.json';

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState({
    project: {},
  });

  const getProject = (id) => {
    const foundProject = data.find((p) => parseInt(id) === p.id);
    setProject({...project, project: foundProject});
    return foundProject;
  };

  return (
    <ProjectContext.Provider value={{
      project: project.project,
      getProject,
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};
