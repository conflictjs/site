import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { label: "Documentation", href: "https://docs.conflict.yodacode.xyz" },
  { label: "Discord", href: "https://discord.gg/McM5r6dkcc" },
 // { label: "Page 3", href: "/" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="dark:text-white">
      <ul className="flex flex-wrap justify-between items-center p-6">
        <img
          className="w-8 h-8 rounded-full"
          src="/favicon.png"
          alt="logo"
        />
        <ul className="mx-0 flex flex-row space-x-5">
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href} passHref>
                <a
                  className={`px-4 py-2 rounded-2xl transition-colors hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
            >
              {theme === "dark" ? <span>🔆</span> : <span>🌑</span>}
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
