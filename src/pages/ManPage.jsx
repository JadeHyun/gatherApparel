import React, { useState } from "react";
import Header from "./Header";
import Category from "./../components/Category";

const dummeData = [
  {
    id: 1,
    type: "남자반팔티",
    img: "",
    title: "난 남자반팔티 1번이야",
    desc: "items-describe-1-for-man",
  },
  {
    id: 2,
    type: "남자긴팔티",
    img: "",
    title: "난 남자긴팔티 1번이야",
    desc: "items-describe-2-for-man",
  },
  {
    id: 3,
    type: "남자반팔티",
    img: "",
    title: "엄청 시원한 남자 반팔티2번",
    desc: "items-describe-3-for-man",
  },
  {
    id: 4,
    type: "여자반팔티",
    img: "",
    title: "심플한 여자 반팔티 1번",
    desc: "items-describe-4-for-man",
  },
  {
    id: 5,
    type: "여자반팔티",
    img: "",
    title: "화려한 여자 반팔티 2번",
    desc: "items-describe-5-for-man",
  },
  {
    id: 6,
    type: "여자긴팔티",
    img: "",
    title: "기본 여자 긴팔티 1번",
    desc: "items-describe-6-for-man",
  },
  {
    id: 7,
    type: "여자긴팔티",
    img: "",
    title: "검은색 여자 긴팔티 2번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 8,
    type: "여자긴팔티",
    img: "",
    title: "흰색 여자 긴팔티 3번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 9,
    type: "여자긴팔티",
    img: "",
    title: "보라색 여자 긴팔티 4번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 10,
    type: "여자반팔티",
    img: "",
    title: "검은색 여자 반팔티 5번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 11,
    type: "여자반팔티",
    img: "",
    title: "하늘색 여자 반팔티 6번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 12,
    type: "남자긴팔티",
    img: "",
    title: "난 남자긴팔티 3번이야",
    desc: "items-describe-2-for-man",
  },
  {
    id: 13,
    type: "남자긴팔티",
    img: "",
    title: "기본 남자 긴팔티 4번이야",
    desc: "items-describe-2-for-man",
  },
  {
    id: 14,
    type: "남자긴팔티",
    img: "",
    title: "8척 장신을 위한 남자 긴팔티 5번이야",
    desc: "items-describe-2-for-man",
  },
  {
    id: 15,
    type: "여자반팔티",
    img: "",
    title: "분홍색 여자 반팔티 30번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 16,
    type: "여자긴팔티",
    img: "",
    title: "8척 장신을 위한 여자 긴팔티 31번",
    desc: "items-describe-7-for-man",
  },
  {
    id: 17,
    type: "여자긴팔티",
    img: "",
    title: "16척 장신을 위한 여자 긴팔티 41번",
    desc: "items-describe-7-for-man",
  },
];

const categoryList = ["남자반팔티", "남자긴팔티", "여자반팔티", "여자긴팔티"];

export default function ManPage() {
  const [currentList, setCurrentList] = useState(dummeData);

  return (
    <section>
      <Header />
      <p className="w-full h-40 text-center pt-16 text-2xl">
        Welcome to GyuGa :)
      </p>
      <Category
        dummeData={dummeData}
        setCurrentList={setCurrentList}
        categoryList={categoryList}
      />
      <div className="mt-6 flex justify-between flex-wrap">
        {currentList?.map((data, idx) => {
          return (
            <div
              className="mt-2 mx-2 py-2 px-1 border-2 border-gray w-5/12"
              key={idx}
            >
              <img className="h-20" src={data.img} alt="img" />
              <p className="border-t-2 border-gray">{data.title}</p>
              <p className="border-t-2 border-gray">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
