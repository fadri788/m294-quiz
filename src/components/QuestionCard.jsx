import { questions } from "../questions";

const letters = ["A", "B", "C", "D"];

function QuestionCard() {
  const question = questions[0];
  const { category, text, answers } = question;

  return (
    <section>
      <div className="card-head">
        <span className="badge badge-accent">{category}</span>
      </div>

      <p className="question">{text}</p>

      <div className="answers">
        {answers.map((answer, index) => (
          <button key={answer} data-letter={letters[index]}>
            {answer}
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;
