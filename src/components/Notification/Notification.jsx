import './notification.css'

function Notification ({name, date, picture, content, message, contentMessage}) {
    console.log(contentMessage)
    return (
        <div className="noti">
            <img src={picture} className="img" alt="Profile Picture"/>
            <div>
                <div><strong>{name}</strong> {content}</div>
                <footer>{date}</footer>
                {message && (<p className='message'>{contentMessage}</p>)}
            </div>
        </div>
    ) 
}

export default Notification;