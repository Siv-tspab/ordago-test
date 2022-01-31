import { useState } from "react";
import { useQuery } from "react-query";
import { getAll } from "./api/api";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import NavBar from "./components/NavBar/NavBar";
import SortBar from "./components/SortBar/SortBar";
import { User } from "./models/User";

type SortLabel = "dob.age" | "gender" | "nat" | "location.city";

export default function App() {

	const [currentUser, setCurrentUser] = useState<User | undefined>();
	const [sortLabel, setSortLabel] = useState<SortLabel>("dob.age");
	const [sortDirection, setSortDirection] = useState<boolean>(true); 

	const { refetch, isLoading, data: users } = useQuery<User[]>('users', getAll)

	return (
		<div className="App min-h-screen bg-slate-800 text-white">
			<NavBar />
			<SortBar 
				setLabel={(e: any) => setSortLabel(e.target.value)} 
				setSortDirection={() => setSortDirection(!sortDirection)} 
				refetch={refetch} 
				isLoading={isLoading} 
			/>
			<main className="flex px-2">
				{isLoading ?
					<div className="w-full flex justify-center mt-10">
						<p className="w-max m-auto animate-pulse">Loading...</p>
					</div>
					:
					<>
						{users && <List users={users} setUser={setCurrentUser} sortLabel={sortLabel} sortDirection={sortDirection} />}
						<Detail user={currentUser} />
					</>
				}
			</main>
			<Footer/>
		</div>
	);
}