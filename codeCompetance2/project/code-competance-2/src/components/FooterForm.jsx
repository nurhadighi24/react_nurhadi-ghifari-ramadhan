import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input, TextArea } from "./Input";
import Button from "./Button";

const schema = z.object({
  firstName: z.string().min(1, { message: "Please enter a valid First Name!" }),
  lastName: z.string().min(1, { message: "Please enter a valid Last Name!" }),
  email: z.string().email(),
  description: z
    .string()
    .min(1, { message: "Please enter a valid Description!" }),
});

export default function FooterForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    alert(
      `first Name: ${data.firstName} \nLast Name: ${data.lastName} \nEmail: ${data.email} \nDescription: ${data.description}`
    );
    reset();
  }

  return (
    <div className=" flex justify-center items-center py-10 bg-slate-300">
      <div className=" mx-28 ">
        <h1 className=" font-bold mb-10">Contact Us</h1>
        <p>
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the{" "}
          <a href="#" className=" text-blue-700 hover:text-blue-950 underline">
            department email
          </a>{" "}
          you{"'"}d like to contact below.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex gap-3">
            <Input
              label="First Name*"
              register={register}
              name="firstName"
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              register={register}
              name="lastName"
              error={errors.lastName?.message}
            />
          </div>
          <Input
            label="Email*"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <TextArea
            label="What can we help you with?"
            register={register}
            name="description"
            error={errors.description?.message}
          />
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
