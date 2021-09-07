import React from "react";
import "../App.css";
import axios from 'axios';


/*const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];*/
//Github users : gaearon, sophiebits, sebmarkbage, bvaughn
//CardList

// ToDo : error handling: wrong user input, bad network response

// convert an array of records into an array of card components
const CardList = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key ={profile.id}  {...profile}/>)}
        </div>
    );
}
//render info about a github profile
class Card extends React.Component{
    render (){
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="placeholder image"/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

//read input from the user
class Form extends React.Component {
    state = {userName: ''}
    handleSubmit = async (event) => {
        event.preventDefault(); //preventing the page to refresh on submitting
        const resp = await
        axios.get(`https://api.github.com/users/${this.state.userName}`); //getting the api
        this.props.onSubmit(resp.data);
        this.setState({userName: ''}); // reset the username that remains in the input box

    };
    render (){
        return (
            <form onSubmit={this.handleSubmit}><input
                type="text"
                value={this.state.userName} // read the input directly via React with the helop of onChange event
                onChange={event => this.setState({userName: event.target.value})} // changes the UI based on the state
                placeholder="GitHub username"
                required
            />
            <button>Add card</button>
            </form>
        )
    }
}

// manage the relation between all the other components
class GitHubCards extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
    // }

    state = {
        profiles: [],
    };

    addNewProfile = (profileData) =>{
    this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData],
    }));
 };
render() {
    return <div>
    <div className={"header"}>
    <p>{this.props.title}</p>
    </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
    </div>
}
}
// const GitHubCards = ({title}) => (
//   <div className={"header"}> {title}</div>
// );


export default GitHubCards;