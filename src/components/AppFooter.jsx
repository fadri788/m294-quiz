import { questions } from "../questions";

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="row">
        <span className="muted">Modul 294</span>
        <span className="spacer"></span>
        {/* die Zahl kommt aus den Daten */}
        <span className="muted">{questions.length} Fragen, {year}</span>
      </div>
    </footer>
  );
}

export default AppFooter;
