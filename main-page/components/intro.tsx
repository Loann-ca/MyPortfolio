import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";
import Container from "./shared/container";

//ADD MULTIPLE LENGUAJES

const Intro = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Loann Cosano</h1>
                <h2 className="text-2xl text-gray-400">Full Stack Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contact me
                        </Link>

                        <Link className={buttonVariants()}
                            href="/CV_Loann_cosano.pdf"
                            target="_blank">
                            <Paperclip className="mr-2" /> Download CV
                        </Link>
                        {/* <Link className={buttonVariants()}
                            href="https://github.com/Loann-ca"
                            target="_blank">
                            <Code2 className="mr-2" /> Github
                        </Link>*/}
                    </div>
                </div>
                <Image src="/foto.png" alt="Profile pic" width={200} height={200} className="rounded-full mx-auto p-4" />
            </div>
        </Container>
    );
}

export default Intro;