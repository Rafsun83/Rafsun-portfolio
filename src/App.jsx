
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './component/Footer/Footer';
import Profile from './component/Profile/Profile';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';

import Header from './component/Header/Header';
import Profilemobile from './component/Profile/profilemobile';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4" style={{ background: "rgba(29, 30, 36)" }} >

          <Profile />

        </div>
        <div className="col-lg-8 col-md-12" style={{ background: "rgba(29, 30, 36)" }}>

          <Router>


            <Header />
            <Profilemobile />


            <Switch>



              <Route exact path="/" component={Resume} />
              <Route path="/portfolio" component={Portfolio} />

              <Route path="/blog" component={Blog} />

              <Route path="/contact" component={Contact} />


            </Switch>
          </Router>





          <Footer />

        </div>
      </div>

    </div>
  );
}

export default App;
