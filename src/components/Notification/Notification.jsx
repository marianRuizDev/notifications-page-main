import './notification.css'

function Notification ({name, date, picture, content, message}) {
    return (
        <div className="noti">
            <img src={picture} alt="Profile Picture"/>
            <p><strong>{name}</strong> {content}</p>
        </div>
    ) 
}

export default Notification;