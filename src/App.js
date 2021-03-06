import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/articles/ArticleDetails';
import CreateArticle from './components/articles/CreateArticle';
import CurrentUserProvider from './contexts/currentUser';
import EditArticle from './components/articles/EditArticle';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginForm from './components/users/LoginForm';
import MainFeed from './components/articles/MainFeed';
import NavBar from './components/NavBar';
import NotFound from './components/404';
import SignUpForm from './components/users/SignUpForm';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedOut, setLoggedOut] = useState(false)
  return (
    <main className='container-fluid'>
      <h1 className='header'>TechKnows Articles</h1>
      <>
        {loggedOut ? <div className="alert alert-info alert-dismissible m-auto" role="alert">
          Successfully logged out.
          <button type="button" className="close" onClick={() => {setLoggedOut(false)}} data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div> 
        : null}
      </>
      <CurrentUserProvider>
        <Router>
          <NavBar setLoggedOut={setLoggedOut}/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUpForm />}/>
            <Route path='/login' element={<LoginForm />}/>
            <Route path='/articles' element={<MainFeed />}/>
            <Route path='/articles/new' element={<CreateArticle />}/>
            <Route path='/articles/:articleId' element={<ArticleDetails />}/>
            <Route path='/articles/:articleId/edit' element={<EditArticle />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer /> 
        </Router>  
      </CurrentUserProvider>
     
    </main>
  );
}

export default App;
