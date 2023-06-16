import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function LogoPage() {
  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jeju-clothing-platform.web.app"
        />
        <meta property="og:title" content="GyugaZ" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/103917785/195018378-f0cfe464-86f1-4886-ad19-9d6f5ac363b4.png"
        />
        <meta
          property="og:description"
          content="제주 보세 업체 종합플랫폼. 제주도 보세. 제주도 보세 온라인. 제주 의류종합 플랫폼"
        />
        <meta property="og:site_name" content="GyugaZ" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale" content="en_US" />
        <title>규가</title>
      </Helmet>
      <section className="h-3/5 flex flex-col items-center">
        <div className="flex items-center justify-around h-52 w-full">
          <Link
            to="/man"
            className="rounded-full border-2 border-black p-10 hover:scale-150"
          >
            남성
          </Link>
          <Link
            to="/woman"
            className="rounded-full border-2 border-black p-10 hover:scale-150"
          >
            여성
          </Link>
        </div>
        <Link
          to="/"
          className="rounded-full border-2 border-black p-20 hover:scale-150"
        >
          Logo
        </Link>
        <div className="flex items-center justify-around h-52 w-full">
          <Link
            to="common"
            className="rounded-full border-2 border-black p-10 hover:scale-150"
          >
            공통
          </Link>
          <Link
            to="Accessories"
            className="rounded-full border-2 border-black p-10 hover:scale-150"
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
