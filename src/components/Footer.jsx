import React from 'react'

function Footer() {
    const getThisDate = new Date().getFullYear();
  return (
    <footer>
        <p className="text-center">Copyright &copy; NextDecadeSys. 2009 - {getThisDate} </p>
    </footer>
  )
}

export default Footer