import { useForm } from "react-hook-form"; // React Hook Form for handling form state and validation
import Header from "../components/extra/Header"; // Header component

const LoginPage = () => {
  // Initialize React Hook Form methods
  const {
    register, // to register inputs for validation
    handleSubmit, // to handle form submission
    formState: { errors }, // object containing validation errors
    reset, // reset form fields after successful submission
  } = useForm();

  // Function to run on successful form submission
  const onSubmit = () => {
    alert("Login successful!!!"); // simple success alert
    reset(); // clear all form fields
  };

  return (
    <>
      <Header /> {/* Render page header */}
      <div className="min-h-screen flex items-center justify-center bg-white px-2 sm:px-4 md:px-8 lg:px-20">
        {/* Login form container */}
        <form
          className="bg-black shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          onSubmit={handleSubmit(onSubmit)} // handle validation + submission
        >
          {/* Form title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-white">
            Login
          </h2>

          {/* Name input field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              {...register("name", { required: "Name is required" })} // required validation
              autoComplete="off"
              type="text"
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-xl focus:outline-none bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg ${
                errors.name ? "border-red-500" : "border-white"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.name.message}
              </p> // show error
            )}
          </div>

          {/* Username input field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })} // required + min length validation
              autoComplete="off"
              type="text"
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-xl focus:outline-none bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg ${
                errors.username ? "border-red-500" : "border-white"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.username.message}
              </p> // show error
            )}
          </div>

          {/* Email input field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
              })} // required + regex pattern validation
              autoComplete="off"
              type="email"
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-xl focus:outline-none bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg ${
                errors.email ? "border-red-500" : "border-white"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.email.message}
              </p> // show error
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 sm:py-2.5 md:py-3 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
