//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components
// import SignIn from './components/SignIn/SignIn';
import Chat from './components/Chat/Chat';

const App = () => {
  return(
      <Router>
        <Route path="/axc" exact component={Chat} />
      </Router>
  )
}

export default App;