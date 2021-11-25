import * as React from "react";

export interface ToastProps {
  options: {
    type: string;
    title: string;
  };
  onClose(): void;
}

export const Toast: React.FC<ToastProps> = ({ options, onClose, children }) => (
  <div className={`notification-toast ${options.type}`}>
    <div className="notification-toast-details">
      {options.title && (
        <div className="notification-toast-title">{options.title}</div>
      )}
      <div className="notification-toast-description">{children}</div>
    </div>
    <div className="notification-toast-close" onClick={onClose} />
  </div>
);
