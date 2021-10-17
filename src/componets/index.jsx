import react from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import JSXInformation from "./JSXInformation";

class Index extends react.Component{
    render(){
        return(
            <>
                <ClassComponent/>
                <FunctionComponent/>
                <JSXInformation/>
            </>
        )
    }
}
export default Index;