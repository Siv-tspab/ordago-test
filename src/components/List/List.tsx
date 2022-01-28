import { User } from "../../models/User";

export default function List({ users }: { users: User[] }) {
    return <>
        {users.map(user => (
            <div key={user.cell} className="rounded-xl w-1/4 hover:w-1/3 ease-in-out duration-300 grow  relative h-max m-5">
                <img className="w-full rounded-t-xl rounded-b-2xl" src={user.picture.large} alt={user.name.first + " " + user.name.last} />
                <h6 className="absolute bottom-0 bg-gradient-to-t from-neutral-900 w-full rounded-b-xl px-5 pb-5 pt-10 font-bold text-3xl">{user.name.first} {user.name.last}</h6>
            </div>
        ))}
    </>;
}
