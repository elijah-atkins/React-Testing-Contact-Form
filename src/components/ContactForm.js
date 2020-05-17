import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {

    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            type="text"
            data-testid="firstName"

            ref={register({ required: true, minLength: 2 })}
          />
          {errors.firstName && (
            <p data-testid="firstName-error">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            type="text"

            data-testid="lastName"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p data-testid="lastName-error">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input 
          name="email"  
          type="email"
          data-testid="email" 
          ref={register({ required: true})} />
          {errors.email && (
            <p data-testid="email-error">Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" >Message</label>
          <textarea name="message" data-testid="message" ref={register({ required: false })} />
        </div>
        {data && (
          <div data-testid='print-out'>
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
          </div>
        )}
        <input data-testid="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
