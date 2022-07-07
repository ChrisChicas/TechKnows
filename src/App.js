import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/articles/ArticleDetails';
import CreateArticle from './components/articles/CreateArticle';
import Home from './components/Home';
import LoginForm from './components/users/LoginForm';
import MainFeed from './components/articles/MainFeed';
import NavBar from './components/NavBar';
import NotFound from './components/404';
import SignUpForm from './components/users/SignUpForm';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/newArticle' element={<CreateArticle />} />
        <Route path='/articles' element={<MainFeed />} />
        <Route path='/articles/:articleId' element={<ArticleDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
