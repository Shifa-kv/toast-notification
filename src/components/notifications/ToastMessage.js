import React, { useEffect } from "react";
import CheckImage from "../../assets/images/check.png";
import ErrorImage from "../../assets/images/error.png";
import InfoImage from "../../assets/images/info.png";
import WarningImage from "../../assets/images/warning.png";

export const ToastMessage = ({ props }) => {
    const { id, content, type = "info", duration = 8000, action, dismissable = false, onClose, color, icon } = props || {};

    // Function to retrieve styles based on toast type and color
    const getToastMessageStyles = () => {
        const defaultStyles = {
            success: {
                icon: CheckImage,
                color: "bg-green-100 text-green-700 border-green-400",
            },
            error: {
                icon: ErrorImage,
                color: "bg-red-100 text-red-700 border-red-400",
            },
            warning: {
                icon: WarningImage,
                color: "bg-yellow-100 text-yellow-700 border-yellow-400",
            },
            info: {
                icon: InfoImage,
                color: "bg-blue-100 text-blue-700 border-blue-400",
            },
        };

        // Get the default styles for the given type or fallback to info
        const styles = defaultStyles[type] || defaultStyles.info;

        // If a custom color is provided, override the default colors
        if (color) {
            styles.color = `bg-[${color.background}] text-[${color.text}] border-[${color.border}]`;
        }

        return styles;
    };

    // Automatically close the toast after the duration
    useEffect(() => {
        if (duration && 0 !== duration) {
            const timer = setTimeout(() => {
                onClose(id);  // Close the toast when the duration expires
            }, duration);
            return () => clearTimeout(timer);  // Cleanup timer on component unmount
        }
    }, [id, duration, onClose]);

    // Get the toast styles and icon
    const { color: toastColor, icon: defaultIcon } = getToastMessageStyles();
    const iconToUse = icon || defaultIcon;

    return (
        <div
            id={id}
            onClick={() => action && action()}  // Allow actions on click of toasts
            className={`flex items-center p-3 pr-10 rounded-md border-l-4 shadow-md ${toastColor} relative ${action ? 'cursor-pointer' : ''}`}
        >
            <img className="mr-3 text-lg w-6 max-h-10" src={iconToUse} alt={type} />
            
            <span className="flex-1">{typeof content === 'function' ? content() : content}</span>

            {/* Dismissable button */}
            {dismissable && (
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                    onClick={() => onClose(id)}  // Close the toast on button click
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};
