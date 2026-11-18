import { questions } from "./questions";

function App() {
  const question = questions[0];
  const { category, text, answers } = question;

  return (
    <>
      <header>
        <div className="row">
          <span className="brand">Wissens<span>Quiz</span></span>
          <span className="spacer"></span>
          <span className="score">Frage <b>1</b> von {questions.length}</span>
        </div>
      </header>

      <main>
        <section>
          <div className="card-head">
            <span className="badge badge-accent">{category}</span>
          </div>

          <p className="question">{text}</p>
        </section>
      </main>
    </>
  );
}

export default App;
