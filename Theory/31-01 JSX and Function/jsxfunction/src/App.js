import React from "react";
import TableRow from "./components/TableRow"
function Heading()
{
  return React.createElement("h1", { id: "heading1", style: { color: "Red" } }, "From Heading Function");
}



function App()
{
  // const h1 = document.createElement('H1');
  // h1.id = "heading1";
  // h1.style = "color:red";
  //h1.innerText = "Hello, Class";
  // const h1 = React.createElement("h1", { id: "heading1", style: { color: "Red" } }, "Hello, Class");
  // const p = React.createElement('p', null, 'This is a paragraph');
  // const div = React.createElement('div', null, <Heading />, p);
  // return div;
  const _name = "Abhijet";
  const styles = { color: "red" };
  var age = 5;

  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Eve", age: 45 }
  ];

  return (

    <div>
      <h1 id="heading1" style={styles}>Hello, Class</h1>
      <p>Below are some comments for the post</p>
      {
        age > 17 ? <p>User: {_name}</p> : <p>User: anonymous</p>
      }

      <ul>
        {
          users.map(user =>
          {
            return <li>{user.name}</li>
          })
        }
      </ul>

      <table>
        {
          users.map(user =>
          {
            return <TableRow user={user} style={{ color: "red" }} />
          })
        }
      </table>
    </div>
  )
}

export { Heading, App };