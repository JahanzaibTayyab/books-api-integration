"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
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
      const response = await fetch(`/api/register`, {
        method: "POST",
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
      localStorage.setItem("authToken", result.accessToken);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmitOrder = async (e: any) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          bookId: 1,
          customerName: "John",
        }),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
      console.log(result);
      router.back();
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

      <button onClick={handleSubmitOrder}>Submit Order</button>
    </div>
  );
};
export default Register;
