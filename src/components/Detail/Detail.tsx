import { AddIcon, LocationIcon } from '../../icons';
import { User } from '../../models/User';
import Button from '../Utils/Button';

export default function Detail({ user }: { user: User | undefined }) {
    return user ? (
        <div className="fixed right-0 w-2/5 mx-5 mt-5 h-max bg-no-repeat bg-cover bg-center rounded-xl shadow-xl" style={{ backgroundImage: `url(${user?.picture.large})` }}>
            <div className="rounded-xl p-6 xl:p-8 font-semibold text-lg bg-slate-900/80">
                <h2 className="text-3xl lg:text-3xl font-bold pb-4">{user?.name.last + " " + user?.name.first} <span>{user.gender === "male" ? "👨" : "👩"}</span></h2>
                <div className="flex items-center pb-2">
                    <LocationIcon />
                    {user.nat} - {user.location.city}
                    <Button>
                        <>Add <span className="pl-2"><AddIcon /></span></>
                    </Button>
                </div>
                <p className="pb-2"><span className="text-2xl">{user.dob.age}</span> years old</p>
                <p className="text-md lg:text-lg font-light w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus voluptatem ratione sapiente consequatur odio maiores harum fugiat ducimus labore. Maxime culpa aliquid porro eveniet magnam facere dolor nemo fugiat atque magni? Enim qui ea sapiente illo magni placeat similique aliquam corporis quidem veniam magnam accusamus voluptate hic minus non est blanditiis quisquam, facilis totam quaerat facere sequi a. Blanditiis.</p>
            </div>
        </div>
    ) : null
}
