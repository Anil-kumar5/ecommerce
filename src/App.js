import './App.css';
import Homepage from './components/Homepage';
import Practice, { Filt, Filtering } from './components/Practice';
import { Redirect, Route } from 'react-router-dom';
import Collections from './collections/Collections';
import SignInSignUp from './signin/SignInSignUp';
import Chechout from './cart/Chechout';
import TryOne from './try/TryOne';
import TryTwo from './try/TryTwo';
import DirectoryTrial from './components/DirectoryTrial';
import CollectionTrial from './collections/CollectionTrial';
import RoutingPract from './collections/RoutingPract';
import CollectionCategory from './collections/CollectionCategory';
import { BrowserRouter } from 'react-router-dom';
const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App(props) {
  //if we add extra component then it displays last one}
  return (
    <div>

       <BrowserRouter>
      <Route exact path="/practice" component={Practice, Filt, Filtering} />
      <Route exact path='/collections' component={Collections} />
      <Route exact path="/signin" component={SignInSignUp} />
      <Route exact path='/checkout' component={Chechout} />
      <Route exact path='/firstone' component={TryOne} />
      <Route exact path='/second' component={TryTwo} />
      <Route exact path='/directory' component={DirectoryTrial} />
      <Route exact path='/collect' render={() => false ? <Redirect to='/' /> : <CollectionTrial />} />
      {/* <Route exact path = {`/collections/:id`} component={RoutingPract}/> */}
      <Route eaxct path={`/collections/:cId`} component={CollectionCategory} />
      <Route exact path="/collections/hats" component={HatsPage} />
      <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
