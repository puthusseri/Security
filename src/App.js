
import './App.css';
import axios from 'axios';
function login(){
  
  let clientID = '1000.C8VR4MF2K7S7CXJFZD6FQW6HYY1X4U';
  let redirect_url = 'https://puthusseri.github.io/security/';
  let scope = 'ZohoMail.accounts.READ'
  let url = "https://accounts.zoho.com/oauth/v2/auth?response_type=token&client_id="+clientID+"&scope="+scope+"&redirect_uri="+redirect_url;
  // axios.get(url).then((response) => {
  //   console.log(response)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // });
  let myPromis = new Promise((resolve, reject) => {

    let authorizationWindow = window.open(url, '_blank');
    // console.log(authorizationWindow);
       const c1 = setInterval(() => {
            try{
                let hash_data = authorizationWindow.location.hash;
                if(hash_data){
                    
                    console.log("hash data = "+hash_data);
                    authorizationWindow.close();        // close that window
                    resolve(hash_data);                 // call the success function
                }
            }
            catch (e) {
                console.log(e);
            }
        },1000);
        const ct = setTimeout(() => {
            reject("failed");
            authorizationWindow.close();
        }, 50000);
        
})

myPromis.then((hash_data) => {
console.log("Inside the success function, hash data : "+hash_data);
var access_code = hash_data.match('[#&]access_token=*[^&]*')[0].split("=")[1]; 
console.log("Access code = "+access_code);      
// localStorage.access_code = access_code;
// console.log(access_code);

// copyContent();
// 

}).catch((messge) => {
console.log("Inside the failed function"+messge);
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
