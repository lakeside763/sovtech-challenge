import { Outlet } from 'react-router-dom';
import './home.style.scss';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className='container'>
        <h1 className='heading'>Stars War</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;