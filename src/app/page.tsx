import Image from 'next/image';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';

export default function Home() {
    function renderIcons() {
        const icons = [IconBrandFacebook, IconBrandTwitter, IconBrandInstagram];

        return icons.map((Icon, index) => (
            <div key={index}
                 className={"rounded-full border-white border p-1 md:p-2 hover:border-softMagenta cursor-pointer hover:text-softMagenta"}>
                <Icon size={22}/>
            </div>
        ));
    }

    return (
        <main
            className={"p-10 md:px-20 bg-violet min-h-screen text-white bg-[url('/images/bg-mobile.svg')] bg-contain bg-no-repeat flex flex-col items-center md:justify-between"}>
            <Image className={"md:hidden"} src={"/images/logo.svg"} width={120} height={19} alt={"logo"}/>
            <div className={"hidden md:block max-w-[81.75rem] w-full"}>
                <Image className={" self-start"} src={"/images/logo.svg"} width={180} height={29}
                       alt={"logo"}/>
            </div>

            <div className={"flex flex-col md:flex-row flex-1 items-center md:pb-7 md:gap-[3.75rem] md:h-[30.813rem]"}>
                <Image className={"mt-[4.375rem] md:hidden"} src={"/images/illustration-mockups.svg"} width={295}
                       height={209}
                       alt={"Illustration"}/>

                <div className={"h-[30.813rem] relative w-[43.5rem] hidden md:block"}>
                    <Image className={""} src={"/images/illustration-mockups.svg"} fill
                           alt={"Illustration"}/>
                </div>

                <div className={"text-center md:text-left flex-1 md:pb-12"}>
                    <h1 className={"font-semibold text-2xl md:text-[2.5rem] leading-9 md:max-w-[30.438rem] md:leading-[3.75rem]"}>Build
                        The Community Your Fans Will Love</h1>
                    <p className={"mt-4 md:mt-6 leading-6 md:leading-[1.688rem] md:text-[1.125rem] md:max-w-[34.5rem]"}>Huddle
                        re-imagines the way we build communities. You have a voice, but so does your audience. Create
                        connections with your users as you engage in genuine discussion. </p>

                    <div className={"px-[3.25rem] text-violet mt-6 md:w-[12.5rem] md:px-0"}>
                        <button
                            className={"box-shadow bg-white rounded-[1.25rem] py-3 w-full hover:bg-softMagenta hover:text-white"}>Register
                        </button>
                    </div>
                </div>
            </div>

            <div className={"flex gap-2.5 mt-auto max-w-[81.75rem] w-full justify-end"}>
                {renderIcons()}
            </div>
        </main>
    );
}
