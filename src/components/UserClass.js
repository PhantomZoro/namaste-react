import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        //Declaring a state variable inside the state object containing variables as key values pairs 
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
            }
        }
    }

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/PhantomZoro");

         const json = await data.json();

         console.log(json);

         this.setState({
            userInfo: json
         })
    }

    render(){

        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: phaneendrab.iitm@outlook.com</h4>
            </div>
        )
    }
};

export default UserClass;