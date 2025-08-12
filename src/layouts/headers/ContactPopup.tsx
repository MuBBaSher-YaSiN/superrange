import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ContactPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // just type the parameter
  const openWhatsApp = (number: string) => {
    const url = `https://wa.me/${number.replace(/\D/g, "")}`;
    window.open(url, "_blank");
  };

  const popupContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[111111222]"
      onClick={() => setIsPopupOpen(false)}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <button
          className="block w-full py-2 px-4 mb-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => openWhatsApp("971564846499")}
        >
          +971-56-484 6499
        </button>
        <button
          className="block w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => openWhatsApp("971557108899")}
        >
          +971-55-710 8899
        </button>
        <span
          className="absolute top-2 right-3 text-2xl font-bold cursor-pointer"
          onClick={() => setIsPopupOpen(false)}
        >
          ×
        </span>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="heartbeat-icon">
          <span className="ak-heartbeat-btn">
            <img src="assets/img/phone.svg" alt="..." />
          </span>
        </div>
      </div>

      {isPopupOpen &&
        typeof document !== "undefined" &&
        ReactDOM.createPortal(popupContent, document.body)}
    </>
  );
}
