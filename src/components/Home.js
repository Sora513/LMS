import StatusGraph from './StatusGraph';
import MyStatus from './MyStatus';
import Comment from './Comment';
const Home = () => {

  return (
    <div className='top-container'>
      <div className="top-flex-container">
        <MyStatus />
      </div>
      <div className="top-flex-container">
        
      <h2>Skills</h2>
      <StatusGraph />
      </div>
      <div className="top-flex-container">
      <Comment />
      </div>
     </div>
  );
};

export default Home;