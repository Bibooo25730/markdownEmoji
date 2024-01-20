import React, { useState, useEffect,useRef } from 'react';
import styles from "./Search.module.css"

const SearchBox = ({ setOptionData ,setSearchData}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [ClickBean,setCLick] = useState(false);
    const myRef = useRef(null);
    const [viBean,setBean] = useState(false);
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.trim());
        setSearchData(e.target.value.trim());
    };
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                if (myRef.current) {
                    myRef.current.focus();
                }else{
                    console.log(13)
                }
            }
        };
        useEffect(()=>{
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSearch(searchTerm);
    };
    const handleClick = (e) =>{
        setCLick(!ClickBean)
        const newTheme = ClickBean?'dark':'light';
        ClickBean?document.documentElement.style.setProperty('--card-back-color', '#2b2b2b'):document.documentElement.style.setProperty('--card-back-color', '#fff');

        document.body.setAttribute('data-theme', newTheme);
    }
    const handleBtn = ()=>{
        setBean(!viBean)
        if(viBean){
            setOptionData(viBean)
        }else {
            setOptionData(viBean)
        }
    }

    return (
        <div style={{maxWidth:'1100px' ,margin:'0 auto'}}  className="flex py-12  px-6 max-md:flex-wrap  max-md:flex-col-reverse max-md:items-start">
        <form  className={styles.searchBox} onSubmit={handleSubmit}>
            <input
                ref={myRef}
               style={ClickBean ? { background: '#fff',overflow:'hidden' } : { background: '#2b2b2b',overflow:'hidden' }}
                type="text"
                placeholder="输入搜索关键字中文"
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.searchBox_input}
            />
            <kbd className={styles.kad_css}>Ctrl K</kbd>
        </form>
             <div className={styles.buttonContainer}>
                 <button onClick={handleClick} style={{margin:'0px'}} className={styles.buttons}>
                     {ClickBean?<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z" fill="#333" stroke="#333" strokeWidth="4" strokeLinejoin="miter"/><path d="M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z" fill="#333"/><path d="M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z" fill="#333"/><path d="M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z" fill="#333"/><path d="M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z" fill="#333"/><path d="M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z" fill="#333"/><path d="M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z" fill="#333"/><path d="M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z" fill="#333"/><path d="M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z" fill="#333"/></svg>:
                         <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"   fill="#fff" stroke="#fff" strokeWidth="4" strokeLinejoin="round"/></svg>
                     }
                 </button>
                 <button className={styles.buttons} onClick={handleBtn}>
                     {!viBean?<svg width="24" height="24" viewBox="0 0 48 48"  stroke="#4CAF50" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="38" height="38" rx="2" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 18H43" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/><path d="M5 30H43" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/><path d="M17 5V43"  strokeWidth="4" stroke="#4CAF50" strokeLinecap="round"/><path d="M30 5V43" stroke="#4CAF50"  strokeWidth="4" strokeLinecap="round"/></svg>:
                         <svg width="24" height="24" viewBox="0 0 48 48"   stroke="#333" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="38" height="38" rx="2"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 18H43" stroke="#333" strokeWidth="4" strokeLinecap="round"/><path d="M5 30H43"  strokeWidth="4" strokeLinecap="round"/><path d="M17 5V43"  strokeWidth="4" strokeLinecap="round"/><path d="M30 5V43"  strokeWidth="4" strokeLinecap="round"/></svg>}
                 </button>
                 <button className={styles.buttons} disabled="" onClick={handleBtn}>
                     {viBean?<svg width="24" height="24" viewBox="0 0 48 48" fill="#4CAF50" stroke="#4CAF50" xmlns="http://www.w3.org/2000/svg"><path d="M8 42C10.2091 42 12 40.2091 12 38C12 35.7909 10.2091 34 8 34C5.79086 34 4 35.7909 4 38C4 40.2091 5.79086 42 8 42Z"  strokeWidth="4" strokeLinejoin="miter"/><path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"  strokeWidth="4" strokeLinejoin="miter"/><path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"  strokeWidth="4" strokeLinejoin="miter"/><path d="M20 24H44"  strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/><path d="M20 38H44"  strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/><path d="M20 10H44"  strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/></svg>:
                         <svg width="24" height="24" viewBox="0 0 48 48"   stroke="#333" xmlns="http://www.w3.org/2000/svg"><path d="M8 42C10.2091 42 12 40.2091 12 38C12 35.7909 10.2091 34 8 34C5.79086 34 4 35.7909 4 38C4 40.2091 5.79086 42 8 42Z"  strokeWidth="4" stroke="#333" strokeLinejoin="miter"/><path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" strokeWidth="4" stroke="#333" strokeLinejoin="miter"/><path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"  strokeWidth="4" strokeLinejoin="miter"/><path d="M20 24H44" stroke="#333"  strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/><path d="M20 38H44"  stroke="#333" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/><path d="M20 10H44"  strokeWidth="4" strokeLinecap="square" stroke="#333" strokeLinejoin="miter"/></svg>
                     }
                 </button>
             </div>
        </div>
    );
};

export default SearchBox;
