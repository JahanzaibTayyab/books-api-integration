"use client";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/hello`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-900">
          Client Name
        </label>
        <input
          type="text"
          name="clientName"
          placeholder="Enter Client Name"
          value={form.clientName}
          required
          onChange={handleChange}
        />
        <label className="block text-sm font-medium text-gray-900">
          Client Email
        </label>
        <input
          type="email"
          name="clientEmail"
          placeholder="Enter Client Name"
          value={form.clientEmail}
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-3 bg-green-700 font-medium rounded-md text-sm text-white p-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
