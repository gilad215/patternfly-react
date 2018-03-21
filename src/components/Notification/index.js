import Notification from './Notification';
import NotificationContent from './NotificationContent';
import NotificationInfo from './NotificationInfo';
import NotificationMessage from './NotificationMessage';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';
import StatefulNotificationDrawerWrapper from './Wrappers/StatefulNotificationDrawerWrapper';
import NotificationDrawerWrapper from './Wrappers/NotificationDrawerWrapper';

Notification.Content = NotificationContent;
Notification.Info = NotificationInfo;
Notification.InfoRight = NotificationInfoRight;
Notification.InfoLeft = NotificationInfoLeft;
Notification.Message = NotificationMessage;

export {
  Notification,
  StatefulNotificationDrawerWrapper,
  NotificationDrawerWrapper
};
