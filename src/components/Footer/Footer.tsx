import { LocationIcon, MailIcon, PhoneIcon } from "../../icons";

export default function Footer() {
    return <footer className="w-full mt-10 px-10 pt-10 bg-slate-900 border-t border-gray-700">
        <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 text-slate-300 text-sm md:text-md">
            <section>
                <h5 className="footer-title">Find Us</h5>
                <p className="pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ut possimus similique velit. Aliquid eum molestias, atque officiis laborum sed.</p>
                <div className="flex items-center"><span><LocationIcon /></span>1416 Chem. de Bordevieille, 31790 Saint-Sauveur</div>
            </section>
            <section>
                <h5 className="footer-title">Contact</h5>
                <a href="mailto: ordago.contact@mail.com" className="flex items-center hover:text-slate-600"><span><MailIcon /></span> ordago.contact@mail.com</a>
                <a href="tel: +33532094094" className="flex items-center hover:text-slate-600"><span><PhoneIcon /></span>  +33532094094</a>
            </section>
        </div>
        <p className="w-max m-auto pt-10 pb-2 text-slate-600">@2022 All Rights Reserved.</p>
    </footer>;
}
