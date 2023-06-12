import React from "react";
import { Link } from "react-router-dom";

export default function LogoPage() {
  return (
    <main>
      <section className="border-2 border-black h-3/5 flex flex-col items-center">
        <div className="flex items-center justify-around h-52 w-full">
          <Link to="/man" className="rounded-full border-2 border-black p-12">
            남성
          </Link>
          <Link to="/woman" className="rounded-full border-2 border-black p-12">
            여성
          </Link>
        </div>
        <Link to="/" className="rounded-full border-2 border-black p-12">
          Logo
        </Link>
        <div className="flex items-center justify-around h-52 w-full">
          <Link to="common" className="rounded-full border-2 border-black p-12">
            공통
          </Link>
          <Link
            to="Accessories"
            className="rounded-full border-2 border-black p-12"
          >
            잡화
          </Link>
        </div>
      </section>
      <section className="w-full h-96 border-2 border-black">
        회사 슬로건
      </section>
      <section className="w-full h-96 border-2 border-black">회사 소개</section>
    </main>
  );
}
