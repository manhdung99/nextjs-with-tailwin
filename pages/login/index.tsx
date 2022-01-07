import Head from "next/head";
import React from "react";

export default function Login() {
  const inputForms = [
    {
      type: "text",
      id: "username",
      placeholder: "UserName",
    },
    {
      type: "email",
      id: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      id: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      id: "password2",
      placeholder: "Confirm password",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className=" w-[400px] bg-[#fff] relative ">
        <h1 className="text-center pt-[20px] text-[32px] font-bold tracking-[1px]">
          Register
        </h1>
        <form className="px-[40px]">
          {inputForms.map((inputForm, index) => (
            <div
              key={index}
              className="relative border-b-2 border-[#adadad] my-[40px]"
            >
              <input
                className=" peer login-input  outline-0 h-[40px] w-[100%] text-[16px] bg-inherit "
                type={inputForm?.type ? inputForm?.type : ""}
                id={inputForm?.id ? inputForm.id : ""}
                placeholder={
                  inputForm?.placeholder ? inputForm.placeholder : ""
                }
              ></input>
              <span className="before:absolute before:bg-[red] before:h-[2px] before:w-[0] before:left-0 before:bottom-[-2px] before:transition-[0.5s] peer-focus:before:w-[100%]"></span>
              <small></small>
            </div>
          ))}

          {/* <div className="relative border-b-2 border-[#adadad] my-[40px]">
          <input className='outline-0 h-[40px] w-[100%] text-[16px] bg-inherit' type="email" id="email" placeholder="Email" />
          <span></span>
          <small></small>
        </div>
        <div className="relative border-b-2 border-[#adadad] my-[40px]">
          <input className='outline-0 h-[40px] w-[100%] text-[16px] bg-inherit' type="password" id="password" placeholder="Password" />
          <span></span>
          <small></small>
        </div>
        <div className="relative border-b-2 border-[#adadad] my-[40px]">
          <input className='outline-0 h-[40px] w-[100%] text-[16px] bg-inherit'
            type="password"
            id="password2"
            placeholder="Confirm password"
          />
          <span></span>
          <small></small>
        </div> */}
          <input
            className=" ml-[50%] translate-x-[-50%] bg-[#2691d9] text-white w-[100%] h-[50px] rounded-[25px] cursor-pointer hover:bg-[#08609a] font-bold text-[24px] "
            type="submit"
            value="Login"
          />
          <div className="my-[25px] text-center text-[16px]">
            Not a member?{" "}
            <a className="text-[#2691d9]" href="#">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
