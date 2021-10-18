import './App.css';
// import Component from "./componets/index"
import Profile from "./componets/profile/Profile"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Bio from './componets/profile/Bio'
import Skill from './componets/profile/Skill'
import SocialLinks from './componets/profile/SocialLinks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Component/> */}
        <Profile/>
        <div class="card" style={{width: "600px",marginTop:"20px"}}>
          <div class="card-body">
              <Bio name='Muhammad Sojib' title="Graphic Designer"/>
              <Skill skillA="Adobe" skillB="Language"/>
              <SocialLinks/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
