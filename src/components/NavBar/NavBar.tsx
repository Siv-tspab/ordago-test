import { BellIcon, MenuIcon, UserIcon } from "../../icons";


export default function NavBar() {
    return <nav className="p-5 mb-10 shadow-xl flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ordago</h1>
        <div className="flex items-center">
            <UserIcon />
            <BellIcon />
            <MenuIcon />
        </div>
    </nav>;
}
