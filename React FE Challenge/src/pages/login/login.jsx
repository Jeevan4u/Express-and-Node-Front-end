import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoginAuthMutation } from "../../features/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, login } from "../../features/slice/appSlice";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { token } = useSelector(appSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAuth, { isLoading, isSuccess, isError, error, data }] =
    useLoginAuthMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginAuth(data);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        login({
          token: data.token,
        })
      );
      navigate("/dashboard");
    }
  }, [isSuccess, isError]);
  return (
    <div className="RegisterContainer ">
      <div className="grid xl:h-screen xl:w-screen md:grid-cols-2 sm:grid-cols-1">
        <div className="left bg-Stroke bg-no-repeat bg-right-bottom bg-cover my-5 py-[170px]">
          <div className="formWrapper max-w-[400px] mx-auto">
            <div className="GetStartedSection mb-[20px]">
              <h1 className="font-extrabold">Sign In</h1>
            </div>
            <div className="form_container mb-[32px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Email address my-[24px]">
                  <label
                    htmlFor=""
                    className="mb-[4px] font-[400] text-[16px] leading-[24px]"
                  >
                    Enter Email address :
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@email.com"
                    className="appearance-none py-[12px] pl-[16px] w-full  bg-transparent border-[2px] border-gray-400 rounded-md"
                    {...register("email", {
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      required: true,
                      minLength: {
                        value: 1,
                        message: "Min Length is 1",
                      },
                      maxLength: {
                        value: 20,
                        message: "Max Length is 20",
                      },
                    })}
                    ref={register("email").ref}
                  />
                  {errors.email && (
                    <p className="text-brand_error">
                      Email Format is incrroect
                    </p>
                  )}
                </div>
                <div className="password address my-[24px] relative">
                  <label
                    htmlFor=""
                    className="mb-[4px] font-[400] text-[16px] leading-[24px]"
                  >
                    Enter Your Password
                  </label>
                  <input
                    type="password"
                    placeholder="XXXXXXXXXXXXXX"
                    className=" appearance-none py-[12px] pl-[16px] w-full  bg-transparent border-[2px] border-gray-400 rounded-md"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 1,
                        message: "Min Length is 1",
                      },
                      maxLength: {
                        value: 20,
                        message: "Max Length is 20",
                      },
                      pattern:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    })}
                  />
                  {errors.password && (
                    <p className="text-brand_error">
                      Password Format is incorrect
                    </p>
                  )}
                  <img
                    src=""
                    alt=""
                    className="object-cover w-[20px] absolute top-[60%] right-3"
                  />
                </div>

                <div className="Button my-[24px]">
                  {/* <button className="w-full bg-brand_primary_fade rounded-sm py-[8px]">
                    Submit
                  </button> */}
                  <button
                    className="btn  btn-success w-full"
                    disabled={isLoading && true}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="Right bg-gradient-to-b from-[#517879] to-[#1E3E57] grid place-content-center py-10">
          <div className="rightContent ">
            <h1 className="max-w-[431px] mx-auto font-[700] text-[64px] leading-[96px] text-white">
              “Creativity is intelligence having fun”
            </h1>
            <span className="text-white">-lorem ipsum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
