import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = ({
  phoneNumber = "2348012345678", // Replace with your actual number
  message = "Hello! I would like to inquire about your services.",
  companyName = "Our Team",
  greeting = "Hi there! 👋 How can we help you today?",
  position = "bottom-right", // "bottom-right", "bottom-left", "top-right", "top-left"
  showOnScroll = false, // Show button only after scrolling
  scrollThreshold = 200, // Pixels to scroll before showing
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!showOnScroll);

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnScroll, scrollThreshold]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const popupPositionClasses = {
    "bottom-right": "mb-4",
    "bottom-left": "mb-4",
    "top-right": "mt-4",
    "top-left": "mt-4",
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button Container */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        {/* Chat Popup */}
        {isOpen && (
          <div
            className={`${popupPositionClasses[position]} bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-80 animate-slideUp border border-gray-200 dark:border-gray-700`}
          >
            {/* Header */}
            <div className="bg-green-500 rounded-t-2xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <FaWhatsapp className="text-green-500 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{companyName}</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    <p className="text-xs text-green-100">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Message Body */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-700 dark:text-gray-300">{greeting}</p>
              </div>
            </div>

            {/* Footer with Button */}
            <div className="p-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Start Conversation
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                We typically reply instantly
              </p>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative animate-bounce-slow"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <>
              <FaWhatsapp className="text-3xl" />
              {/* Notification Pulse */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-300 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>

        {/* Tooltip (optional) */}
        {!isOpen && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Need help? Chat with us!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow:hover {
          animation: none;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;