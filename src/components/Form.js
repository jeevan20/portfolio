import "./styles/FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form >
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" />
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" />
        <label htmlFor="Subject">Subject</label>
        <input type="text" name="Subject" />
        <label htmlFor="Message">Message</label>
        <textarea
          rows={6}
          placeholder="Type your message here"
          type="text"
          name="Message"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
