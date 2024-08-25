import './navbar.css'
export default function Navbar(){



     return (
        <>
        
          <div className="nav">
            <div className="heading">
                <h1>BookAFeast</h1>
            </div>
            <div className="search">
               <div className="searchbox mr-5 rounded-2xl">
                <input type="text"  placeholder='Search here' />
                <div className='search-button rounded-r-xl'>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                </div>
                <div className='button'>
                  
                <button className='seach-but'>Search</button>
                
                
               </div>

            </div>
            <div className="user">
                <button className='btn' >Sign in</button>
                <button className='btn'>Log in</button>
            </div>
          </div>
        </>
     )
}