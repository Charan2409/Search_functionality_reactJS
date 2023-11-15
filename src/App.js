import "./styles.css";
import { useState } from "react";
import Data from "./Data.json"; // Dummy Data from dummy.json website.

export default function App() {
  const [userList, setUserList] = useState(Data.users);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(userList);

  const handleSearch = () => {
    let filteredArray = filteredList.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText)
    );
    setFilteredList(filteredArray);
  };
  console.log(searchText);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      {filteredList.map((user) => {
        return (
          <div className="user_list">
            <span key={user.id} className="userName">
              {user.firstName + " " + user.lastName}
            </span>
          </div>
        );
      })}
    </div>
  );
}
