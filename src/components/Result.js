import React from "react";

const Result = ({ correctAttempts, incorrectAttempts }) => {
  return (
    <div className="container">
      <h1 className="text-center">Trivia Results</h1>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Correct Answers: {correctAttempts}</h3>
        </div>
        <div className="col-md-6">
          <h3 className="text-center">
            Incorrect Answers: {incorrectAttempts}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Result;
