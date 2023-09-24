import { Link } from "react-router-dom";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Input from "../input/Input";
import Button from "../button/button";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "at least 8 character long" }),
});

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="border-cyan-800 border-2 rounded p-3">
          <div className="flex-col">
            <Input
              label="email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="hover:text-blue-400 hover:underline text-sm"
            >
              to register page
            </Link>
            <Button type="submit" label="Submit" />
          </div>
        </div>
      </form>
    </>
  );
}
