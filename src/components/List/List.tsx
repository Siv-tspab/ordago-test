import { User } from "../../models/User";

interface ListProps {
    users: User[] | undefined;
    setUser: (x: User) => void;
    sortLabel: string;
    sortDirection: boolean;
}

export default function List({ users, setUser, sortLabel, sortDirection }: ListProps) {

    users?.sort((a, b) => {
        // If label is in a subtree
        if (sortLabel.includes(".")) {

            let splitedLabel = sortLabel.split(".")
            let obj1 = a[splitedLabel[0]][splitedLabel[1]];
            let obj2 = b[splitedLabel[0]][splitedLabel[1]];

            if (sortDirection) {
                return obj1 > obj2 ? 1 : -1
            }
            return obj1 < obj2 ? 1 : -1
        }

        // If label is on first level
        let obj1 = a[sortLabel];
        let obj2 = b[sortLabel];

        if (sortDirection) {
            return obj1 > obj2 ? 1 : -1
        }
        return obj1 < obj2 ? 1 : -1
    })

    return (
        <div className="flex flex-wrap w-3/5 max-w-3/5 pr-5">
            {users?.map((user: User) => (
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