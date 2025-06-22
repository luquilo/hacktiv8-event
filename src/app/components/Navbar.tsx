import Image from "next/image";
import hacktiv8 from "../../../public/images/hacktiv8-brandmark.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0">
      <Image
        alt="hacktiv8 logo"
        src={hacktiv8}
        placeholder="blur"
        height={60}
      />
    </nav>
  );
}
