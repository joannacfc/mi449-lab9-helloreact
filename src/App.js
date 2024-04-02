// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const isLoggedIn = true;

const books = [
  { id: 1, title: 'A Farewell to Arms', author: 'Earnest Hemingway', published: '1929', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1313714836i/10799.jpg', width: '264', height: '378'},
  { id: 2, title: 'The Old Man and the Sea', author: 'Earnest Hemingway', published: '1952', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg', width: '264', height: '378'},
  { id: 3, title: 'The Sun Also Rises', author: 'Earnest Hemingway', published: '1926', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1509802323i/3876.jpg', width: '264', height: '378'},
];

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function Bookshelf() {
  const listBooks = books.map(eachBook =>
    <li key={eachBook.id} style={{ listStyleType: 'none', marginBottom: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <p>{eachBook.title}</p>
        <img src={eachBook.image} alt={`${eachBook.title} cover`} width={eachBook.width} height={eachBook.height} />
      </div>
    </li>
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Books</h2>
      <ul>{listBooks}</ul>
    </div>
  );
}

function ZineRack() {
  const availableZines = magazines.filter(zine => zine.isAvailable);
  const unavailableZines = magazines.filter(zine => !zine.isAvailable);

  const listAvailableZines = availableZines.map(zine =>
    <li key={zine.id} style={{ color: 'green', listStyleType: 'none' }}>{zine.title}</li>
  );

  const listUnavailableZines = unavailableZines.map(zine =>
    <li key={zine.id} style={{ color: 'red', listStyleType: 'none' }}>{zine.title}</li>
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Available Magazines</h2>
      <ul>{listAvailableZines}</ul>
      <h2>Unavailable Magazines</h2>
      <ul>{listUnavailableZines}</ul>
    </div>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
    alert('Are you not entertained?');
  }

  return (
    <button onClick={doMagic} className="magic-button">
      Magic {count} times
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Bookshelf />
      <ZineRack />
    {isLoggedIn ? (
      <MagicButton />
    ) : (
      <p>Please login.</p>
    )}
    </div>
  );
}

export default App;
