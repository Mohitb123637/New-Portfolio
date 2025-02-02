import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-md transition-all duration-300 ${type === "success" ? "bg-green-600" : "bg-red-600"
                }`}
        >
            <div className="flex items-center">
                <span className="text-xl mr-2">{type === "success" ? "✅" : "❌"}</span>
                <span className="text-white font-semibold">{message}</span>
            </div>
        </div>
    );
};

export default Toast;
