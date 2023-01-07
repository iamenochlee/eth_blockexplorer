import Link from "next/link";

const GoHome = () => {
  return (
    <Link
      href="/"
      className="inline-block mb-16 px-5 py-2 bg-[#151922] hover:scale-[1.02] duration-75 ease-in">
      Home
    </Link>
  );
};

export default GoHome;
