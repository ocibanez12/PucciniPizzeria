
const Navbar = () => {
    const total = 25000;
    const token = true;
    const totalcant = (monto) => {
        return  monto.toLocaleString()
    }

  return (
    <div className="navbar">
        <h4>Puccini Pizzeria</h4>
        <button type="button" className="btn btn-outline-light">🏡 Home</button>
        {token ? (
        <>
          <button type="button" className="btn btn-outline-light">🔓 Profile</button>
          <button type="button" className="btn btn-outline-light">🔓 Logout</button>
        </>
        ) : (
        <>
          <button type="button" className="btn btn-outline-light">🔐 Login</button>
          <button type="button" className="btn btn-outline-light">🔐 Register</button>
        </>
      )}
      <button type="button" className="btn btn-outline-light">Total: ${totalcant(total)}</button>
    </div>
  )
}

export default Navbar
