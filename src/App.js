import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Component from "./componets/index"
// import Profile from "./componets/profile/Profile"
import PropsProfile from "./Props/props"
import Bio from './componets/profile/Bio'
import Skill from './componets/profile/Skill'
import SocialLinks from './componets/profile/SocialLinks';
import PassFunction from './Props/passFunction'
import RenderChildProps from './Props/renderChildProps';
import BioFunction from './Props/bioFunction'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Component/> */}
        {/* <Profile/> */}
        <PropsProfile/>
        <PassFunction/>
        <RenderChildProps/>
        <div class="card" style={{width: "600px",marginTop:"20px"}}>
          <div class="card-body">
              {/* <Bio name='Muhammad Sojib' title="Graphic Designer"/> */}
              <BioFunction name='Muhammad Sojib' title="Graphic Designer"/>
              <Skill skillA="Adobe" skillB="Language"/>
              <SocialLinks/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
