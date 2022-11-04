import './notification.css'

function Notification ({picture, name, date, profilePicture, content, message, contentMessage, object}) {
    return (
        <div className={picture ? "noti-picture" : "noti"}>
            
            <img src={profilePicture} className="img" alt="Profile Picture"/>
            <div>
                <div className='noti-text'>
                    <button className='name'> 
                        <strong>{name}</strong>
                    </button> 
                    <span>
                        {content}
                        <button className='object-noti'>
                            <strong >
                                {object}
                            </strong>
                        </button>
                        <span className='dot-noti'></span>
                        
                    </span>
                    
                </div>                
                <footer className='date'>
                    {date}
                </footer>
                {message && (<p className='message'>{contentMessage}</p>)}
            </div>
             {picture && (<img className='img picture' src={picture}/>)}
        </div>
    ) 
}

export default Notification;