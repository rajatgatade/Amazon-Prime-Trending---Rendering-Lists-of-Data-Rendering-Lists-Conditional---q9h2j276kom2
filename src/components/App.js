import React, { useState } from "react";
import '../styles/App.css';

const App = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentSlideIndex(0);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="App">
      <div id="navigation">
        <button
          data-testid="button-restart"
          disabled={currentSlideIndex === 0}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={currentSlideIndex === 0}
          onClick={handlePrevSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          disabled={currentSlideIndex === slides.length - 1}
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
      <div id="slide">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
};

export default App;
