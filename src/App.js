import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';
import CreateArticle from './components/CreateArticle';
import MainFeed from './components/MainFeed';
import NavBar from './components/NavBar';
import NotFound from './components/404';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/newArticle' element={<CreateArticle />} />
        <Route path='/articles' element={<MainFeed />} />
        <Route path='/articles/:articleId' element={<ArticleDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
