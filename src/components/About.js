import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <h1>About</h1>
                <h2>This is the About page</h2>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h2>{loggedInUser}</h2>
                        )}
                    </UserContext.Consumer>
                </div>

                <UserClass name={"Phaneendra from Class"}/>
            </div>
        )
    }
}

export default About;