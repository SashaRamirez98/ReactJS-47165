import { useState, createContext, useContext } from "react"
import classes from './NotificationServices.module.css'

const Notification = ({ data }) => {

    return (
      <div className={classes.notification}>
        {data.text}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text, time = 2) => {
        setNotificationData({ type, text })
        setTimeout(() => {
            setNotificationData(prev => { return { ...prev, text: ''} })
        }, (time * 1000))
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification data={notificationData}/> }
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}