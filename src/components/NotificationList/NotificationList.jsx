import notifications from "../../utils/notifications.js";
import Notification from "../Notification/Notification.jsx";
import Counter from "../Counter/Counter.jsx";
import AllRead from "../AllReadButton/AllRead.jsx";
import './notificationList.css';

function NotificationList () {
    return (
        <div>
            <div className="container">
                <div className="head">
                    <h1 className="title">Notifications</h1>
                    <Counter /> 
                    <AllRead />   
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
                        object={e.object} 
                    />
                )}
            </div>
        </div>
    ) 
}

export default NotificationList;