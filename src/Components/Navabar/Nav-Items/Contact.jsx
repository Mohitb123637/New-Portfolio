import React, { useState } from "react";
import "../NavItemsStyle/contact.scss";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

const Contact = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false)
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  // light function 
  const handleLightToggle = () => {
    setIsLightOn((isLightOn) => !isLightOn);
  };

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true)
    try {
      const currentTime = new Date();
      await addDoc(collection(db, "contacts"), {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
        time: currentTime.toString(),
      });
      setInputs({ name: "", email: "", message: "" });
      toast.success("Message Sent");
      setDisableBtn(false)
    } catch (error) {
      console.log(error);
      toast.error("Error");
      setDisableBtn(false);
    }

  };

  return (
    <div className={`container1 ${!isLightOn ? "light-off" : "light-on"}`}>
      <div className="container">
        <button className="btn" onClick={handleLightToggle}>
          {isLightOn ? "Dark" : "Light"}
        </button>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
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
          <button className={disableBtn ? "disbaleBtn": ""} disabled = {disableBtn} onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
