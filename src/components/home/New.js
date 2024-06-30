import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../header";

const New = () => {
  const [worde, setworde] = useState();
  const [wordf, setwordf] = useState();
  const time = 2000;
  const [show, setshow] = useState(null);
  const [me, setme] = useState(null);

  const handlesubmit = async (e, url, worde, wordf) => {
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ worde, wordf }),
    });
    const json = await response.json();
    console.log(response.ok);
    if (response.ok) {
      setworde("");
      setwordf("");

      setTimeout(() => {
        setme(true);
        setInterval(() => {
          setme(null);
        }, 2000);
      }, 2000);
    } else {
      setTimeout(() => {
        setme(false);
        setInterval(() => {
          setme(null);
        }, 2000);
      }, 2000);
    }
  };

  useEffect(() => {}, [show !== 0]);

  return (
    <div className="container my-5  p-4justify-center align-center ">
      <Navbar className="m-2"></Navbar>
      {me == true && (
        <div
          className="bg-teal-50 m-4 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Icon */}
              <span className=" m-4 inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              {/* End Icon */}
            </div>
            <div className="ms-3">
              <h3 className="text-gray-800 font-semibold dark:text-white">
                Successfully updated.
              </h3>
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                You have successfully updated your email preferences.
              </p>
            </div>
          </div>
        </div>
      )}
      {me == false && (
        <div
          className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30"
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Icon */}
              <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
              {/* End Icon */}
            </div>
            <div className="ms-3">
              <h3 className="text-gray-800 font-semibold dark:text-white">
                Error!
              </h3>
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                Your purchase has been declined.
              </p>
            </div>
          </div>
        </div>
      )}
      <a href="home">
        {" "}
        <button className=" btn m-4  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Retour
        </button>
      </a>
      <div className="flex m-4 flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
        <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
          Remplissez le formulaire por ajour un nouveau mot
        </h2>
        <form className="m-4">
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium "
                >
                  Mot en Français
                </label>
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  value={wordf}
                  required
                  onChange={(e) => {
                    setwordf(e.target.value);
                  }}
                  className="py-3   border border-green-500     px-4 block w-full  rounded-lg text-sm border   focus:ring-blue-500  focus:border-gray-200 focus:border-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-lastname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium "
                >
                  Mot en Ewondo
                </label>
                <input
                  type="password"
                  value={worde}
                  required
                  onChange={(e) => {
                    setworde(e.target.value);
                  }}
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  className="py-3  border border-green-500 focus   px-4 block w-full  rounded-lg text-sm border   focus:ring-blue-500  focus:border-gray-200"
                />
              </div>
            </div>
            {/* End Grid */}
            {/* Grid */}

            {/* End Grid */}
          </div>
          {/* End Grid */}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={(e) => {
                handlesubmit(e, "http://localhost:8000/blogs", worde, wordf);
              }}
            >
              {" "}
              <span className="text-lg"> Ajouter</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
