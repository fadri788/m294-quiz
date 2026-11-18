import { questions } from "../questions";

function AppHeader() {
  return (
    <header>
      <div className="row">
        <span className="brand">Wissens<span>Quiz</span></span>
        <span className="spacer"></span>
        <span className="score">Frage <b>1</b> von {questions.length}</span>
      </div>
    </header>
  );
}

export default AppHeader;
