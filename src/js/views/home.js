import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		test
// 	</div>
// );

export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleDelete = (id) => {
    actions.deleteContact(id);
  };

  return (
    <div>
      <ul className="list-group">
        {store.contacts.length !== 0 &&
          store.contacts.map((item, index) => (
            <>
              <div className="container">
                <li className="list-group-item">{item.name}</li>
                <li className="list-group-item">{item.phone}</li>
                <li className="list-group-item">{item.email}</li>
                <li className="list-group-item">{item.address}</li>
              </div>

              <div className="w-75 mx-auto">
                <Link className="btn btn-primary" to={"/edit/" + item.id}>
                  <p>Edit</p>
                </Link>
              </div>
              <div className="w-75 mx-auto">
                <p
                  className="btn btn-primary"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </p>
              </div>
            </>
          ))}
      </ul>
    </div>
  );
};
