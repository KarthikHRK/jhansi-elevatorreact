import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const EnquiryForm = ({ closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.modal-content')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  const closeModalFromButton = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfblqvl', 'template_rll2b8d', e.target, 'pKCVficu5esaY3CmQ')
      .then((result) => {
          console.log(result?.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error?.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset();
    closeModalFromButton();
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed px-3 z-20 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md modal-content">
            <span
              onClick={closeModalFromButton}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 cursor-pointer text-2xl"
            >
              &times;
            </span>
            <form className="grid gap-4" onSubmit={sendEmail}>
              <h2 className="text-2xl font-bold mb-4 text-[16px] text-[#0D2B7B]" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Enquiry Form</h2>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#0D2B7B] text-[14px] text-[#0D2B7B] font-normal" style={{ fontFamily: 'Poppins', fontWeight: '400' }}
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded focus:border-[#0D2B7B] text-[14px] text-[#0D2B7B] font-normal" style={{ fontFamily: 'Poppins', fontWeight: '400' }}
              />

              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-2 border rounded focus:border-[#0D2B7B] text-[14px] text-[#0D2B7B] font-normal" style={{ fontFamily: 'Poppins', fontWeight: '400' }}
              />

              <input
                type="text"
                id="location"
                name="location"
                placeholder="Your Location"
                required
                className="w-full px-4 py-2 border rounded focus:border-[#0D2B7B] text-[14px] text-[#0D2B7B] font-normal" style={{ fontFamily: 'Poppins', fontWeight: '400' }}
              />

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded focus:border-[#0D2B7B] text-[14px] text-[#0D2B7B] font-normal" style={{ fontFamily: 'Poppins', fontWeight: '400' }}
              ></textarea>

              <button
                type="submit"
                className="bg-[#0D2B7B] text-white px-6 py-2 rounded hover:bg-[#0D2B7B] focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
