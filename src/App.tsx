import { useEffect, useState } from "react";
import Config from "./api/api.config.json"
import { User } from "./models/User";

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(Config.url + "?results=" + Config.userNumber)
      .then(response => response.json())
      .then(res => setUsers(res.results))
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
