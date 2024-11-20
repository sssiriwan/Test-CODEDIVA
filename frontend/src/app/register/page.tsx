"use client";

import React, {useState} from "react";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "not-specified",
    termsAccepted: false,
    marketingAccepted: false,
  });
  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/register",
        formData
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Registration failed:",
          error.response?.data || error.message
        );
        alert(
          "Registration failed: " +
            (error.response?.data?.message || error.message)
        );
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex overflow-hidden">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Sign Up for Exclusive Delivery Deals!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First and Last Name */}
            <div className="flex gap-4">
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                required
                value={formData.firstname}
                onChange={handleChange}
                className="w-1/2 border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                required
                value={formData.lastname}
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
                  value="MALE"
                  checked={formData.gender === "MALE"}
                  onChange={handleChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  checked={formData.gender === "FEMALE"}
                  onChange={handleChange}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="OTHER"
                  checked={formData.gender === "OTHER"}
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
            </button>{" "}
            <a
              href="/"
              className="w-full text-center mt-4 inline-block bg-red-600 rounded text-white py-2 hover:bg-red-700 transition "
            >
              Back
            </a>
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
