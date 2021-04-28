import React, { useState } from "react";
import Button from "../../UI/button";
import classes from "./index.module.css";
import { useForm } from "react-hook-form";
import Input from "../../UI/input";
import { useDispatch } from "react-redux";
import { signup, signin } from "../../store/actions";

const Auth = ({ signUpRequired = false }) => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(signUpRequired);

  const onSubmitSignin = (data) => {
    dispatch(
      signin({
        email: data.email,
        password: data.password,
      })
    );
  };
  const onSubmitSignup = (data) => {
    dispatch(
      signup({
        email: data.emailSignup,
        password: data.passwordSignup,
        fname: data.fname,
        lname: data.lname,
      })
    );
  };
  const {
    register: registerSignin,
    errors: errorsSignin,
    handleSubmit: handleSubmitSignin,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: registerSignup,
    errors: errorsSignup,
    handleSubmit: handleSubmitSignup,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className={classes.fragment}>
      <div
        className={
          isSignup
            ? [classes.container, classes.right_panel_active].join(" ")
            : classes.container
        }
        id="container"
      >
        <div
          className={[classes.form_container, classes.sign_up_container].join(
            " "
          )}
        >
          <form onSubmit={handleSubmitSignup(onSubmitSignup)}>
            <h1>Create Account</h1>
            <div className={classes.social_container}>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
            <span>or use your email for registration</span>

            <Input
              type="text"
              name="emailSignup"
              placeholder="Email"
              register={registerSignup}
              validate={{
                required: true,
                pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
              }}
              errors={errorsSignup.emailSignup}
            />
            <Input
              type="password"
              name="passwordSignup"
              placeholder="Passsword"
              register={registerSignup}
              validate={{
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              }}
              errors={errorsSignup.passwordSignup}
            />
            <Input
              type="text"
              name="fname"
              placeholder="First name"
              register={registerSignup}
              validate={{
                required: true,
                pattern: /^([^0-9]*)$/,
                minLength: 2,
                maxLength: 20,
              }}
              errors={errorsSignup.fname}
            />
            <Input
              type="text"
              name="lname"
              placeholder="Last name"
              register={registerSignup}
              validate={{
                required: true,
                pattern: /^([^0-9]*)$/,
                minLength: 2,
                maxLength: 20,
              }}
              errors={errorsSignup.lname}
            />
            <Button>Sign Up</Button>
          </form>
        </div>
        <div
          className={[classes.form_container, classes.sign_in_container].join(
            " "
          )}
        >
          <form onSubmit={handleSubmitSignin(onSubmitSignin)}>
            <h1>Sign in</h1>
            <div className={classes.social_container}>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className={classes.social}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
            <span>or use your account</span>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              register={registerSignin}
              validate={{
                required: true,
                pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
              }}
              errors={errorsSignin.email}
            />
            {/* * Passwords must be
             * - At least 8 characters long, max length anything
             * - Include at least 1 lowercase letter
             * - 1 capital letter
             * - 1 number
             * - 1 special character => !@#$%^&* */}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
              register={registerSignin}
              validate={{
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              }}
              errors={errorsSignin.password}
            />
            <a href="#">Forgot your password?</a>
            <Button type="submit">Sign In</Button>
          </form>
        </div>
        <div className={classes.overlay_container}>
          <div className={classes.overlay}>
            <div
              className={[classes.overlay_panel, classes.overlay_right].join(
                " "
              )}
              tabIndex="-1"
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button light tabIndex clickedHandler={() => setIsSignup(true)}>
                <span>Sign Up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Button>
            </div>
            <div
              className={[classes.overlay_panel, classes.overlay_left].join(
                " "
              )}
              tabIndex="-1"
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button light tabIndex clickedHandler={() => setIsSignup(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
