import { useEffect, useState } from "react";
import Config from "./api/api.config.json"
import List from "./components/List/List";
import NavBar from "./components/NavBar/NavBar";
import { User } from "./models/User";

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(Config.url + "?results=" + Config.userNumber)
      .then(response => response.json())
      .then(res => setUsers(res.results))
  }, []);


  return (
    <div className="App min-h-screen bg-slate-900 text-white">
      <NavBar/>
      <div className="flex flex-wrap justify-center w-10/12 m-auto">
        <List users={users} />
      </div>
    </div>
  );
}

export default App;
