import React from 'react'
import { ToastContext } from '../Context/ToastContext'
import { useContext } from 'react'
const ToastUI = () => {
    const { show, message } = useContext(ToastContext)
    if (!show) return null
    return (
        <div className="fixed top-5 right-5 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg overflow-hidden">
            <p>{message}</p>
            <div className="absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
        </div>
    )
}

export default ToastUI