function Footer() {
  return (
    <footer className="bg-amber-400 py-10 mt-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 text-black">
          <div>
            <p className="font-extrabold text-2xl uppercase">Our Brands</p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Ferrari
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Porsche
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Bugatti
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Mclaren
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Mercedes
            </p>
            <p>... and more.</p>
          </div>
          <div>
            <p className="font-extrabold text-2xl uppercase">Cities</p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Miami
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Hollywood
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Las Vegas
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Orlando
            </p>
          </div>
          <div>
            <p className="font-extrabold text-2xl uppercase">Our Services</p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Luxery car renting
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Memberships
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Weddings
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Chaufeur
            </p>
            <p className="text-xl text-gray-600 cursor-pointer hover:text-black duration-300">
              Corporate Events
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="font-extrabold text-2xl uppercase">
              Join Our News Letter
            </p>
            <div className="border-black border rounded-full flex p-1">
              <input
                className="w-full py-2 px-4 bg-transparent  outline-0 "
                type="text"
              />
              <button className="hover:bg-neutral-900 hover:text-amber-400">
                Join
              </button>
            </div>
            <p className=" text-gray-600 cursor-pointer hover:text-black duration-300">
              2001 NW 167th Street. Miami Gardens, Florida. 33056
            </p>
            <p className=" text-gray-600 cursor-pointer hover:text-black duration-300">
              888-674-4044
            </p>
            <p className=" text-gray-600 cursor-pointer hover:text-black duration-300">
              email@example.com
            </p>
          </div>
        </div>
        <p className="text-black font-bold mx-auto w-fit">
          All Rights Reesrved 2022
        </p>
      </div>
    </footer>
  );
}
export default Footer;
