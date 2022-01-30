
interface SortBarType {
    label: string;
    setLabel: (x: string) => void;
    refetch: () => void;
    isLoading: boolean;
}

export default function SortBar({ label, setLabel, refetch, isLoading }: SortBarType) {
    return <div className="m-5 p-2 flex items-center justify-between">
        <div className="flex">
            <input className="input text-2xl mr-3" placeholder="Tape a name" type="text" />
            <label className="text-2xl ml-3" htmlFor="select">Sort by:</label>
            <select className="input text-xl mx-3 cursor-pointer" name="select" id="select" onChange={(e: any) => setLabel(e.value)}>
                <option value="">All</option>
                <option value="gender">Gender</option>
                <option value="age">Age</option>
                <option value="nat">Nationality</option>
                <option value="city">City</option>
            </select>
            {label}
        </div>
        {isLoading ?
            <button className="input text-xl px-3 animate-pulse cursor-default opacity-70" >Refresh</button>
            :
            <button className="input text-xl px-3 hover:bg-slate-700 cursor-pointer" onClick={refetch}>Refresh</button>
        }
    </div>;
}