import { auth } from '../js/firebase';
import { useNavigate } from 'react-router-dom';
import Book from "./admin/Book";
const Admin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };
  return (
    <div>
      <h1>管理画面</h1>
      <Book/>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Admin;