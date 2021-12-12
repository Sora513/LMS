import HeaderLogin from "./HeaderLogin";
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <nav>
            <h2>
                <Link to="/">
                </Link>
            </h2>
            <ul>

                <li>
                    <Link to="/" className="active">
                        ポートフォリオ
                    </Link>
                </li>

                <li>
                    <a href="https://mochikusa.com">よもぎ誌</a>
                </li>

                <li>
                    <HeaderLogin />
                </li>

            </ul>
        </nav>
    )
}

export default Header