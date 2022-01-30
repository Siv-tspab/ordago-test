import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAll } from "./api/api";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import NavBar from "./components/NavBar/NavBar";
import SortBar from "./components/SortBar/SortBar";
import { User } from "./models/User";

function App() {

  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [sortLabel, setSortLabel] = useState<string>("");

  const { refetch, isLoading, data: users } = useQuery<User[]>('users', getAll)

  return (
    <div className="App min-h-screen bg-slate-800 text-white">
      <NavBar />
      <SortBar label={sortLabel} setLabel={setSortLabel} refetch={refetch} isLoading={isLoading} />
      <main className="flex px-2">
        {isLoading ?
          <div className="w-full flex justify-center mt-10">
            <p className="w-max m-auto animate-pulse">Loading...</p>
          </div>
          :
          <>
            <List users={users} setUser={setCurrentUser} />
            <Detail user={currentUser} />
          </>
        }
      </main>
    </div>
  );
}

export default App;


type Order = "DESC" | "ASC";

const sort = (users: User[], label: string, order: Order = "DESC"): User[] => {
  return users;
}