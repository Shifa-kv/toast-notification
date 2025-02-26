import React, { createContext, useContext, useState } from "react";
import { ToastMessage } from "./ToastMessage";  

// A context to manage the state of toast messages globally
const ToastMessageContext = createContext();

export const ToastMessageProvider = ({ children }) => {
  const [toastMessages, setToastMessages] = useState([]);

  // Function to add a new toast message
  const addToast = (props) => {
    // Generate a unique id for each toast
    const id = Date.now().toString(36);
    setToastMessages((prev) => [...prev, { id, ...props }]);
  };

  // Function to remove a toast message by its id
  const hideToast = (id) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== id)); 
  };

  return (
    <ToastMessageContext.Provider value={{ addToast }}>
      {children} 
      
      {/* Container for rendering all active toasts */}
      <div className="fixed top-4 right-4 z-1 flex flex-col gap-2">
        {toastMessages.map((toast) => (
          <ToastMessage 
            key={toast.id} 
            props={{ ...toast, onClose: hideToast }}  // Pass onClose function for toast removal
          />
        ))}
      </div>
    </ToastMessageContext.Provider>
  );
};

export const useToastMessage = () => useContext(ToastMessageContext);
