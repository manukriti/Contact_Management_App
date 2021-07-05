import React, { useRef } from "react"
import { Link } from "react-router-dom"
import ContactCard from "./ContactCard"

const ContactList = (props) => {
    const inputEl = useRef("")
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        )
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }

    return (

        <div style={{ marginTop: "5%" }}>
            <h2>Contact List
            <Link to="/add">
                    <button className="ui button blue right" style={{ marginLeft: "75%" }}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search" style={{ marginLeft: "80%" }}>
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="search contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
        </div>


    )
}
export default ContactList