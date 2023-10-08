import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

export default function FooterCompany() {
  return (
    <>
      <div className="flex bg-cyan-800 py-10 justify-center ">
        <div className="">
          <h2 className=" font-bold mb-3">
            Or you can catch up with me by click my social media
          </h2>
          <div className=" flex gap-5">
            <a href="https://www.instagram.com/nurhadighifari/">
              <IoLogoInstagram className=" text-4xl text-red-600" />
            </a>
            <a href="https://www.linkedin.com/in/nurhadi-ghifari-ramadhan-27b507207/">
              <IoLogoLinkedin className=" text-4xl text-blue-600" />
            </a>
            <a href="https://www.youtube.com/channel/UCX0fqxQSjDIs5EIRwllZFhQ">
              <IoLogoYoutube className=" text-4xl text-red-600" />
            </a>
          </div>
        </div>

        <div className="mx-5">
          <p>
            Powerful, extensible, and feature-packed frontend toolkit. Build and
            customize with Sass, utilize prebuilt grid system and components,
            and bring projects to life with powerful JavaScript plugins.
          </p>
        </div>

        <div>
          <h5>Come and say Hello!</h5>
          <p>Kebayoran Lama Selatan, Jakarta Selatan, DKI Jakarta, 12240.</p>
          <p className=" text-amber-800">(+62)0212345678</p>
        </div>
      </div>

      <footer className=" bg-cyan-950 text-center py-5">
        <p>
          Privacy Policy -- Sitemap -- Support --
          <span className=" text-amber-500">
            © 2023 Nurhadi Ghifari Ramadhan
          </span>
        </p>
      </footer>
    </>
  );
}
