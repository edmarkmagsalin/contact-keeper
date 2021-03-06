import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {

    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { isAuthenticated, logout, user } = authContext
    const { clearContacts } = contactContext

    const onLogout = () => {
        logout()
        clearContacts()
    }

    const authLinks = (
        <Fragment>
            <li><Link to='/'>Contacts</Link></li>
            <li>Hello <strong>{user && user.name + '!'}</strong></li>
            <li><a onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span></a></li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </Fragment>
    )

    return (
        <nav className="navbar bg-primary">
            <div>
                <h1>
                    <Link to='/'>
                        <i className={icon}></i> {title}
                    </Link>
                </h1>
            </div>
                <ul>
                    {isAuthenticated ? authLinks : guestLinks}
                    <li>
                        <Link to='/about'><i className="far fa-question-circle"></i> About</Link>
                    </li>
                </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
