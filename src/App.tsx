import { useEffect, useState } from "react";
import Config from "./api/api.config.json"
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import NavBar from "./components/NavBar/NavBar";
import { useReorder } from "./hooks/useReorder";
import { User } from "./models/User";

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    fetch(Config.url + "?results=" + Config.userNumber)
      .then(response => response.json())
      .then(res => setUsers(res.results))
  }, []);

  useReorder({ ...users }, "gender")


  return (
    <div className="App min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="flex px-2">

        <List users={users} setUser={setCurrentUser} />
        <Detail user={currentUser} />
      </main>
    </div>
  );
}

export default App;
