import React, { createContext, useContext, useState } from 'react';
import userProjects from '../utils/userProjects.json';
import projects from '../utils/projects.json';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Mateo Hernandez',
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXo8keKEve3pixl1qWoyZgnfg80RYKBH_kxH74gnXEOHb2Lg7wVMa68aPWvZp4weKXQk&usqp=CAU"
  });
  const [createdProjects, setCreatedProjects] = useState(userProjects);
  const [financedProjects, setFinancedProjects] = useState(projects.slice(5, 8));

  const value = {
    user,
    createdProjects,
    financedProjects,
    setUser,
    setCreatedProjects,
    setFinancedProjects,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

export const useUser = () => {
  return useContext(UserContext);
};
