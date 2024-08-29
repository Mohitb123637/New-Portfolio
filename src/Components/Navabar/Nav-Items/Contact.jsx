import { useState } from 'react';
import { motion } from 'framer-motion'; // import Framer Motion
import '../NavItemsStyle/contact.scss';
import toast from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const Contact = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

  const handleLightToggle = () => {
    setIsLightOn((isLightOn) => !isLightOn);
  };

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      const currentTime = new Date();
      await addDoc(collection(db, 'contacts'), {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
        time: currentTime.toString(),
      });
      setInputs({ name: '', email: '', message: '' });
      toast.success('Message Sent');
      setDisableBtn(false);
    } catch (error) {
      console.log(error);
      toast.error('Error');
      setDisableBtn(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // initial state
      animate={{ opacity: 1 }} // animation effect
      transition={{ duration: 1 }} // animation duration
      className={`container1 ${!isLightOn ? 'light-off' : 'light-on'}`}
    >
      <div className="container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          onClick={handleLightToggle}
        >
          {isLightOn ? 'Dark' : 'Light'}
        </motion.button>
        <h1>Contact Me</h1>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            placeholder="Enter Your Email"
            required
          />
          <textarea
            value={inputs.message}
            name="message"
            onChange={changeHandler}
            placeholder="Enter Your Message"
            rows="4"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={disableBtn ? 'disableBtn' : ''}
            disabled={disableBtn}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
