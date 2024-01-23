import styles from './Header.module.css';
import ButtonReserva from './ButtonReserva';

const Header = () => {
    return (
        <header>
            <div className="container">
                <a href="#"><h1>P</h1></a>
                <nav>
                    <ul>
                        <li><a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <path d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M24 17.055C24.1852 18.3034 23.9719 19.5783 23.3907 20.6985C22.8094 21.8187 21.8898 22.7271 20.7625 23.2945C19.6352 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7147 23.0701 13.8223 22.1777C12.9299 21.2854 12.3416 20.1343 12.1412 18.8883C11.9407 17.6423 12.1381 16.3648 12.7055 15.2376C13.2729 14.1103 14.1813 13.1906 15.3015 12.6094C16.4217 12.0281 17.6967 11.8149 18.945 12C20.2184 12.1888 21.3973 12.7822 22.3076 13.6925C23.2179 14.6027 23.8112 15.7816 24 17.055Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M26.25 9.75H26.265" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a></li>
                        <li><ButtonReserva>Reservar</ButtonReserva></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;