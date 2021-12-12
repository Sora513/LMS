import StatusGraph from './StatusGraph';
import MyStatus from './MyStatus';
const Home = () => {

  return (
    <div>
      <div className="top-flex-container">
        <MyStatus />
      </div>
      <div className="top-flex-container">
        
      <h2>Skills</h2>
      <StatusGraph />
      </div>
     </div>
  );
};

export default Home;