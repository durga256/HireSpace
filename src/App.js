import {useState} from 'react';
import Candidate from './components/candidate-dashboard';
import Recruiter from './components/recruiter-dashboard';
import Homepage from './components/UI/homepage';
import AccountType from './components/UI/account-type';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState('');
  if (isLoggedIn) {
    if (accountType === ''){
      return <AccountType setAccountType={setAccountType}/>
    }
    else if(accountType === 'recruiter'){
      return <Recruiter setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType} accountType={accountType}/>
    }
    else{
      return <Candidate setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType} accountType={accountType}/>
    }
  }
  else{
    return <Homepage setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType}/>
  }
}

export default App;
