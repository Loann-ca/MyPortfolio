import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { dataContact } from "@/data";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center md:text-left md:flex md:justify-between">
        
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Loann Cosano</h3>
          <p className="text-gray-400">
            Full Stack Developer passionate about technology and innovation.
          </p>
        </div>

        {/* Enlaces de Navegación */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#home" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about-me" className="hover:text-blue-500">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-500">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
          <ul className="flex justify-center md:justify-start gap-4">
            {dataContact.map((data) => (
              <li key={data.id}>
                <Link href={data.link} target="_blank" className="hover:text-blue-500">
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Loann Cosano. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
