import React, { createContext, useState } from "react"

export const ToastContext = createContext()

const ToastProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("")

    const showToast = (msg) => {
        console.log(msg);

        setMessage(msg)
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    return (
        <ToastContext.Provider value={{ show, message, showToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider