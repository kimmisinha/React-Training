import React from "react";

function List() {
  const users = [
    { name: "Anil", email: "anil@test.com", contact: "111" },
    { name: "Burce", email: "bruce@test.com", contact: "222" },
    { name: "Peter", email: "peter@test.com", contact: "111" },
    { name: "Sam", email: "sam@test.com", contact: "777" },
  ];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table border={"5"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
