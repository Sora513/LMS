import HeaderLogin from "./HeaderLogin";
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <nav>
            <h2>
                <Link to="/">
                    そらの自習室
                </Link>
            </h2>
            <ul>

                <li>
                    <Link to="/">
                        トップページ
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        更新履歴
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        これは何
                    </Link>
                </li>

                <li>
                    <Link to="/">
                       作った/書いた/思った
                    </Link>
                </li>

                <li>
                    <HeaderLogin />
                </li>

            </ul>
        </nav>
    )
}

export default Header