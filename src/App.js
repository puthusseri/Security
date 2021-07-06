
import './App.css';
import axios from 'axios';
function login(){
  
  let clientID = '1000.C8VR4MF2K7S7CXJFZD6FQW6HYY1X4U';
  let redirect_url = 'https://puthusseri.github.io/security/';
  let scope = 'ZohoMail.accounts.READ'
  let url = "https://accounts.zoho.com/oauth/v2/auth?response_type=token&client_id="+clientID+"&scope="+scope+"&redirect_uri="+redirect_url;
  axios.get(url).then((response) => {
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  });



}
function App() {
  return (
    <div className="App">
      <div className="NavBar">

      <h1 className="Heading">Security Training</h1>
      <input type="button"className = "loginButton" value="Login" onClick={login}/>
      </div>
      <hr />
      <h3 style={{marginTop:"400px"}}>
        This is a part of Desk Security Training
      </h3>
    </div>
  );
}

export default App;
