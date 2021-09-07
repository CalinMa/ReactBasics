import React from "react";



class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDetails: false,
        changeCheckbox : false
        };

    }
    showButton(value){
        this.setState({showDetails: value})
    }
    changeCheckBox(event){

        const checkbox = event.target.checked;
        this.setState({changeCheckbox: checkbox})

    }

    render() {
        const{data} = this.props;
        return (


                <div className="List-Item" style={this.state.changeCheckbox ? {borderColor: "#61dafb", backgroundColor: "#61dafb"} : {borderColor: "black"} }
                     id={`listBorder-${data.phone}`}>{data.firstName}{" "}{data.lastName}{" | "}{data.phone}{"  "}
                    <span className="CheckBox"><input type="checkbox" id="manager" name="manager1"
                                                      onClick={(event) => this.changeCheckBox(event)}/>

                        <label htmlFor="manager1">Make Manager</label>
                        <input type="checkbox" id="active" name="active1" value="active"/>
                        <label htmlFor="active1">Active</label></span>
                    <button className="Button">Edit</button>
                    {this.state.showDetails === true &&
                    <button className="ButtonUp" id='Up' onClick={() => this.showButton(false)}>&uarr;</button>
                    }
                    <button className="ButtonDown" id='Down' onClick={() => this.showButton(true)}>&darr;</button>

                    {this.state.showDetails === true &&
                    <div className="List-Dropdown" id='dropDownDiv'>
                        <span>First name: {data.firstName}{" "}Date of birth: {data.dateOfBirth}{" "}Email Adress: {data.email}{"  "}</span><br/>
                        <span>Last name: {data.lastName}{" "}City: {data.city}{" "}Skype: {data.skype}</span><br/>
                        <span>Phone number: {data.phone}{" "}Country: {data.city}{" "}</span>
                        {/*<Table data={persons}/>*/}
                    </div>
                    }
                </div>


        );
    }

}
export default ListItem;