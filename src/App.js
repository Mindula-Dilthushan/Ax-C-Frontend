//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import JoinClient from './components/JoinClient/JoinClient';

const App = () => {
  return(
      <Router>
        <Route path="/" exact component={JoinClient} />
      </Router>
  )
}

export default App;