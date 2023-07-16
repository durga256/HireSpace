import {useState} from 'react';
import Candidate from './components/candidate-dashboard';
import Recruiter from './components/recruiter-dashboard';
import Homepage from './components/UI/homepage';
import AccountType from './components/UI/account-type';
import InputForm from './components/UI/input-form';
import JobApply from './components/Candidate/job-apply';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [nameEntered, setNameEntered] = useState('');
  const [pageType, setPageType] = useState('');
  if (isLoggedIn) {
    if (pageType === 'apply') {
      return <JobApply />
    }
    if (accountType === ''){
      return <AccountType setAccountType={setAccountType}/>
    }
    else if(nameEntered === ''){
      return <InputForm setNameEntered={setNameEntered}/>
    }
    else if(nameEntered !== '' && accountType === 'recruiter'){
      return <Recruiter setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType} accountType={accountType}/>
    }
    else if(nameEntered !== '' && accountType === 'candidate'){
      return <Candidate setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType} accountType={accountType} setPageType={setPageType}/>
    }
  }
  else{
    return <Homepage setIsLoggedIn={setIsLoggedIn} setAccountType={setAccountType}/>
  }
}

export default App;
