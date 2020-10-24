import React from 'react';
import contacts from '../contacts.json';

class ContactList extends React.Component {
  state = {
    contacts: contacts,
  };

  render() {
    console.log(contacts);
    return (
      <div className="contact-list">
        <tr className="contact">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {this.state.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt=""></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        ))}
      </div>
    );
  }
}

export default ContactList;
