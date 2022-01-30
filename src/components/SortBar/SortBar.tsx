import { SortIcon } from "../../icons";

interface SortBarProps {
    setLabel: (x: any) => void;
    refetch: () => void;
    isLoading: boolean;
    setSortDirection: () => void;
}

export default function SortBar({ setLabel, refetch, isLoading, setSortDirection }: SortBarProps) {
    return <div className="m-5 p-2 flex items-center justify-between">
        <div className="flex items-center">
            <select className="input text-xl cursor-pointer mr-3" name="select" id="select" onChange={setLabel}>
                <option value="dob.age">Age</option>
                <option value="gender">Gender</option>
                <option value="nat">Nationality</option>
                <option value="location.city">City</option>
            </select>
            <div className="flex items-center cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-full p-2" onClick={setSortDirection}>
                <SortIcon />
            </div>
        </div>
        {isLoading ?
            <button className="input text-xl px-3 animate-pulse cursor-default opacity-70" >Refresh</button>
            :
            <button className="input text-xl px-3 hover:bg-slate-700 cursor-pointer" onClick={refetch}>Refresh</button>
        }
    </div>;
}