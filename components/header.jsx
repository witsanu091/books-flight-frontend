import Link from "next/link";

const Header = () => {
  return (
    <>
      <header id="header" className="smt-header">
        <div id="header-wrap">
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-lg font-bold">
                <Link href="/search-flight">
                  <div className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    Flight
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href="my-booking">
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    My Booking
                  </i>
                </Link>
                <Link href="search-flight">
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    flight Status
                  </i>
                </Link>
                {/* <Link href="/sign-in">
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    Login
                  </i>
                </Link> */}
                <Link href="/profile">
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    Profile
                  </i>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
