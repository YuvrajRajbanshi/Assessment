import React from "react";
import { useState } from "react";

import question from "../Api/questionApi";

function Question() {
  const [ans, setAns] = useState(true);
  return (
    <>
      {question.map((quets) => {
        const { id, question, A, B, C, D, Ans } = quets;
        return (
          <div
            className=" text-white  flex items-center justify-center mt-10 "
            key={id}
          >
            <div>
              <div className="">
                <h1 className=" text-2xl font-serif  ">
                  <span className="mr-4 text-2xl  ">{id}</span>
                  {question}
                </h1>
              </div>
              <ul className=" ml-10">
                <li className=" my-2 hover:bg-red-50 hover:outline-none hover:text-green-400 p-2 cursor-pointer rounded-md font-mono">
                  <span className=" text-2xl">A.</span> {A}
                </li>
                <li className=" my-2 hover:bg-red-50 hover:outline-none hover:text-green-400 p-2 cursor-pointer  rounded-md font-mono">
                  <span className="text-2xl">B.</span> {B}
                </li>
                <h3 className=" my-2 hover:bg-red-50 hover:outline-none hover:text-green-400 p-2 cursor-pointer  rounded-md  font-mono">
                  <span className="text-2xl">C.</span> {C}
                </h3>
                <li className=" my-2 hover:bg-red-50 hover:outline-none hover:text-green-400 p-2 cursor-pointer  rounded-md font-mono">
                  <span className="text-2xl">D.</span> {D}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Question;
