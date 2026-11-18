import { useState } from "react";
import { questions } from "../questions";

const letters = ["A", "B", "C", "D"];

function QuestionCard() {
  const question = questions[0];
  const { category, text, answers, correct } = question;
  const [selected, setSelected] = useState(null);

  const isAnswered = selected !== null;
  const isCorrect = selected === correct;

  function classFor(answer) {
    if (!isAnswered) return "";
    if (answer === correct) return "correct";
    if (answer === selected) return "wrong";
    return "";
  }

  return (
    <section>
      <div className="card-head">
        <span className="badge badge-accent">{category}</span>
      </div>

      <p className="question">{text}</p>

      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={answer}
            data-letter={letters[index]}
            className={classFor(answer)}
            disabled={isAnswered}
            onClick={() => setSelected(answer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {isAnswered && (
        <p className={isCorrect ? "alert alert-success" : "alert alert-error"}>
          {isCorrect ? "Richtig!" : `Leider falsch. Richtig ist ${correct}.`}
        </p>
      )}
    </section>
  );
}

export default QuestionCard;
