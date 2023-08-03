import React, { useContext } from 'react'
import Sun from '../../images/sun.png'
import Moon from '../../images/moon.jfif'
import './toggle.css'
import { ThemeContext } from '../../Context'

const Toggle = () => {
    const theme=useContext(ThemeContext)
const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"})
}

    return (
        <div className='t'>
            <img src={Sun} className='t-icon'/>
            <img src={Moon} className='t-icon'/>
            <button className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ?0 : 25}}></button>

        </div>
    )
}

export default Toggle