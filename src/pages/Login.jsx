import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apiService/allApiOperation/authApi";
function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="bg-gray-900 grid min-h-[calc(100vh-3.5rem)] place-items-center">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-11 py-12 md:flex-row md:gap-y-0 md:gap-x-1">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <form
            onSubmit={handleOnSubmit}
            className="flex w-full flex-col gap-y-4"
          >
            <label className="w-full">
              <p className="mb-1 text-[0.975rem] leading-[1.375rem] text-white">
                Email Address <sup className="text-red-400">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>

            <label className="relative w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
                Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-white"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <div className="right-0 text-blue-600 w-full mx-80 ">
              <Link to="/forgot-password">ForgatePassword</Link>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
            >
              Login
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="rounded-2xl -top-4 right-4 z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;