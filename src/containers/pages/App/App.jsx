import React from 'react';
import '../../../assets/scss/App.scss';
import fb from '../../../assets/img/icon/icon_fb.svg';
import tw from '../../../assets/img/icon/icon_tw.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Landing from '../Landing';
import Profile from '../Profile';

function App() {
  return (
    <Router>
    <div className="container">
      <nav>
        <div className="nav-header">
            <h2>Save Indonesia</h2>
        </div>
        <ul>
          <li><Link to="/"><span className="home">Home</span></Link></li>
          <li><Link to='/profile'><span>Profile</span></Link></li>
        </ul>
      </nav>


      <Route path="/" exact component={Landing}/>
      <Route path="/profile" component={Profile}/>
      <footer>
      	<div className="wrapper">
	      	<div className="copyright">
    				<p className="creator">Restu Kersana</p>
    				<p className="school">SMKN 1 Kawali</p>
            <p className="api"><a href="https://kawalcorona.com/api/">API dari kawalcorona.com</a></p>
	      	</div>
	      	<div className="social-media">
				<a href="www.facebook.com" className="social"><img src={fb} alt="fb"/></a>
				<a href="www.twitter.com" className="social"><img src={tw} alt="tw"/></a>
	      	</div>
	      </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
