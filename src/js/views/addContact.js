import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  let Navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleNewContact = async () => {
    try {
      let response = await actions.createContact({
        name: name,
        email: email,
        phone: phone,
        address: address,
      });
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
    <div className="text-center mt-5">
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
        onClick={handleNewContact}
        type="button"
        className="btn btn-success"
      >
        Add new contact
      </button>
    </div>
  );
};
