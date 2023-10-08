import React from "react";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className=" text-center bg-amber-100 h-screen">
        <h1 className="font-bold">About Us</h1>
        <img
          src="../../src/public/assets/pp1.jpg"
          alt=""
          className=" block m-auto my-5"
        />
        <p className=" text-xl">
          Perkenalkan nama saya <span>Nurhadi Ghifari Ramadhan</span>. Saya
          merupakan seorang Mahasiswa aktif semester 7 di Institut Teknologi
          Indonesia dengan Program Studi Teknik Informatika. <br /> <br />{" "}
          <br />
          Semester demi semester, saya terus meraih pemahaman yang lebih dalam
          tentang dunia kompleks Teknik Informatika. Dari pengembangan perangkat
          lunak hingga pemecahan masalah teknologi, saya telah menggali
          pengetahuan dan keterampilan yang mendalam di bidang ini. <br />{" "}
          <br /> <br />
          Saya percaya bahwa teknologi memiliki potensi besar untuk membawa
          perubahan positif dalam masyarakat. Oleh karena itu, saya berkomitmen
          untuk terus belajar dan berkembang agar suatu hari nanti dapat
          berkontribusi secara signifikan dalam industri Teknik Informatika dan
          menciptakan solusi inovatif untuk tantangan masa depan.
        </p>
      </div>
    </>
  );
}
