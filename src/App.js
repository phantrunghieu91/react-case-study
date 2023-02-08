import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyWallet from './components/MyWallet';
import Report from './components/Report';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Transaction from './components/Transaction';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/react-case-study' element={<Home />} /> */}
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route path='/my-wallet' element={<MyWallet />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
