import React, { useState } from 'react';
import { articles } from './data';
import Cards from './Cards';
// import Posts from './pages/Posts';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    return (
        <>
            <div className='header_button'>
                <button className='searchbtn' aria-expanded='false'>
                    {
                        <input
                            type='text'
                            className='searchType'
                            placeholder='Search...'
                            onChange={handleChange}
                        />
                    }

                    <svg
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M14.875 14.875L11.7938 11.7938'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>

            <div className='global__cards'>
                {
                    articles
                        .filter((val) => {
                            if (search === '') {
                                return val;
                            } else if (
                                val.title
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return val;
                            }
                        })

                        .map((val) => {
                            return <Cards key={val.id} article={val} />;
                        })

                    // .map((val)=> {
                    //     return (
                    //         <div className='template' key={val.id} >
                    //             <h3>{val.title}</h3>
                    //             {val.image}
                    //             <p>{val.description}</p>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </>
    );
}
