import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
//import { Alert, AlertDescription } from './alert';

interface NotificationProps {
  notification: {
    type: 'success' | 'error' | '';
    message: string;
  };
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  if (!notification.message) return null;

  return (
    <div>
        {notification.message}
    </div>
    // <Alert variant={notification.type === 'error' ? 'destructive' : 'default'} className="mb-4">
    //   {notification.type === 'error' ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
    //   <AlertDescription>{notification.message}</AlertDescription>
    // </Alert>
  );
};

export default Notification;