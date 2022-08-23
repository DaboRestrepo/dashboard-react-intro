import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

export default function App() {
  return (
    <>
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    <body className="App-body">
      <p>Login to access the full dashboard</p>
    </body>
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
    </footer>
    </>
  );
}
