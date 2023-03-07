const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo News</h1>
            <div className="links">
            <a href="/home">Home</a>
            <a href="/Table" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
            }}>Table</a>
            </div>
        </nav>
    );
}
   
export default Navbar;