import React, { useContext } from "react";
import { Chapter } from "@/app/data/CourseContent";
import { QuizContext } from "@/app/components/main/Content/QuizContext";
import { BsFillCaretDownSquareFill, BsFillCcCircleFill } from "react-icons/bs";
import { FcAddImage, FcBookmark, FcDocument, FcLock } from "react-icons/fc";
import Markdown from "markdown-to-jsx";
export function Sidebar() {
  // Consume the QuizContext
  const quizContext = useContext(QuizContext);

  // Destructure the context value to access state and function
  const {
    currentChapterIndex,
    currentTopicIndex,
    setCurrentChapterIndex,
    setCurrentTopicIndex,
  } = quizContext || {};

  const handleChapterClick = (index: number) => {
    // Only reset topic index if clicking a different chapter
    if (index !== currentChapterIndex) {
      setCurrentTopicIndex(0);
    }
    setCurrentChapterIndex(index);
  };

  return (
    <div className="m-2 rounded-md hidden h-full md:block border border-teal-500">
      <div className=" lg:min-w-64 md:min-w-56 lg:w-64 md:w-56">
        <ul>
          {Chapter.chapters.map((chapter, index) => (
            <li key={index}>
              <button
                onClick={() => handleChapterClick(index)}
                className={`flex  w-full text-left rounded-md ${
                  currentChapterIndex === index
                    ? " font-sans bg-white border-r-1"
                    : ""
                }`} // Apply styling for active chapter
              >
                <div className=" flex flex-col mx-1">
                  <h1 className="font-semibold">
                  <Markdown children={chapter.title} />                    
                  </h1>
                  <hr />
                  {currentChapterIndex === index ? (
                    <ul>
                      {Chapter.chapters[currentChapterIndex].topics.map(
                        (topic, index) => (
                          <li key={index}>
                            <p
                              onClick={() => setCurrentTopicIndex(index)}
                              className={`flex  mx-auto w-full text-left  rounded-md ${
                                currentTopicIndex === index
                                  ? "border border-sky-700 bg-green-200 border-r-4 rounded-r-md"
                                  : "bg-teal-50"
                              }`} // Apply styling for active topic
                            >
                              <span className=" mx-1 pl-1">
                              <Markdown children={topic.title} />
                              </span>
                            </p>
                            <hr />
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
       
      </div>

     
    </div>
  );
}
