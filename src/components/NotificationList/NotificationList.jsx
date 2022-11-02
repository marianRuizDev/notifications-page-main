import notifications from "../../utils/notifications.js";
import Notification from "../Notification/Notification.jsx";
import './notificationList.css';

function NotificationList () {
    return (
        <div>
            <div className="container">
                <div className="head">
                    <h1>Notifications</h1>
                    <button>1</button>      
                </div>
                {notifications.map((e, i) => 
                    <Notification
                        key={i}
                        name={e.name} 
                        picture={e.picture} 
                        content={e.content} 
                        date={e.date}
                        message={e.message}
                        contentMessage={e.contentMessage} 
                    />
                )}
            </div>
        </div>
    ) 
}

export default NotificationList;