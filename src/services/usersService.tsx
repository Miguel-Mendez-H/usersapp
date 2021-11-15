import React, { useState, useEffect } from "react";

function GetUsers() {

  const [users , setUsers] = useState([] as any);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}

export default GetUsers;
