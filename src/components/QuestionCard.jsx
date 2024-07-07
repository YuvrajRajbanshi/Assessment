import React, { useState } from "react";
import question from "../Api/questionApi";

function Question() {
  const [count, setCount] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const ansHandler = (id, answer, correctAnswer) => {
    if (answeredQuestions[id]) {
      return; // Do nothing if the question has already been answered
    }

    const isCorrect = correctAnswer === answer;

    if (isCorrect) {
      setCount(count + 1);
    }

    setAnsweredQuestions({
      ...answeredQuestions,
      [id]: {
        selectedAnswer: answer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
      },
    });
  };

  return (
    <>
      {question.map((quets) => {
        const { id, question, A, B, C, D, Ans } = quets;
        const questionStatus = answeredQuestions[id];

        return (
          <div
            className="text-white flex items-center justify-center mt-10"
            key={id}
          >
            <div>
              <div>
                <h1 className="text-2xl font-serif">
                  <span className="mr-4 text-2xl">{id}</span>
                  {question}
                </h1>
              </div>
              <ul className="ml-10">
                {[A, B, C, D].map((option, index) => {
                  const optionLetter = ["A", "B", "C", "D"][index];
                  let optionClass =
                    "my-2 hover:bg-red-50 hover:outline-none hover:text-green-400 p-2 cursor-pointer rounded-md font-mono";

                  if (questionStatus) {
                    if (questionStatus.selectedAnswer === option) {
                      optionClass += questionStatus.isCorrect
                        ? " bg-green-500 text-white"
                        : " bg-red-500 text-white";
                    } else if (questionStatus.correctAnswer === option) {
                      optionClass += " bg-green-500 text-white";
                    } else {
                      optionClass += " opacity-50";
                    }
                  }

                  return (
                    <li
                      key={optionLetter}
                      className={optionClass}
                      onClick={() => ansHandler(id, option, Ans)}
                    >
                      <span className="text-2xl">{optionLetter}.</span> {option}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
      <div className="sticky ml-[400px] md:ml-[1000px] bottom-[500px]">
        <h2 className="text-white bg-red-700 inline-block px-1.5 py-2 rounded-md">
          Correct Answer: {count}
        </h2>
      </div>
    </>
  );
}

export default Question;
