import { useState, useCallback } from "react";
import questions from "../assets/questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const activeQuestionIndex = answeredQuestions.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setAnsweredQuestions((prevState) => {
      return [...prevState, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="quiz">
        <Summary answeredQuestions={answeredQuestions} />
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
