import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsbarOpen] = useState(false);
  const [pageId, setPagId] = useState(null);

  const openSidebar = () => {
    setIsbarOpen(true);
  };
  const closeSidebar = () => {
    setIsbarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ openSidebar, closeSidebar, isSidebarOpen, pageId, setPagId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
