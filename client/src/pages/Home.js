// import {articles} from '../data'
// import Cards from "../Cards"
import SearchBar from '../components/SearchBar';
import Header from '../components/NavBar';
import { useEffect, useState } from 'react';


export default function Home() {
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
        <div className='posts'>
            <Header user={user} />
            {/* {articles.map(article=> (
        <Cards key={article.id} article = {article} />
    ))} */}
            <SearchBar />
        </div>
    );
}
