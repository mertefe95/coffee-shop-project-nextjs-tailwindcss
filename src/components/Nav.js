import Link from "next/link";
import Head from 'next/head';
import Zoom from 'react-reveal/Zoom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
    <div> 
    
    <Head>
    <script src="https://kit.fontawesome.com/80bd54fff9.js" crossOrigin="anonymous"></script>
    <title>testing1-2-3</title>
    </Head>
    
    <div className="header h-40 bg-black flex justify-between align-center">
    <Zoom>
    <div className="logo">
    
    <img className="h-40 px-20" src="/real-white-logo.png"></img>
    
    </div>
    </Zoom>


    <div className="navbar flex text-sm text-white">

    <div className="links">
    <ul className="links-ul flex uppercase py-16 px-6 font-semibold">
    <li className="px-4"><a>Menu</a></li>
    <li className="px-4"><a>Order</a></li>
    <li className="px-4"><a>About</a></li>
    <li className="px-4"><a>Shop</a></li>
    </ul>
    </div>

    <div className="icons">
    <ul className="icons-ul flex py-16 pr-16 text-xl leading-3">
    <li className="px-4"><a><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
    <li className="px-4"><a><FontAwesomeIcon icon={['fab', 'yelp']}/></a></li>
    <li className="px-4"><a><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a></li>
    </ul>

    </div>

    </div>


    </div>
    
    <main>
        <div className="slider">

        </div>

        
        <div className="menu-container flex justify-center">
        <Zoom>
        <img className="menu h-screen" src="/new-menu.jpg"></img>
        </Zoom>
        </div>
        

        <div className="order-ahead-container flex w-screen text-white justify-start items-center pl-64">
        <div className="order-ahead-content">
        <ul className="order-ahead-content-ul">
            <li className="uppercase pb-6 text-5xl tracking-widest font-semibold">ORDER AHEAD</li>
            <li><button className="px-6 py-3 border-2">Now Available</button></li>
        </ul>
        </div>
        </div>

        <div className="three-images-container h-64 flex justify-between">
        
        <div className="first-image">
        <img src="/coffee1.png"></img>
        </div>

        <div className="second-image">
        <img src="/coffee2.png"></img>
        </div>

        <div className="third-image">
        <img src="/coffee3.png"></img>
        </div>

        <div className="three-images-content">
        <p>Follow us on social</p>
        <button className="insta-button px-4 py-4 border-2">Instagram</button>
        </div>
        </div>
    

        <div className="story-container flex justify-center items-center">
            <p className="text-white">HUG A MUG's story starts in the late 90s when boba was first introduced to the TR.</p>
            <button className="border-2 px-2 py-4 h-64 w-full bg-black">Our Story</button>
        </div>


        <div className="tiger-image-container h-screen">
        
        </div>

        
    </main>
    
    <footer className="footer-container">
    
        <div className="footer-logo">
        <img src="/real-white-logo.png" alt="footer-bear-logo"></img>
        </div>

        <div className="first-footer">
        <ul className="first-footer-ul">
        <li>HUG A MUG COFFEE SHOP</li>
        <li>DUATEPE, SAVAS STREET. NO: 2</li>
        <li>34000 SISLI/ISTANBUL/TURKEY</li>
        <li>&copy; 2020 HUG A MUG COFFEE SHOP.</li>
        <li>Artwork by Unknown</li>
        </ul>
        </div>

        <div className="second-footer">
        <ul className="second-footer-ul">
        <li>Hours (updated hours due to COVID-19)</li>
        <li>Tuesday — Thursday</li>
        <li>11am — 8pm</li>
        <li>Friday — Sunday</li>
        <li>11am — 9pm</li>
        <li>Closed on Monday</li>
        </ul>
        </div>

        <div className="third-footer">
        <ul className="third-footer-ul">
        <li><a>Contact Us</a></li>
        <li><a>Careers</a></li>
        <li><a>Returns & Shipping</a></li>
        <li><a>Privacy Policy</a></li>
        </ul>
        </div>

    </footer>

    </div>

);

export default Nav;