import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";

export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <h1 className="banner-heading1">Mulai Belajar Dari </h1>
        <span className="banner-heading2">Guru Terbaik Dunia</span>

        <div className="content" >
          <p>
             Mulai, alihkan, atau tingkatkan karir Anda dengan lebih dari 9999 kursus,
             Dan Dapatkan Sertifikat Profesional, dan gelar dari universitas kelas dunia
             dan perusahaan.
          </p>
          <Typewriter
            options={{
              strings: ["Belajar Dimana Saja", "Belajar Tanpa Batas"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/teacher/" className="btn">
                  Teacher
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">
        <br />
        <br />
        <h2>Motivasi</h2>
        “ Jika kamu tidak tahan terhadap penatnya belajar, maka kamu akan menanggung bahayanya kebodohan ” Imam Syafii.
        <br />
        <br />
        <h2>Motivasi</h2>
        “ Pendidikan adalah senjata paling ampuh yang dapat Anda gunakan untuk mengubah dunia ” Nelson Mandela.
        <br />
        <br />
        <h2>Motivasi</h2>
        “ Jelas menjadi menggemparkan bahwa teknologi telah melampaui kemanusiaan kita ” Albert Einstein.
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
