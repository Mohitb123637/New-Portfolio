import React, { useState } from 'react';
import AnimatedWrapper from './ui/AnimationWrapper';
import emailjs from 'emailjs-com';
import { Submit } from './Icons';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setToast({
          show: true,
          message: 'Email sent successfully!',
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch(() => {
        setToast({
          show: true,
          message: 'Failed to send email. Please try again.',
          type: 'error',
        });
        setLoading(false);
      });
  };

  return (
    <div className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-gray-950 to-gray-800 text-white">
      <div className="container w-[90vw] lg:w-[70vw] mx-auto flex flex-col">
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ ...toast, show: false })}
          />
        )}

        <AnimatedWrapper>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 my-4 underline">
            Contact
          </h1>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 my-4">
            Get in Touch: Just Fill the Form!
          </h2>
        </AnimatedWrapper>

        <div className="flex justify-center items-center my-4 p-8 md:p-6">
          <form
            className="border border-blue-300 shadow-lg rounded-lg p-8 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <AnimatedWrapper>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full p-3 mb-6 border rounded-md bg-transparent focus:ring-blue-500 transition duration-200"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </AnimatedWrapper>

            <AnimatedWrapper>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full p-3 mb-6 border rounded-md bg-transparent focus:ring-blue-500 transition duration-200"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </AnimatedWrapper>

            <AnimatedWrapper>
              <textarea
                placeholder="Your Message"
                id="message"
                name="message"
                className="w-full p-3 mb-6 border rounded-md bg-transparent focus:ring-blue-500 transition duration-200 h-24 md:h-32"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </AnimatedWrapper>

            <AnimatedWrapper>
              <button
                className="flex items-center justify-center w-full mt-4 group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-8 py-2 hover:scale-[1.02] duration-500 transition-transform"
                disabled={loading}
              >
                {loading ? 'Sending...' : "Let's Connect"}
                <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                  <Submit />
                </span>
              </button>
            </AnimatedWrapper>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
