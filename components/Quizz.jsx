"use client";
import React, { useState } from "react";
import { quiz } from "../app/data.js";
import Hero from "@/components/Hero";

const Quizz = () => {
  const [gameStarted, setGameStarted] = useState(true);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setSelectedAnswerIndex(idx);

    setResult((prev) =>
      answer === correctAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      nextQuestion();
      console.log("true");
    } else {
      setSelectedAnswer(false);

      setShowResult(true);

      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    // setChecked(false);
  };

  return (
    <div>
      {gameStarted ? (
        <div className="container">
          <div>
            <button
              className="home-button"
              onClick={() => setGameStarted((start) => !start)}
            >
              Restart
            </button>
          </div>
          <div>""</div>
          <div>
            <h1>The Office US Quizz</h1>
          </div>

          <div>
            <h2>Your Score: {result.score}</h2>
          </div>
          <div>
            {!showResult ? (
              <div className="quiz-container">
                <h3>{questions[activeQuestion].question}</h3>
                {answers.map((answer, idx) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={
                      selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                    }
                  >
                    <span>{answer}</span>
                  </li>
                ))}
              </div>
            ) : (
              <div className="quiz-container">
                <h3>Results</h3>
                {/* <h3>Overall {(result.score / 25) * 100}%</h3> */}
                {/* <p>
                  Total Questions: <span>{questions.length}</span>
                </p> */}
                <h2>
                  Total Score: <span>{result.score}</span>
                </h2>
                <h2>
                  Correct Answers: <span>{result.correctAnswers}</span>
                </h2>
                {/* <p>
                  Wrong Answers: <span>{result.wrongAnswers}</span>
                </p> */}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
};

export default Quizz;
