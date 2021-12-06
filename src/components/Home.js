import { auth } from '../js/firebase';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;