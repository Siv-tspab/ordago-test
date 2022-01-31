import { LocationIcon, MailIcon, PhoneIcon } from "../../icons";

export default function Footer() {
    return <footer className="mt-10 px-10 pt-10 bg-slate-900 border-t border-gray-700">
        <div className="grid grid-cols-2 gap-32 text-slate-300 text-md">
            <section>
                <h5 className="footer-title">Find Us</h5>
                <p className="pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ut possimus similique velit. Aliquid eum molestias, atque officiis laborum sed.</p>
                <ul>
                    <li className="flex items-center"><LocationIcon/> 1416 Chem. de Bordevieille, 31790 Saint-Sauveur</li>
                </ul>
            </section>
            <section>
                <h5 className="footer-title">Contact</h5>
                <ul>
                    <li><a href="mailto: ordago.contact@mail.com" className="flex items-center hover:text-slate-600"><MailIcon/>ordago.contact@mail.com</a></li>
                    <li><a href="tel: +33532094094" className="flex items-center hover:text-slate-600"><PhoneIcon/> +33532094094</a></li>
                </ul>
            </section>
        </div>
        <p className="w-max m-auto pt-10 pb-2 text-slate-600">@2022 All Rights Reserved.</p>
    </footer>;
}
