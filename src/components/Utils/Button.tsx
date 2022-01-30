
export default function Button({ children }: { children: JSX.Element | string }) {
    return <button className="border bg-slate-900 hover:bg-slate-700 ease-in-out duration-100 px-4 rounded-xl mx-5 flex items-center text-xl">
        {children}
        </button>
}
