import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import './styles.css';



function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/ThiagoDA13" target="__blank">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/ThiagoDA13</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;