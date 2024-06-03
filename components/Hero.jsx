"use client";

import React from "react";
import { useState } from "react";
import Quizz from "@/components/Quizz";

function Hero() {
  const [gameStarted, setGameStarted] = useState(true);

  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {gameStarted ? (
          <div className="container">
            <div>
              <h3>Test your knowledge</h3>
              <p>Get your name on top of superfan leaderboard</p>
              <p>Currently on top:</p>
              <p>1. Jhon Doe 37000 points</p>
              <p>2. Alex Dickens 35000 points</p>
              <p>3. Sarah Smith 33000 points</p>
            </div>

            <div>
              <button
                className="home-button"
                onClick={() => setGameStarted((start) => !start)}
              >
                Start!
              </button>
            </div>
          </div>
        ) : (
          <Quizz />
        )}
      </div>
    </section>
  );
}

export default Hero;
