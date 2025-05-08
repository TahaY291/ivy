import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  name: string;
  path: string;
  setValues: (name: string, path: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [path, setPath] = useState<string>('');

  const setValues = (newName: string, newPath: string) => {
    setName(newName);
    setPath(newPath);
  };

  return (
    <AppContext.Provider value={{ name, path, setValues }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
