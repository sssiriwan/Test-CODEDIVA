"use client";

import React, {useState} from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "not-specified",
    termsAccepted: false,
    marketingAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value, type} = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex overflow-hidden">
        <a href="/" className="mr-4 hover:underline">
          back
        </a>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Sign Up for Exclusive Delivery Deals!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First and Last Name */}
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 border px-4 py-2 rounded"
              />
            </div>

            {/* Email and Password */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            {/* Date of Birth and Phone Number */}
            <input
              type="date"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            {/* Gender */}
            <div className="flex gap-4 items-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="not-specified"
                  checked={formData.gender === "not-specified"}
                  onChange={handleChange}
                />
                <span className="ml-2">Not Specified</span>
              </label>
            </div>

            {/* Terms and Marketing */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  required
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span className="ml-2 text-sm">
                  I have read and accepted the{" "}
                  <a href="#" className="text-blue-600">
                    terms & conditions
                  </a>
                  .
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="marketingAccepted"
                  checked={formData.marketingAccepted}
                  onChange={handleChange}
                />
                <span className="ml-2 text-sm">
                  I agree to receive marketing information.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="w-1/2 bg-pink-100">
          <img
            src="/swensens/login.jpg"
            alt="Cakes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
