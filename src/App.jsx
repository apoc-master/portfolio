import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <section className="bg-[#FBFBEF] mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
          <div id="about" className="scroll-mt-28"></div>
          <div className="mx-auto md:w-5/6 md:flex md:items-stretch p-2 rounded-md">
            <div className="p-4 md:w-1/2 ">
              <img
                className="w-4/6 max-w-sm mx-auto rounded-lg md:w-full"
                src="https://thispersondoesnotexist.com"
                alt=""
              />
            </div>
            <div className=" p-4 md:w-1/2">
              <div className="xborder-2 h-full rounded-md bgx-[#DBFCD1]  ">
                <h1 className="text-2xl font-bold  text-blue-500 mt-4  rounded-t-md">
                  Frank Gonzalez
                </h1>
                <h2 className="text-lg text-[#092B50] my-3">
                  Software developer
                </h2>
                <div className="overflow-y-auto text-justify px-4 md:h-60 ">
                  <p className="pb-3">
                    As a software developer, I have had the privilege to
                    collaborate in different areas of IT, giving support or
                    developing applications for multiple enterprises.
                  </p>
                  <p className="pb-3">
                    This experience enabled me to understand the operative
                    process and understand the business rules, transforming the
                    ideas and needs of technological solutions.
                  </p>
                  <p className=" ">
                    I have worked with multicultural teams around the world also
                    allowing me to know a variety of cultures, working ways and
                    good practices, achievement trust, good communication, and
                    excellent relationships with all of them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#579C8A] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
          Skills
        </div>
      </section>

      <footer className="bg-[#092B50] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
          Foother
        </div>
      </footer>
    </>
  );
}

export default App;
