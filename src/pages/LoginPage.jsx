import { useState } from "react";
import Header from "../components/extra/Header";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
      setFormData({ name: "", username: "", email: "" });
    }
  };

  return (
    <>
      <Header></Header>

      <div className="min-h-screen flex items-center justify-center bg-white">
        <form
          className="bg-black shadow-lg rounded-2xl p-8 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Login
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              autocomplete="off"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.name ? "border-red-500" : "border-white"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Username
            </label>
            <input
              autocomplete="off"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.username ? "border-red-500" : "border-white"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              autocomplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.email ? "border-red-500" : "border-white"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
