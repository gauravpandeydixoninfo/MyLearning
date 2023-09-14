import React from "react";
import ContactCard from "./ContactCard";
const ContactList= (props) => {
        // console.log(props.mycontacts[0].email);
        const deleteContactHandler = (id) => {
            props.getContactId(id);

        }
        const renderContactList= props.mycontacts.map((contact) =>
        {
            return(
                <ContactCard 
                    mycontact={contact}
                    clickHandler={deleteContactHandler}
                    key={contact.id}/>
                // <div className="iteam">
                //     <div className="content">
                //         <div className="header">{mycontact.name}</div>
                //         <div>{mycontact.email}</div>
                //     </div>
                //     <i
                //     className="trash alternate outline icon"
                //     style={
                //         {
                //             color: "green",
                //             marginTop: "7px",
                //             float: "right",
                //             padding: "0px 100px"
                //         }
                //     }
                //     ></i>
                // </div>
            );
        });
        return <div className="ui celled list">{renderContactList}</div>
    }
 

// const ContactList = (props) => {
//     console.log("props = >", props);

//     const deleteContactHandler = (id) => {
//         props.getContactId(id);
//     }

//     const renderContactList = props.myContacts.map((contact) => {
//         return (
//             <ContactCard 
//                 myContact={contact}
//                 clickHandler={deleteContactHandler}
//                 key={contact.id}
//             />
//         );
//     })
//     return <div className="ui celled list">{renderContactList}</div>
// }

export default ContactList;