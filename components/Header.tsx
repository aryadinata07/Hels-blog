import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://i.pinimg.com/originals/1f/17/a5/1f17a5fda41ee18509c6cfa099144b2d.jpg"
            alt="logo"
          />
        </Link>
        <h1> HELS Universe</h1>
      </div>

    </header>
  );
}

export default Header;
