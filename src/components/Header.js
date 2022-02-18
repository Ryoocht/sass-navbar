import React, { useEffect, useState } from 'react'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useHistory } from "react-router-dom"

const Header = () => {
    const history = useHistory()
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ size, setSize ] = useState({})

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
    },[])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    },[size.width, menuOpen])

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    const ctaClickHandler = () => {
        history.push('/page-cta')
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link className={classes.header__content__logo}>
                    navbar
                </Link>

                <nav
                    className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}
                >
                    <ul>
                        <li>
                            <Link to='/page-one' onClick={menuToggle}>PageOne</Link>
                        </li>
                        <li>
                            <Link to='/page-two' onClick={menuToggle}>PageTwo</Link>
                        </li>
                        <li>
                            <Link to='/page-three' onClick={menuToggle}>PageThree</Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>CTA Page</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {menuOpen 
                        ?   <AiOutlineClose onClick={menuToggle}/>
                        :   <BiMenuAltRight onClick={menuToggle}/> 
                    }
                </div>
            </div>
        </header>
    )
}

export default Header