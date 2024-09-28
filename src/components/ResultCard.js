import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const ResultCard = ({ term, plainEnglish, example, image }) => {
  const [isExampleVisible, setIsExampleVisible] = useState(false);

  const toggleExample = () => setIsExampleVisible(!isExampleVisible);

  return (
    <div className="result-card">
      <h2 className="card-title">{term}</h2>
      {image && (
        <div className="card-image">
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={term} />
        </div>
      )}
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