import '../styles/app.css';

const App = () => {
  return (
    <div className="app">
    <h1>Example shop</h1>
    <nav>
      <ul className='app__nav-list'>
        <li className='app__nav-list-item'>Homepage</li>
        <li className='app__nav-list-item'>Products</li>
        <li className='app__nav-list-item'>About</li>
        <li className='app__nav-list-item'>Contact</li>
      </ul>
    </nav>
    </div>
  );
}

export default App;
