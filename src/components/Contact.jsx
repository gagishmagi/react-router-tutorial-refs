import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    };
  }

  componentDidMount() {
    this.searchContact();
  }

  searchContact() {
    // console.log(this.props);
    if (this.props.location.search) {
      let url = this.props.location.search;
      let parsed = queryString.parse(url);
      let q = parsed.q;

      this.filterContacts(q);

      this.setState({ q });
    }
  }

  filterContacts(q) {
    const contacts = [...this.state.contacts];

    q = q.replaceAll('"', "");

    if (q) {
      const fitered = contacts.filter((contact) => {
        return contact.value.includes(q);
      });
      this.setState({ contacts: fitered });
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
              {this.state.contacts.map((link, index) => (
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
