import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import queryString from "query-string";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      contacts: [
        { path: "/contact/1", value: "Contact 1" },
        { path: "/contact/2", value: "Contact 2" },
        { path: "/contact/3", value: "Contact 3" },
        { path: "/contact/4", value: "Contact 4" },
      ],
      filtredArr: []
    };
  }
  
  componentDidMount() {
    this.searchContact();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.searchContact(nextProps)
    }

  }


  componentWillUnmount(){
    console.log("Contact page is unmounted")
  }

  parseUrl(props = ''){
    const search = props ? props.location.search : this.props.location.search
    if (search) {
      let url = search;
      let parsed = queryString.parse(url);
      let q = parsed.q;
      return q
    }
    return this.state.q
  }

  searchContact(nextProps) {
      let pasredQ = this.parseUrl(nextProps)

      this.filterContacts(pasredQ);

      this.setState({ q: pasredQ });
    
  }

  filterContacts(q) {
    const contacts = [...this.state.contacts];

    q = q.replaceAll('"', "");


    if (q) {
      const fitered = contacts.filter((contact) => {
        return contact.value.includes(q);
      });

      this.setState({ filtredArr: fitered });
    }
  }

  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        You searched for: {this.state.q}
        <br />
        {this.state.contacts.length !== 0 ? (
          <>
            <strong>Select contact from list</strong>
            <ul>
              {this.state.filtredArr.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.value}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No contact found</p>
        )}
      </div>
    );
  }
}
