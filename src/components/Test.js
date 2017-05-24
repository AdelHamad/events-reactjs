import React from "react"
import axios from "axios"
export default class Test extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            stars : 2
        }
    }

    componentDidMount(){
        axios.post("http://localhost/test/cookies/test.php", {test:1})
        axios.post("http://localhost/test/cookies/set.php", {test:1})
    }

     render() {
         return (
             <div>

             </div>
         );
     }


}