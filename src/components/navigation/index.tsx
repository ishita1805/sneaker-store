import './style.css'
import logo from '../../assets/logo_black.svg'
import icons from '../../components/icon/icons.json'
import Icon from '../../components/icon'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { DBContext } from '../../context'

interface NavigationType {
  label: string;
  subNavigation?: {
    label: string;
    link: string;
  }[];
  link: string;
}

const navigationRight: NavigationType[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Shop',
    link: '/collection',
    subNavigation: [
      { label: 'Sneakers', link: '/collection?category=sneakers' },
      { label: 'Hoodies', link: '/collection?category=hoodies' },
      { label: 'Denims', link: '/collection?category=denims' },
    ],
  },
  {
    label: 'Design Your Own',
    link: '/design-your-own',
  },
];
const navigationLeft = (loggedIn: boolean): NavigationType[] => { return [
  {
    label: 'Wishlist',
    link: '/wishlist',
  },
  {
    label: 'Cart',
    link: '/cart',
  },
  {
    label: loggedIn ? 'Logout' : 'Login',
    link: '/login',
  },
]};

const NavigationElement = (el: NavigationType) => {
  const navigate = useNavigate();
  const { signOut } = useContext(DBContext)
  return (
    <div className='navigation-element'>
      <div className='navigation-el-label' onClick={() => {
        if (el.label === 'Logout') signOut();
        else navigate(el.link);
      }}>{el.label}</div>
      {el.subNavigation && <div className="navigation-sub">
        {el.subNavigation?.map((e) => (
          <div onClick={() => navigate(e.link)}>{e.label}</div>
        ))} 
      </div>}
    </div>
  )
}

const Index = () => {
  const navigate = useNavigate();
  const { session } = useContext(DBContext)
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className='z-[9999] fixed top-0 w-full shadow-sm cursor-pointer'>
      <div className='navigation-container'>
        <Icon onClick={() => setExpanded((e) => !e)} icon={expanded ? icons.close : icons.hamburger} className='navigation-menu' />
        
        <div className={expanded ? 'navigation-section': 'navigation-section hide-navigation-section'}>
          {navigationRight.map((el, i) => (
              <NavigationElement key={i} {...el} />
          ))}
        </div>
        <div className={expanded ? 'navigation-section': 'navigation-section hide-navigation-section'}>
          {navigationLeft(!!session).map((el, i) => (
              <NavigationElement key={i} {...el} />
          ))}
        </div>
        <img src={logo} className='navigation-logo' onClick={() => navigate('/')}/>
      </div>
    </div>
  )
}

export default Index;
