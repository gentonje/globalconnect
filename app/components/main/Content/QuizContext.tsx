"use client";
import React, { createContext, useState } from "react";
import { Chapter } from "@/app/data/CourseContent";
import { toast } from "sonner";

// Create a context
type QuizContextType = {
  question: {
    type: string;
    text: string;
    choices?: string[];
    answer: number;
    feedback?: string;
  }[];
  currentQuestion: number;
  handleChoiceSelect: (choice: string, index: number) => void;
  setCurrentChapterIndex: (index:number) => void,
  setCurrentTopicIndex: (index:number) => void,
  selectedChoice: string;
  isQuizCompleted: boolean;
  isQuizVisible: boolean;
  showResults: boolean;
  score: number;
  handleNextTopic: () => void;
  handlePrevTopic: () => void;
  handleNextClick: () => void;
  completeQuiz: () => void;
  showQuiz: () => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
  incompleteQuiz: () => void;
  currentChapterIndex: number;
  currentTopicIndex: number;
};

// Create a context with a default value that matches the type
export const QuizContext = createContext<QuizContextType>({
  question: [], // Initialize question with an empty array
  currentQuestion: 0,
  score: 0,
  handleChoiceSelect: (choice: string, index: number) => {},
  setCurrentChapterIndex: (index:number) => {},
  setCurrentTopicIndex: (index:number) => {},
  selectedChoice: "",
  handleNextClick: () => {},
  isQuizCompleted: false,
  isQuizVisible:false,
  handleNextTopic: () => {},
  showQuiz: () => {},
  handlePrevTopic: () => {},
  completeQuiz: () => {},
  incompleteQuiz: () => {},
  submitQuiz: () => {},
  restartQuiz: () => {},
  currentChapterIndex: 0,
  currentTopicIndex: 0,
  showResults: false,
});
// Create a provider component
export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const chapters = Chapter.chapters;
  const currentChapter = chapters[currentChapterIndex];
  const [isQuizVisible,setisQuizVisible]=useState<boolean>(false)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const topicQuestion =
    Chapter.chapters[currentChapterIndex].topics[currentTopicIndex].quiz;
  const question = topicQuestion.questions;
  const answer = question[currentQuestion].answer;

  const [progress, setProgress] = useState(0); // State variable for progress
  const [showResults, setShowResults] = useState(true);

  // navigate to next topic
  function handleChoiceSelect(choice: string, index: number) {
    const ChosenIndex = index;
    setSelectedChoice(choice);
    setShowAnswer(true);

    if (ChosenIndex === answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleNextClick() {
    
    if (selectedChoice) {
      setCurrentQuestion((prevQn) => prevQn + 1);
      setShowAnswer(false);
    }

    if (currentQuestion === question.length - 1) {
      setIsQuizCompleted(true);
      setCurrentQuestion(0);
    }
    setSelectedChoice("");
  }
  function submitQuiz() {
    toast.success(`score ${score} submitted`)
      setisQuizVisible(false)
    
  }
  function restartQuiz() {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedChoice("");
    setIsQuizCompleted(false);
  }

  function handleNextTopic() {    
    
    if (currentTopicIndex < currentChapter.topics.length - 1) {
      //Move to the next topic in the current chapter
      
      setCurrentTopicIndex(currentTopicIndex + 1);      
     setisQuizVisible(false)
    } else if (currentChapterIndex < chapters.length - 1) {
      //Move to the first topic of the next chapter
      setisQuizVisible(false)      
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentTopicIndex(0);
    } 
    else if(!isQuizCompleted){
      toast.info("please complete quiz first")
    }
    else {
      // Handle reaching the end and reset to start of course
      toast.error("You have reached the end of all topics.");
    }
    //Update progress state after handling current topic change
    restartQuiz();
  }

  //navigate to previous topic
  function handlePrevTopic() {
    restartQuiz();
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      setisQuizVisible(false)
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentTopicIndex(chapters[currentChapterIndex - 1].topics.length - 1);
      setisQuizVisible(false)
    } else {
      // Handle reaching the beginning (no previous topics)

      toast.error("You are already at the beginning of all topics.");
    }

    //Update progress state after handling previous topic change
  }

  //Update progress state after handling previous topic change

  //Function to calculate progress

  // Function to update the state
  const completeQuiz = () => {
    setIsQuizCompleted(true);
  };
  const showQuiz = () => {
    setisQuizVisible(true);
  };
  const incompleteQuiz = () => {
    setIsQuizCompleted(false);
  };


  return (
    <QuizContext.Provider
      value={{
        isQuizVisible,
        handleChoiceSelect,
        isQuizCompleted,
        handleNextTopic,
        handlePrevTopic,
        handleNextClick,
        completeQuiz,
        incompleteQuiz,
        showQuiz,
        currentChapterIndex,
        currentTopicIndex,
        showResults,
        question,
        currentQuestion,
        score,
        submitQuiz,
        selectedChoice,
        restartQuiz,
        setCurrentChapterIndex,
        setCurrentTopicIndex,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
