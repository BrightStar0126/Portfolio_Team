// Librairies
import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

// MAIN FUNCTION
export const ProjectProvider = ({ children }) => {
  // STATES
  // State 1 : projectData
  const [projectData, setProjectData] = useState(null);

  // State 2 : setProject
  const setProject = (data) => {
    setProjectData(data);
  };

  return (
    <ProjectContext.Provider value={{ projectData, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
