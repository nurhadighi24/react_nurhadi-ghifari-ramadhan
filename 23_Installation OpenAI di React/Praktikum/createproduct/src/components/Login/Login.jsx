import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as z from "zod";

import { useToken } from "../../utils/states/token-context";
import { login } from "../../utils/api/auth/dummyUserApi";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import { Input } from "../Form/Input/Input";
import Button from "../Button/Button";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { changeToken } = useToken();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      alert("Berhasil Login!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <h1 className=" text-center">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          register={register}
          name="username"
          label="Username 'admin'"
          error={errors.username?.message}
        />

        <Input
          register={register}
          name="password"
          label="Password   'password123'"
          type="password"
          error={errors.password?.message}
        />
        <Button label="Submit" type="submit" />
      </form>
    </>
  );
}
