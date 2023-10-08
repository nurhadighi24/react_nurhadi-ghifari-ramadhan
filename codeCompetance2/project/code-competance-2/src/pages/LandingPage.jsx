import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import FooterForm from "../components/FooterForm";
import FooterCompany from "../components/FooterCompany";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <FooterForm />
      <FooterCompany />
    </>
  );
}
