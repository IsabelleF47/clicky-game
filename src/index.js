import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
class Search extends Component {
    state = {
        searchBreed:"",
 };



    render(){
        return (
            <div className= "display-search">
            <h2>
                ("You have searched"+ "searchBreed")
            </h2>
            </div>

        );
    }

}
