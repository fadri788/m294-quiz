import { useState } from "react";

const stars = [1, 2, 3, 4, 5];

function QuestionRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="row">
      <span className="muted">Wie gut war die Frage?</span>
      {stars.map((star) => (
        <button
          key={star}
          className={star <= rating ? "btn-primary" : "btn-ghost"}
          onClick={() => setRating(star)}
        >
          {star <= rating ? "★" : "☆"}
        </button>
      ))}
      {rating > 0 && <span className="muted">{rating} von 5</span>}
    </div>
  );
}

export default QuestionRating;
