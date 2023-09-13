import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };

    add = (e) => {
        e.preventDefault(); //prevent to refresh page
        console.log("e ==>", e);
        console.log("state ==>", this.state);
        if (this.state.name === "" || this.state.email === "") {
            alert("Enter all field");
        }
        this.props.myAddContactHandler(this.state);
    }
    
    render() {
        return (
            <div className="ui main" >
                {/* <h2>Add Contact</h2> */}
                <form className="ui form" onSubmit={this.add} >
                    <hr></hr>
                    <h2>Add Contact</h2>
                    <div className="field" >
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Write Your Full Name"
                            // onchange={(e) => { this.setState({ name: e.target.value }) }}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            value={this.state.name}


                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Write your email"
                            // onchange={(e) => { this.setState({ email: e.target.value }) }}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email}

                        />
                    </div>
                    <button className="ui button primary">Add</button>
                </form>
            </div>


        );

    }
}
// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: ""
//     }

//     add = (e) => {
//         e.preventDefault(); 
//         if(this.state.name === "" || this.state.email === "") {
//             alert("All the fields are mandatory!");
//             return;localStorage
//         }
//         this.props.myAddContactHandler(this.state);
//         console.log("state => ", this.state);
//         this.setState({name: "", email: ""});
//     }

//     render() {
//         return (
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Write Your Full Name"
//                             onChange={(e) => this.setState({name: e.target.value})}
//                             value={this.state.name}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input 
//                             type="text"
//                             name="email"
//                             placeholder="Write your email"
//                             onChange={(e) => this.setState({email: e.target.value})}
//                             value={this.state.email}
//                         />
//                     </div>
//                     <button className="ui button primary">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

export default AddContact;