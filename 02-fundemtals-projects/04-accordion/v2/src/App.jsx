import { useState } from 'react';
import data from './data';
import Questions from './Questions';
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setIctiveId] = useState(null);

  const toggleQuestion = function (id) {
    setIctiveId(id === activeId ? null : id);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
