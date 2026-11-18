import { useState } from "react";
import { questions } from "../questions";

function CategoryFilter() {
  const [category, setCategory] = useState(null);

  const categories = [...new Set(questions.map((question) => question.category))];
  const shown =
    category === null
      ? questions
      : questions.filter((question) => question.category === category);

  return (
    <section>
      <div className="row">
        <button
          className={category === null ? "btn-primary" : "btn-ghost"}
          onClick={() => setCategory(null)}
        >
          Alle
        </button>
        {categories.map((name) => (
          <button
            key={name}
            className={category === name ? "btn-primary" : "btn-ghost"}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="list">
        {shown.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryFilter;
