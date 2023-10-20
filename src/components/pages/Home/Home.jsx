import './Home.css'
import happyCake from '../../../assets/img/happyCake.png'

const Home = () => {
  return (
    <div className="container-fluid" id="home">
      <h1>
        Bienvenido a <b>Happy Cake</b>
      </h1>
      <h5>El lugar de los pasteles felices</h5>
      <img src={happyCake} height="200px" />
    </div>
  );
};

export default Home;
