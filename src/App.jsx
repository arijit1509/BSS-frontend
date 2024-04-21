// // App.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`YOUR_BACKEND_URL?q=${query}`);
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               handleSearch();
//             }
//           }}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="results-container">
//         {results.map((result, index) => (
//           <div key={index} className="result-item">
//             <a href={result.url} target="_blank" rel="noopener noreferrer">{result.title}</a>
//             <p>{result.snippet}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const dummyData = [
      { id: 1, title: 'Sample Result 1', url: 'https://example.com/result1', snippet: 'Sample snippet for result 1.' },
      { id: 2, title: 'Sample Result 2', url: 'https://example.com/result2', snippet: 'Sample snippet for result 2.' },
      { id: 3, title: 'Sample Result 3', url: 'https://example.com/result3', snippet: 'Sample snippet for result 3.' },
    ];
  
    setResults(dummyData);
    document.querySelector('.search-container').classList.add('top');
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        {results.map((result) => (
          <div key={result.id} className="result-item">
            <a href={result.url} target="_blank" rel="noopener noreferrer">{result.title}</a>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
