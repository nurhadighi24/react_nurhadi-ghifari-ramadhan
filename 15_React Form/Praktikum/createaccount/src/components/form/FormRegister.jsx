import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import Button from "../button/button";
import Input from "../input/Input";
import { Link } from "react-router-dom";

const schema = z.object({
  firstName: z.string().min(3, { message: "at least 3 character long" }),
  lastName: z.string().min(3, { message: "at least 3 character long" }),
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(8, { message: "at least 8 character long" }),
  confirmPassword: z.string(),
});

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    if (data.password !== data.confirmPassword) {
      alert("password and confirm password should match");
    } else {
      console.log(data);
    }
  }
  return (
    <>
      <form className=" flex justify-center " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-col border-cyan-800 border-2 rounded p-3">
          <div className="flex mb-3 gap-3">
            <Input
              label="First Name"
              type="text"
              register={register}
              name="firstName"
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              type="text"
              register={register}
              name={"lastName"}
              error={errors.lastName?.message}
            />
          </div>

          <Input
            label="Username"
            type="text"
            name="username"
            register={register}
            error={errors.username?.message}
          />
          <Input
            label="Email*"
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <div className="flex mt-3 gap-3">
            <Input
              label="Password*"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password*"
              type="password"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to="/login"
              className=" hover:text-blue-400 hover:underline text-sm"
            >
              to login page
            </Link>
            <Button label="Submit" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
}
