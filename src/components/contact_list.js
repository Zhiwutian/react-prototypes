import React, {Component} from "react";
import ContactCard from "./contact_card";
import ContactData from "../data/contacts";

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: ContactData
        }

    }

    render(){
        return <h1>Contact List Test</h1>
    }
}

export default ContactList;