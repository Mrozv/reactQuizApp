import quizCompleteImg from "../assets/quiz-complete.png";
import questions from "../assets/questions.js";

export default function Summary({ answeredQuestions }) {
  const skippedAnswers = answeredQuestions.filter((answer) => {
    return answer === null;
  });
  const correctAnswers = answeredQuestions.filter((answer, index) => {
    return answer === questions[index].answers[0];
  });

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / answeredQuestions.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / answeredQuestions.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {answeredQuestions.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
