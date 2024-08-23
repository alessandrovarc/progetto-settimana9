
import './App.css';
import NetflixFooter from './component/NetflixFooter';
import NetflixHome from './component/NetflixHome';
import NetflixNav from './component/NetflixNav';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      <NetflixNav/>
      <main>
      <NetflixHome/>
      <NetflixFooter/>
      </main>
    </div>
  );
}

export default App;
