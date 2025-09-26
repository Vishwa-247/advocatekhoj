"use client";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    state: string;
    city: string;
    logo: File | null;
    views: number;
    ratings: number;
  }>({
    name: "",
    email: "",
    state: "",
    city: "",
    logo: null,
    views: 0,
    ratings: 0,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Submit to Legal Education Hub
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Location</label>
            <div className="flex gap-2">
              <select
                className="border rounded px-2 py-2 w-1/2"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add more states */}
              </select>
              <select
                className="border rounded px-2 py-2 w-1/2"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              >
                <option value="">Select City</option>
                {/* Cities can be dynamically loaded based on state */}
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Law School Logo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              onChange={(e) =>
                setForm({ ...form, logo: e.target.files?.[0] || null })
              }
            />
            {form.logo && (
              <img
                src={URL.createObjectURL(form.logo)}
                alt="Logo Preview"
                className="mt-2 w-20 h-20 rounded-lg bg-white object-contain border"
                style={{ borderRadius: "20px" }}
              />
            )}
            <span className="text-xs text-gray-500">
              80x80px, white background, curved borders
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{form.views}</span>
              <span className="text-xs text-gray-500">Views</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{form.ratings}</span>
              <span className="text-xs text-gray-500">Ratings</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
