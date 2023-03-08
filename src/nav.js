const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The World News</h1>
            <div className="links">
            <a href="/home">Home</a>
            <a href="/table1" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
            }}>Table 1</a>
            <a href="/table2" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
            }}>Table 2</a>
            </div>
        </nav>
    );
}
   
export default Navbar;