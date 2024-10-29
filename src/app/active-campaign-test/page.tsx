"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define a Zod schema for form validation
const formSchema = z.object({
  fullname: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  contactmessage: z.string().min(1, "Please enter your message"),
});

// Update the form data type to use Zod's inferred type
type FormData = z.infer<typeof formSchema>;

export default function ActiveCampaignTest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Specify the form data type
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const onSubmit = (data: FormData) => {
    // Validate data using Zod schema
    const result = formSchema.safeParse(data);
    if (!result.success) {
      // Handle validation errors
      setState({ isSubmitted: false, isError: true });
      return;
    }

    const formData = new FormData();

    // Hidden field key/values.
    formData.append("u", "4");
    formData.append("f", "4");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "c0c3bf12af7fa3ad55cceb047972db9");

    // Form field key/values.
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("ca[1][v]", data.contactmessage);

    // Pass FormData values into a POST request to ActiveCampaign.
    // Mark form submission successful, otherwise return error state.
    fetch("https://madeleydesignstudio.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setState({
          isSubmitted: true,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          isSubmitted: false,
          isError: true,
        });
      });
  };

  return (
    <div>
      {!state.isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Contact</legend>
            <div>
              <div>
                <div>
                  <label htmlFor="fullname">Name</label>
                  <input
                    id="fullname"
                    placeholder="Type your name"
                    className={
                      errors.fullname
                        ? "c-form__textbox error"
                        : "c-form__textbox"
                    }
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <div className="validation--error">
                      <p>Please enter your name</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    placeholder="Email"
                    className={
                      errors.email ? "c-form__textbox error" : "c-form__textbox"
                    }
                    {...register("email", {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                  />
                  {errors.email && (
                    <div className="validation--error">
                      <p>Please enter a valid email</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="contactmessage">Message</label>
                  <textarea
                    id="contactmessage"
                    placeholder="Message"
                    className={
                      errors.contactmessage
                        ? "c-form__textarea error"
                        : "c-form__textarea"
                    }
                    {...register("contactmessage", { required: true })}
                  ></textarea>
                  {errors.contactmessage && (
                    <div className="validation--error">
                      <p>Please enter your message</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </fieldset>
          {state.isError ? (
            <p>
              Unfortunately, your submission could not be sent. Please try again
              later.
            </p>
          ) : null}
        </form>
      ) : (
        <p>Thank you for your message. I will be in touch shortly.</p>
      )}
    </div>
  );
}
