import { Mail, Linkedin, Github } from "lucide-react";
import NextLink from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-24 py-8">
      <div>
        <NextLink href="/">
          <span className="font-bold">G. Kumagai</span>
        </NextLink>
      </div>
      <div className="flex flex-row gap-16">
        <NextLink href="/about">
          <h1>Sobre</h1>
        </NextLink>
        <NextLink href="/exp">
          <h1>Experiência</h1>
        </NextLink>
        <NextLink href="/portifolio">
          <h1>Portifólio</h1>
        </NextLink>
      </div>
      <div className="flex flex-row gap-4">
        <NextLink href="">
          <Mail />
        </NextLink>
        <NextLink
          href="https://www.linkedin.com/in/gustavo-amamia-kumagai-293b421a3"
          target="_blank"
        >
          <Linkedin />
        </NextLink>
        <NextLink href="https://github.com/TofuVoador" target="_blank">
          <Github />
        </NextLink>
      </div>
    </div>
  );
};
