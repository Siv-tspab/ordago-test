import { User } from "../../models/User";

export default function List({ users, setUser }: { users: User[] | undefined; setUser: (x: User) => void }) {

    return (
        <div className="flex flex-wrap w-3/5 max-w-3/5 pr-5">
            {users && users.map((user: User) => (
                <div key={user.cell} className={"w-1/3 lg:w-1/4 max-w-1/2 lg:max-w-1/3 m-5 h-60 hover:h-80 bg-no-repeat bg-cover rounded-xl rounded-b-2xl ease-in-out duration-300 flex-initial hover:grow cursor-pointer shadow-xl"} onClick={() => setUser(user)} style={{backgroundImage: `url(${user?.picture.large})`}}>
                    <div className="relative  bg-gradient-to-t from-neutral-900 w-full h-full rounded-b-xl">
                        <h6 className="absolute bottom-0 px-3 pb-3 font-bold text-lg lg:text-xl xl:text-2xl">{user.name.first} {user.name.last}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}
