import React, { useState } from 'react';

const news = [
  { id: 1, title: 'Breaking News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Breaking News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, title: 'Breaking News 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 4, title: 'Breaking News 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 5, title: 'Breaking News 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

const NewsSlider = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentNewsIndex(currentNewsIndex === 0 ? news.length - 1 : currentNewsIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentNewsIndex(currentNewsIndex === news.length - 1 ? 0 : currentNewsIndex + 1);
  };

  return (
    <div>
      <h2>{news[currentNewsIndex].title}</h2>
      <p>{news[currentNewsIndex].content}</p>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default NewsSlider;
