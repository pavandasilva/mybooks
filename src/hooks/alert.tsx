import React, { createContext, useState, useCallback, useContext } from 'react';

import Alert from '../components/Alert';

interface AlertState {
  type: 'success' | 'warning';
  message?: string;
  isVisible?: boolean;
}

interface AlertContext {
  showAlert({ message, type }: AlertState): void;
  hideAlert(): void;
}

const AlertContext = createContext<AlertContext>({} as AlertContext);

export const AlertProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<AlertState>({} as AlertState);

  const showAlert = useCallback((alertData) => {
    setAlert({ ...alertData, isVisible: true });
  }, []);
  const hideAlert = useCallback(() => {
    setAlert({ isVisible: false, type: 'success' });
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert.isVisible && <Alert type={alert.type} body={alert.message} />}
    </AlertContext.Provider>
  );
};

export function useAlert(): AlertContext {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider');
  }

  return context;
}
