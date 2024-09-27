import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ResultListItem = ({ term, plainEnglish, example }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="result-list-item">
      <div className="list-item-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{term}</h3>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isExpanded && (
        <div className="list-item-content">
          <p><strong>Plain English:</strong> {plainEnglish}</p>
          <p><strong>Example:</strong> {example}</p>
        </div>
      )}
    </div>
  );
};

export default ResultListItem;