import './App.css';
import Header from './components/NavBar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
// import Footer from './components/Footer';
import Admin from './pages/Admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

//test
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const handleSetUser = function () {
            let token = document.cookie;
            return token ? setUser(true) : setUser(false);
        };
        handleSetUser();
    }, []);

    console.log('user', user);

    return (
        <div className='page-container'>
            <div className='container'>
                <BrowserRouter>
            {/* <Header user={user} /> */}
                    <Toaster
                        position='top-center'
                        toastOptions={{ duration: 1000 }}
                    />
                    <Routes>
                        {/* <Route path='/' element={<Welcome />} /> */}
                        <Route path='/' element={<Home />} />

                        <Route path='/login' element={!user && <Login />} />

                        <Route
                            path='/register'
                            element={!user && <Register />}
                        />

                        <Route
                            path='/posts/:id'
                            element={!user ? <Login /> : <Posts />}
                        />

                        <Route path='/logout' element={!user && <Welcome />} />
                        {/* admin */}
                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                </BrowserRouter>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;
