import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center font-bold tracking-tight md:tracking-tighter leading-tight mb-20">
        <h2 className="text-left text-2xl md:text-6xl mt-8">
          <Link href="/" className="hover:underline">
            UniPro
          </Link>
          .
        </h2>
        <div className="text-right mt-8 md:text-2xl">
          <h3>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export const IndexHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center text-left text-2xl md:text-4xl mt-6 mb-10 border-t-2 border-b-2 border-gray-500">
        <h3>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Header;
