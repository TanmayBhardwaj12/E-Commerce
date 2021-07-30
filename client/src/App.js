import { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import store from './store';
import {loadUser} from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return ( 
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={{ 
      backgroundImage: `url("https://www.lethal.com.au/wp-content/uploads/2019/01/lethal-web-design-perth-background-1.jpg")` 
    }}>
            <Main/>
          </div> 
        </BrowserRouter>
        </Provider> 
    );
  }
}

export default App;