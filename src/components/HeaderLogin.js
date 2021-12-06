import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const HeaderLogin = ()=>{
    const {user} = useAuthContext();
    return user ? <Link to ="/admin">管理</Link> : <Link to ="/login">ログイン</Link> ;
}

export default HeaderLogin