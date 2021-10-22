import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Component from "./componets/index"
// import Profile from "./componets/profile/Profile"
// import PropsProfile from "./Props/props"
// import Bio from './componets/profile/Bio'
// import Skill from './componets/profile/Skill'
// import SocialLinks from './componets/profile/SocialLinks';
// import PassFunction from './Props/passFunction'
// import RenderChildProps from './Props/renderChildProps';
// import BioFunction from './Props/bioFunction';
// import StateComponent from './state/stateComponent';
// import TimerComponent from './state/timer';
// import StyleComponent from './styleComponent/StyleComponent';
// import EventComponent from './eventComponent/eventComponent';
// import FormComponent from './formComponent/formComponent';
// import UncontrolForm from './formComponent/uncontrolForm/uncontrolFrom';
import Form from './formComponent/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Component/> */}
        {/* <Profile/> */}
        {/* <PropsProfile/>
        <PassFunction/>
        <RenderChildProps/> */}
        <div className="card" style={{width: "600px",marginTop:"20px"}}>
          <div className="card-body">
              {/* <Bio name='Muhammad Sojib' title="Graphic Designer"/> */}
              {/* <BioFunction name='Muhammad Sojib' title="Graphic Designer"/>
              <Skill skillA="Adobe" skillB="Language"/>
              <SocialLinks/> */}
              {/* <StateComponent/> */}
              {/* <TimerComponent/> */}
              {/* <StyleComponent/> */}
              {/* <EventComponent/> */}
              {/* <FormComponent/> */}
              {/* <UncontrolForm/> */}
              <Form/>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
