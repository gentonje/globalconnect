"use client";

import { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { FcIdea } from "react-icons/fc";


interface letters {
  
  letter: [];
}

export default function Quiz() {
  // Consume the QuizContext
  const quizContext = useContext(QuizContext);
  const letter= ["A","B","C","D"]

  // Destructure the context value to access state and function
  const {
    question,
    currentQuestion,
    handleChoiceSelect,
    handleNextClick,
    isQuizCompleted,    
    selectedChoice,
    score,
    submitQuiz,
    restartQuiz
  } = quizContext || {};

  return (
    <>
      {/* <div className=" flex p-2 m-1 rounded-sm font-sans font-semibold text-yellow-900 bg-green-200">
        {isQuizCompleted ? <p> Quiz done </p> : <p>Quiz not yet Done</p>} 
      </div> */}
      {isQuizCompleted ? (
        <div className=" flex flex-col  min-h-[150px] p-2 w-[80] font-sans border bg-green-50 border-slate-200 items-center justify-center rounded-md">
          <h2 className="p-2 font-bold text-2xl">Your Scores</h2>
          <h1 className="p-2 font-semibold">
            You scored {score} out {question.length}
          </h1>
          <hr className="p-2 " />
          <div className="flex mx-auto space-x-6 items-center">
            <button
              onClick={restartQuiz}
              className=" p-2 bg-sky-700  shadow-md rounded-sm text-white w-[80px]"
            >
              Restart
            </button>
            
            <button
              onClick={submitQuiz}
              className=" p-2 bg-sky-700  shadow-md rounded-sm text-white w-[80px]"
            >
              Submit
            </button>
            
          </div>
        </div>
      ) : (
        <>
          <div className=" mx-1 px-2 py-4 bg-gray-50 border-2 border-gray-300 rounded-md overflow-y-scroll">
            <div className="">
              <div className="">
                <span><h1 className="text-[20px] font-bold pt-1 px-2">
                  {currentQuestion + 1}
                </h1></span>
                <h1 className=" font-bold pt-2 px-1">
                  . {question[currentQuestion].text}
                </h1>
              </div>

              <div className=" flex flex-col justify-between m-1 p-1 pt-2 bg-zinc-50 text-sky-950 text-left rounded-md border border-yellow-50">
               
                {question &&
                  question.length > 0 &&
                  question[currentQuestion].choices?.map((option, index) => (
                    <button
                      key={option}
                      className={`p-2 m-2 my-1 rounded-sm text-left hover:bg-sky-100 ${
                        option === selectedChoice
                          ? "bg-sky-200 border-r-4 border-zinc-500 shadow-md"
                          : "bg-slate-100 border border-slate-100"
                      } ${selectedChoice ? "disabled" : ""}`}
                      onClick={() => handleChoiceSelect(option, index)}
                    >
                      {letter[index]} . {option}

                    </button>
                  ))}
              </div>
            </div>
            <div className="flex items-end flex-col p-2 m-1 rounded-sm">
              <button
                onClick={handleNextClick}                
                className="p-2 m-1 bg-sky-700  rounded-sm text-white w-[80px]"
              >
                Next
              </button>
              {/* <span className="flex mx-auto justify-left text-left text-green-500 font-bold border-l-4 border m-2 p-1 rounded-md border-teal-500 w-full">Explanation : <FcIdea className="w-6 h-6 animate-bounce"/></span> {question[currentQuestion].feedback} */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
