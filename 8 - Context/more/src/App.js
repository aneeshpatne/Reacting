import './App.css';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/header';
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>


  );
}

export default App;
