import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // https://legendary-pancake-pj766rjgwvwjh7wx9-3000.app.github.dev/edit/19
  // params = { theid: "19" }

  const contact = store.contacts.find((contact) => contact.id == params.theid);
  useEffect(() => {
    if (contact) {
      console.log(contact);
      // {name: 'Andres', phone: '12312312312', email: 'TEST@TEST.COM', address: '2222 SW 111 TH AVE', id: 19}
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setAddress(contact.address);
    }
  }, []);

  const handleEditContact = async () => {
    try {
      let response = await actions.editContact(
        {
          name: name,
          email: email,
          phone: phone,
          address: address,
        },
        contact.id
      );
      if (!response) {
        alert("an error occured while adding contact");
      } else {
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center mt-5 test">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Full Name"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="phone"
        placeholder="Phone"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="address"
        placeholder="Address"
      />
      <button
        onClick={handleEditContact}
        type="button"
        className="btn btn-success"
      >
        Edit contact
      </button>
    </div>
  );
};
