import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white py-2 px-4 border-b border-b-[#e6ebf4]">
      <Link href="/">Book API</Link>
      <Link
        href="/register"
        className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Register
      </Link>
    </header>
  );
};
export default Header;
