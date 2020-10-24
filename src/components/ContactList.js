import React from 'react';
import contacts from '../contacts.json';

class ContactList extends React.Component {
  state = {
    cnts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
  };

  addRandomContact = () => {
    let num = Math.floor(Math.random() * Math.floor(contacts.length));

    if(!this.state.cnts.includes(contacts[num])){
        this.setState({
            cnts:[
                ...this.state.cnts,
                contacts[num]
            ]
        })
    } else console.log(`${contacts[num]} is already in the table`)
  }

  render() {
    console.log(contacts);
    return (
      <div className="contact-list">

        <button onClick={this.addRandomContact}> Add Random Contact</button>
        <tr className="contact">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {this.state.cnts.map((contact) => (
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
