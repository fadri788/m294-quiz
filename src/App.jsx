import AppHeader from "./components/AppHeader";
import QuestionCard from "./components/QuestionCard";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
      <AppHeader />

      {/* Die Karte holt ihre Frage noch selbst, ab 03A von hier */}
      <main>
        <QuestionCard />
      </main>

      <AppFooter />
    </>
  );
}

export default App;
