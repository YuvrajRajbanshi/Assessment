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
    <div className="container mx-auto p-4">
      {question.map((quet) => {
        const { id, question, A, B, C, D, Ans } = quet;
        const questionStatus = answeredQuestions[id];

        return (
          <div
            className="text-white flex flex-col items-start justify-center mt-10 bg-gray-800 p-6 rounded-lg shadow-md"
            key={id}
          >
            <div>
              <h1 className="text-2xl font-serif mb-4">
                <span className="mr-4 text-2xl font-bold">{id}</span>
                {question}
              </h1>
            </div>
            <ul className="ml-10">
              {[A, B, C, D].map((option, index) => {
                const optionLetter = ["A", "B", "C", "D"][index];
                let optionClass =
                  "my-2 hover:bg-gray-200 hover:text-gray-800 p-2 cursor-pointer rounded-md font-mono transition duration-200";

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
                    <span className="text-2xl font-bold">{optionLetter}.</span>{" "}
                    {option}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="fixed bottom-10 right-10">
        <h2 className="text-white bg-red-700 inline-block px-4 py-2 rounded-md">
          Correct Answers: {count}
        </h2>
      </div>
    </div>
  );
}

export default Question;
