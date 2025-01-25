import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../Redux/ActionsCreators/actionsCreactors";
import '../../styles/users.css';


const Users = () => {
  const users = useSelector((state) => state.user.users); 
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null); 


  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(currentUser.id, currentUser));
    setIsEditing(false); 
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <div className="users-container">
     
      <div className="users-table-wrapper">
        <h1>List Users</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Supprimer
                  </button>
                  <button
                    className="update-button"
                    onClick={() => {
                      setCurrentUser(user); 
                      setIsEditing(true); 
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulaire de modification */}
      {isEditing && (
        <div className="edit-form-container">
          <h3>Edit user</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={currentUser.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={currentUser.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={currentUser.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button type="submit" className="save-button">Save</button>
             
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;
