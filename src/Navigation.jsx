import React from 'react'

const Navigation = () => {
    let loginActions = (
        <>
            <li className='signup'>
                <a href="#">
                    SIGN UP
                </a>
            </li>
            <li className='signup'>
                <a href="#" >
                    LOGIN
                </a>
            </li>
        </>
    )
  return (
    <nav>
    <ul  className='click'>
        <li>
            <a href="#" >
                Home
            </a>
        </li>
        <li>
            <a href="#">
                Articles
            </a>
        </li>
       
        {loginActions}
    </ul>
</nav>
  )
}

export default Navigation
