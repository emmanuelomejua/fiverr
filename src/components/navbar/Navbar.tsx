import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';
import SERVER from '../../utils/server';


const menuLinks =  [
    {
        name: 'Graphice and Design'
    },
    {
        name: 'Video and Animation'
    },
    {
        name: 'Writing and Transition'
    },
    {
        name: 'AI Services'
    },
    {
        name: 'Digital Marketing'
    },
    {
        name: 'Music and Audio'
    },
    {
        name: 'Programming and Tech'
    },
    {
        name: 'Business'
    },
    {
        name: 'Lifestyle'
    },
]


const Navbar = () => {

    const currentUser = localStorage.getItem('currentUser')

    const user = currentUser ?  JSON.parse(currentUser) : null;


    const links = [
        {    
            id: 0,
            name: 'Fiver Business',
            url: '#'
        },
        {    
            id: 1,
            name: 'Explore',
            url: '#'
        },
        {    
            id: 2,
            name: 'English',
            url: '#'
        },
        {    
            id: 3,
            name: `${!user ? 'Sign In': ''}`,
            url: '/login'
        },
        {    
            id: 4,
            name: !user?.isSeller && 'Become a seller',
            url: '#'
        },
    ];

    const navigate = useNavigate()

    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])


    const handleLogout = async () => {
        try {
            await SERVER.post('auth/logout');
            localStorage.setItem('currentUser', '')
        } catch (error) {
            console.error(error)
        }
    }


  return (
    <div className={active || pathname !== '/' ? 'navbar active': 'navbar'}>
       <div className="cont">
       <div className="logo">
        <Link to='/' className='link'>
            <span className='text'>fiver</span>
        </Link>
        <span className='dot'>.</span>
       </div>

       <div className="links">
        {
            links.map((l) => (
                <Link to={l.url} className='link' key={l.id}>{l.name}</Link>
            ))
        }
       {!user && <button onClick={() => navigate('/register')}>Join</button>}

       {user && (
        <div className="user">
            <img src={user?.img ? user?.img : '/img//noavatar.jpg'} alt="" className="" />
            <span onClick={() => setMenuOpen(!menuOpen)}>{user.username}</span>


            { menuOpen && 

            <div className="options">
                {user.isSeller && (
                    <>
                        <Link to='/gigs' className='link' onClick={() => setMenuOpen(false)}>Gigs</Link>
                        <Link to='/addgig' className='link' onClick={() => setMenuOpen(false)}>Add New Gig</Link>
                    </>
                )}
                <Link to='/orders' className='link' onClick={() => setMenuOpen(false)}>Orders</Link>
                <Link to='/messages' className='link' onClick={() => setMenuOpen(false)}>Messages</Link>
                <span onClick={handleLogout}>Logout</span>
            </div>
            }

        </div>
       )}
       </div>
       </div>

       {(active || pathname !== '/') && 
        <>
        <hr />

        <section className="menu">
            {menuLinks.map((l) => (
                <span className='link' key={l.name}>{l.name}</span>
            ))}
       </section>
        </>
       }
    </div>
  )
}

export default Navbar
