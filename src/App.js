import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';
import CreateArticle from './components/CreateArticle';
import MainFeed from './components/MainFeed';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/create' element={<CreateArticle />} />
        <Route path='/main' element={<MainFeed />} />
        <Route path='/article' element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
