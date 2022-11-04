import './notification.css'

function Notification ({name, date, picture, content, message, contentMessage, object}) {
    return (
        <div className="noti">
            <img src={picture} className="img" alt="Profile Picture"/>
            <div>
                <div>
                    <button className='name'> 
                        <strong>{name}</strong>
                    </button> 
                    <span className='content-noti'>
                        {content}
                        <button className='object-noti'>
                            <strong >
                                {object}
                            </strong>
                        </button>
                    </span>
                    </div>
                <footer className='date'>
                    {date}
                </footer>
                {message && (<p className='message'>{contentMessage}</p>)}
            </div>
        </div>
    ) 
}

export default Notification;