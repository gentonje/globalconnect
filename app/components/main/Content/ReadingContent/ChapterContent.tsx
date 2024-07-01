"use client";
// Import statements
import React, { useState, useEffect, useContext } from "react";
import { toast } from "sonner"; // Assuming this is a library for notifications
import { Chapter } from "@/app/data/CourseContent";
import { QuizContext } from "@/app/components/main/Content/QuizContext";
import { Progress } from "@/components/ui/progress";
import Quiz from "../Quiz/Quiz";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcDocument, FcLeft } from "react-icons/fc";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import Markdown from "markdown-to-jsx";
import PdfViewer from "../../MainPage/PdfViewer";
import MobileNavbarBottom from "../../MainPage/MobileNav";
import Header from "@/components/component/Header";
import Image from "next/image";

// Import Quiz component if needed (commented out)
// import Quiz from "./Quiz";

// Custom hook to check if component is mounted
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Cleanup function for unmounted component
  }, []);

  return isMounted;
};

export default function ChapterContent() {
  // Declare state variables

  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Consume the QuizContext
  const quizContext = useContext(QuizContext);

  // Destructure the context value to access state and function
  const {
    isQuizVisible,
    handleNextTopic,
    handlePrevTopic,
    currentChapterIndex,
    currentTopicIndex,
    isQuizCompleted,
    showQuiz,
    score,
    setCurrentChapterIndex,
  } = quizContext || {};

  const isMounted = useIsMounted(); // Get mounted state

  // Handle previous topic

  // Calculate progress on initial render and chapter/total changes

  // Function to handle quiz click (shows message for now)
  function handleQuiz() {
    toast.error("No quiz available.");
  }

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const paragraphs = Chapter.chapters[currentChapterIndex].topics[
    currentTopicIndex
  ].content as string[];
  const paragraph = Chapter.chapters[currentChapterIndex].topics[
    currentTopicIndex
  ].content as string;

  // Function to check if chapter has quiz (commented out for now)
  // const hasQuiz =
  //   Chapter.chapters[currentChapterIndex].chapterQuiz?.questions.length > 0;
  const numerator = currentTopicIndex + 1;
  const denominator = Chapter.chapters[currentChapterIndex].topics.length;
  const progressValue = Math.ceil((numerator / denominator) * 100);
  return (
    <div className="flex  mx-1 rounded-md min-w-[vw] min-h-screen">
      <div className=" md:space-y-2">
        {/* <h1 className="bg-sky-100 px-1 p-2 font-sans  border border-sky-950 text-center rounded-md shadow-md tracking-tighter ">
          Course Title : {Chapter.course.title}
        </h1>
        <h2 className="bg-sky-100 px-1 p-2 font-sans  border border-sky-950 text-center rounded-md shadow-md tracking-tighter ">
          Chapter : {Chapter.chapters[currentChapterIndex].title}
        </h2> */}
        <div className="md:space-y-2">
          <div className="flex flex-col">
            <Header progress={progressValue} />
          </div>
        </div>
        <h3 className=" m-1 p-1 text-base font-semibold justify-center border-2 border-teal-500 text-center h-[30px] overflow-hidden rounded-md shadow-md tracking-tighter">
          <span className="text-sky-700 font-bold">
            CH. {currentChapterIndex + 1}{" "}
          </span>
          {
            Chapter.chapters[currentChapterIndex].topics[currentTopicIndex]
              .title
          }
        </h3>

        {/* Display chapters */}
        <div className="my-1 ">
          <ul>
            {Chapter.chapters.map((chapter, index) => (
              <li key={index}>
                <button
                  className={`flex p-2 text-left rounded-md ${
                    currentChapterIndex === index ? "hidden" : "hidden"
                  }`} // Apply styling for active chapter
                >
                  {/* <span className="p-1 font-sans">{chapter.title}</span> */}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {Chapter.chapters[currentChapterIndex].topics.map(
              (topic, index) => (
                <li key={index}>
                  <button
                    className={`flex pl-4 p-2 w-full text-left text-sm rounded-md ${
                      currentTopicIndex === index ? "hidden" : "hidden"
                    }`} // Apply styling for active topic
                  >
                    {/* <span className="p-1  font-sans">{topic.title}</span> */}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        {/* List Topics based on current chapter index*/}

        <div>
          {/* Display Topic Content here based on current Topic index*/}
          {/* also check if component is mounted to prevent hydration errors*/}
          {isMounted && (
            <div
              className={` indent-4 mx-1 mt-2 p-2 pt-4 mb-16 text-justify max-h-screen border border-b-4 border-t-8 border-l-2 border-t-teal-700 border-b-sky-500   rounded-lg shadow-sm shadow-emerald-300 animate-in overflow-y-scroll
              ${
                isExpanded
                  ? "h-[full]"
                  : "text-ellipsis text-pretty h-auto shadow-xl"
              }`}
            >
              {typeof Chapter.chapters[currentChapterIndex].topics[
                currentTopicIndex
              ].content === "string" ? (
                <>
                  <p className="indent-4 text-slate-800 ">
                    <Markdown children={paragraph} />
                  </p>
                </>
              ) : (
                <>
                  {paragraphs.map((paragraph: string, index: number) => (
                    <>
                      <p key={index} className="indent-4 text-slate-800 ">
                        <Markdown children={paragraph} />
                      </p>
                      <br />
                    </>
                  ))}
                </>
              )}
            </div>
          )}
          <div className="flex mx-auto w-[95%] mt-2 md:mt-4 fixed bottom-1 left-2 right-2 md:static border bg-sky-100 border-t-2 py-1 bg-opacity-80  border-indigo-800  rounded-md ">
            <div className="flex mx-auto md:space-x-16">
              <div className="flex space-x-4 justify-between ">
                <button
                  type="button"
                  onClick={handlePrevTopic}
                  className="bg-green-300  w-16 mx-1 p-1 font-bold  text-[18px] border border-slate-400 rounded-md shadow-sm text-teal-950"
                >
                  Prev
                </button>

                {/**Quiz here */}
                <div className=" flex rounded-sm shadow-sm justify-center ">
                  {isQuizVisible ? (
                    <>
                      <div className="mt-1 rounded-md justify-center ">
                        <Dialog>
                          <DialogTrigger>
                            <p className="bg-green-300 text-[18px] px-2 font-bold border border-slate-400 rounded-md shadow-sm text-teal-950 animate-bounce">
                              Start Quiz
                            </p>
                          </DialogTrigger>
                          <DialogContent className="bg-sky-200 p-1 mx-auto">
                            <Quiz />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={showQuiz}
                        className="bg-sky-700  rounded-md px-2 py-1 text-[18px]"
                      >
                        Attempt Quiz
                      </Button>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleNextTopic}
                  className="bg-green-300  w-16 mx-1 p-1 font-bold  text-[18px] border border-slate-400 rounded-md shadow-sm text-teal-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* <PdfViewer /> */}
        </div>
      </div>
    </div>
  );
}
