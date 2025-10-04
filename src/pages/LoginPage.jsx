import { useForm } from "react-hook-form";
import Header from "../components/extra/Header";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    alert("Login successful!!!");
    reset();
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <form
          className="bg-black shadow-lg rounded-2xl p-8 w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              autoComplete="off"
              type="text"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.name ? "border-red-500" : "border-white"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
              })}
              autoComplete="off"
              type="text"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.username ? "border-red-500" : "border-white"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              })}
              autoComplete="off"
              type="email"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none bg-black text-white ${
                errors.email ? "border-red-500" : "border-white"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
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
