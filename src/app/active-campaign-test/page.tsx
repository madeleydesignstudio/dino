"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

// Define a Zod schema for form validation
const FormSchema = z.object({
  fullname: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  contactmessage: z.string().optional(), // Made optional since field is commented out
});

// Update the form data type to use Zod's inferred type
type FormData = z.infer<typeof FormSchema>;

export default function ActiveCampaignTest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const onSubmit = async (data: FormData) => {
    try {
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
      if (data.contactmessage) {
        formData.append("ca[1][v]", data.contactmessage);
      }

      // First API call
      await fetch("https://madeleydesignstudio.activehosted.com/proc.php", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Second API call
      const newsletterResponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          fullname: data.fullname,
        }),
      });

      if (!newsletterResponse.ok) {
        throw new Error("Newsletter submission failed");
      }

      setState({
        isSubmitted: true,
        isError: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setState({
        isSubmitted: false,
        isError: true,
      });
    }
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
              {/* <div>
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
              </div> */}
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
