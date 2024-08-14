const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/Kevin/contacts")
          .then((resp) => resp.json())
          .then((data) => setStore({ contacts: data.contacts }));
      },
      createContact: async (contact) => {
        let options = {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(contact),
        };
        try {
          let response = await fetch(
            "https://playground.4geeks.com/contact/agendas/Kevin/contacts",
            options
          );
          if (!response) {
            return false;
          } else {
            getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log("Error creating contact from flux");
        }
      },
      editContact: async (contact, id) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Kevin/contacts/" + id,
          {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(contact),
          }
        );
        if (!response) {
          return false;
        } else {
          getActions().getContacts();
          return true;
        }
      },
      deleteContact: async (id) => {
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Kevin/contacts/" + id,
          { method: "DELETE" }
        );
        if (!response) {
          return false;
        } else {
          getActions().getContacts();
          return true;
        }
      },
      //addContact: (name, number) => {
      //this.store.contacts;
      //},
    },
  };
};

export default getState;
