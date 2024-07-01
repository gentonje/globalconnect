"use client";
import React, { useContext } from "react";
import { Chapter } from "@/app/data/CourseContent";
import { QuizContext } from "@/app/components/main/Content/QuizContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
// import { ResponsiveBar } from "@nivo/bar"



import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import { LucideMenu } from "lucide-react";
import Markdown from "markdown-to-jsx";

export default function MobileNav() {
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

  const handleTopicClick = (index: number) => {
    // Only reset topic index if clicking a different chapter

    setCurrentTopicIndex(index);
  };
  return (
    <div className="block md:hidden  flex-col w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-indigo-300 border p-1 m-1 rounded-lg hover:bg-green-500" size="icon" variant="ghost">
            <LucideMenu className="w-8 h-8" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          className="container ml-2 opacity-95 mt-2  overflow-y-scroll bg-white text-ellipsis min-h-vh w-80"
        >
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between [&[data-state=open]>svg]:rotate-90">
              <ul>
                {Chapter.chapters.map((chapter, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleChapterClick(index)}
                      className={`flex  w-full  text-left rounded-md ${
                        currentChapterIndex === index
                          ? " font-sans bg-white border-r-1"
                          : ""
                      }`} // Apply styling for active chapter
                    >
                      <div className=" flex flex-col ">
                        <h1 className="text-md  m-1 h-[24px] overflow-hidden">
                          <Markdown>{chapter.title}</Markdown>
                        </h1>
                        <hr />
                        {currentChapterIndex === index ? (
                          <ul>
                            {Chapter.chapters[currentChapterIndex].topics.map(
                              (topic, index) => (
                                <li key={index}>
                                  <p
                                    onClick={() => handleTopicClick(index)}
                                    className={`flex mx-auto w-full text-left text-[16px]  rounded-md ${
                                      currentTopicIndex === index
                                        ? "border border-sky-700 bg-teal-200 border-r-4 rounded-r-md"
                                        : "bg-white"
                                    }`} // Apply styling for active topic
                                  >
                                    <span className="pl-3 m-1 h-[24px] overflow-hidden">
                                      {topic.title}
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
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-4">
                <Link
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-green-300"
                  prefetch={false}
                ></Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
