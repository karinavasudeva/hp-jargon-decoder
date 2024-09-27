import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import ResultListItem from './components/ResultListItem';
import jargonDatabase from './data/jargonDatabase';
import { Grid, List } from 'lucide-react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCardView, setIsCardView] = useState(true);

  const handleSearch = () => {
    // Filter jargonDatabase based on searchTerm
    // This is a simple implementation; you might want to add more sophisticated search logic
    return jargonDatabase.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.plainEnglish.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredTerms = handleSearch();

  return (
    <div className="app">
      <header>
        <h1>The Health Policy Jargon Decoder</h1>
        <p>Decoding the healthcare maze, one term at a time.</p>
      </header>

      <main>
        <div className="controls">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <div className="view-toggle">
            <button 
              className={isCardView ? 'active' : ''}
              onClick={() => setIsCardView(true)}
            >
              <Grid size={20} />
            </button>
            <button 
              className={!isCardView ? 'active' : ''}
              onClick={() => setIsCardView(false)}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className={isCardView ? 'card-grid' : 'list-view'}>
          {filteredTerms.map((item, index) => (
            isCardView ? (
              <ResultCard key={index} {...item} />
            ) : (
              <ResultListItem key={index} {...item} />
            )
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 The Health Policy Jargon Decoder</p>
      </footer>
    </div>
  );
};

export default App;