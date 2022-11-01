import notifications from "../../utils/notifications.js";
import Notification from "../Notification/Notification.jsx";
import './notificationList.css';

function NotificationList () {
    console.log(notifications)
    return (
        <div>
            <div className="container">
                {notifications.map((e, i) => 

                    <Notification
                        key={i}
                        name={e.name} 
                        picture={e.picture} 
                        content={e.content} 
                        date={e.date}
                        message={e.message} 
                    />
                )}
            </div>
        </div>
    ) 
}

export default NotificationList;