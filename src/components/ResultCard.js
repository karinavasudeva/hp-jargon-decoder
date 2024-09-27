import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const ResultCard = ({ term, plainEnglish, example }) => {
  const [isExampleVisible, setIsExampleVisible] = useState(false);

  const toggleExample = () => setIsExampleVisible(!isExampleVisible);

  return (
    <div className="result-card">
      <h2 className="card-title">{term}</h2>
      <p className="definition">{plainEnglish}</p>
      <button className="toggle-example" onClick={toggleExample}>
        {isExampleVisible ? (
          <>
            <ChevronUp size={20} />
            Hide Example
          </>
        ) : (
          <>
            <ChevronDown size={20} />
            Show Example
          </>
        )}
      </button>
      {isExampleVisible && (
        <div className="example">
          <BookOpen size={20} />
          <p>{example}</p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;