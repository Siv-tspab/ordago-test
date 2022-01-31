import { User } from "../../models/User";
import { useSort } from "./useSort";

interface ListProps {
    users: User[];
    setUser: (x: User) => void;
    sortLabel: string;
    sortDirection: boolean;
}

export default function List({ users, setUser, sortLabel, sortDirection }: ListProps) {

    const sortedUsers = useSort([...users], sortLabel, sortDirection)

    return (
        <div className="flex flex-wrap w-3/5 max-w-3/5 pr-5">
            {sortedUsers?.map((user: User) => (
                <div
                    key={user.cell}
                    className={"w-3/4 md:w-1/3 lg:w-1/4 max-w-full md:max-w-1/2 lg:max-w-1/3 h-60 hover:h-80 hover:grow m-2 lg:m-5 bg-no-repeat bg-cover bg-center rounded-xl rounded-b-2xl ease-in-out duration-300 cursor-pointer shadow-xl"}
                    onClick={() => setUser(user)}
                    style={{ backgroundImage: `url(${user?.picture.large})` }}
                >
                    <div className="relative bg-gradient-to-t from-neutral-900 w-full h-full rounded-b-xl">
                        <h6 className="absolute bottom-0 px-3 pb-3 font-bold text-lg lg:text-xl xl:text-2xl">{user.name.first} {user.name.last}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}