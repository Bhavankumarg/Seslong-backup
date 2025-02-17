"use client";
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // Track individual errors
  const [submitted, setSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate organization
    if (!organization.trim()) {
      newErrors.organization = "Organization is required.";
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Validate product category
    if (!productCategory.trim()) {
      newErrors.productCategory = "Product category is required.";
    }

    // Add any other validation rules here

    setErrors(newErrors); // Update state with any new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors
  }

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const isValid = validateForm();
    if (!isValid) {
      return; // If invalid, don't proceed
    }

    fetch("https://formcarry.com/s/VQmxImepSma", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        organization,
        productCategory,
        phone,
        message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSubmitted(true);
          resetForm();
        } else {
          setErrors({ form: response.message }); // Set form error if needed
        }
      })
      .catch((error) => {
        setErrors({ form: error.message || "An unexpected error occurred." });
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setOrganization("");
    setProductCategory("");
    setPhone("");
    setMessage("");
    setErrors({});
  }

  return (
    <div className="container mx-auto w-10/12 py-10">
      <div className="mx-auto flex w-full flex-col">
        <h2 className="py-4 text-center text-4xl font-medium">
          Connect With Us
        </h2>
        <p className="text-center text-[20px] font-normal">
          Partner with Seslong for your product needs and discover how our
          global presence, <br className="hidden sm:block" /> product knowledge, and commitment to quality
          can help your business.
        </p>
        <h2 className="py-8 text-center text-4xl font-medium">Contact Us</h2>
      </div>

      <div>
        <form className="mx-auto py-8" onSubmit={onSubmit}>
          {errors.form && (
            <div className="py-2 text-center text-red-500">{errors.form}</div>
          )}
          {submitted && (
            <div className="py-2 text-center text-green-500">
              Thank you for your submission!
            </div>
          )}

          <div className="w-full gap-4 py-6 lg:flex">
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={name}
                placeholder=" "
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                for="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>

              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            {/* No error message for name */}

            <div className="w-full gap-4 lg:flex lg:mt-0 mt-7">
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                  value={email}
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  for="email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email ID
                </label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}{" "}
                {/* Error message */}
              </div>
            </div>
          </div>

          <div className="lg:flex w-full gap-4 lg:py-6">
            <div className="relative w-full">
              <input
                type="text"
                id="organization"
                className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={organization}
                placeholder=" "
                onChange={(e) => setOrganization(e.target.value)}
              />
              <label
                htmlFor="organization" for="organization"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Organization
              </label>
              {errors.organization && (
                <p className="text-red-500">{errors.organization}</p>
              )}{" "}
              {/* Error message */}
            </div>
            <div className="relative w-full mt-7 lg:mt-0">
              <select
                id="product-category"
                className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={productCategory}
                placeholder=" "
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Product Category
                </option>
                <option value="Personal Care">Personal Care</option>
                <option value="Hygiene">Hygiene</option>
                <option value="Laundry">Laundry</option>
                <option value="Home Care">Home Care</option>
                <option value="Food and Agro">Food and Agro</option>
                <option value="Tobacco">Tobacco</option>
              </select>
              <label
                for="product-category"
                htmlFor="product-category"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Product Category
              </label>
              {errors.productCategory && (
                <p className="text-red-500">{errors.productCategory}</p>
              )}
            </div>

          </div>

          <div className="flex w-full gap-4 lg:py-6 mt-7 lg:mt-0">
            <div className="relative w-full">
              <input
                type="tel"
                id="phone-number"
                className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={phone}
                placeholder=" "
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
              <label
                htmlFor="phone-number"
                for="phone-number"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone Number
              </label>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}{" "}
              {/* Error message */}
            </div>
          </div>

          <div className="flex w-full gap-4 py-6">
            <div className="relative w-full">
              <textarea
                id="message"
                className="peer block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={message}
                placeholder=" "
                onChange={(e) => setMessage(e.target.value)}
              />
              <label
                htmlFor="message"
                for="message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Message
              </label>
              {/* No error message for message */}
            </div>
          </div>

          <div className="py-4">
            <button
              type="submit"
              className="font-regular flex w-6/12 items-center justify-center gap-2 border-2 border-gray-300 px-5 py-2.5 text-center text-xl text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Submit <IoMdArrowForward />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
