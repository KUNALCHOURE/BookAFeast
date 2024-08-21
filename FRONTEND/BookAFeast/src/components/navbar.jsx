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
                </div>
                <div className='button rounded-3xl p-0.5'>
                  <span className='mr-2'>
                <button>Search</button>
                </span>
                <span>
                <i class="fa-solid fa-magnifying-glass"></i>
                </span>
               </div>

            </div>
            <div className="user">
                <button className='btn'>Sign in</button>
                <button className='btn'>Log in</button>
            </div>
          </div>
        </>
     )
}