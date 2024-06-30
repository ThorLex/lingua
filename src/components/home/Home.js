import { useNavigate } from "react-router-dom";
import Navbar from "../header";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const userinfos = localStorage.getItem("user");
  const [data, setdata] = useState([]);
  const [rendered, setrend] = useState();
  let result;
  // console.log(userinfos);
  // if (userinfos.valid != true) {
  //   navigate("../login");
  // }

  const login = async () => {
    const response = await fetch("http://localhost:8000/blogs ", {
      method: "GET",
    });
    result = await response.json();
    setdata(result);
    console.log(data);
    setrend(NaN);
    console.log(rendered);
  };
  useEffect(() => {
    login();
  }, [rendered]);

  return (
    <div>
      <div className=" m-6    card   card  justify-center">
        <Navbar></Navbar>
        <hr class=" m-2 border-8"></hr>
        <section>
          <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div class="flex items-center justify-between">
              <h2 class="font-semibold text-slate-900">Acceuil </h2>
            </div>
          </header>
          <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
            <li x-for="project in projects">
              {" "}
              <div className="grig grid-cols-1 gaps-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <img
                        className="w-full h-auto rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYIYVH6TjplzvL_dtOycsy_62XpfIbsbBIg&s"
                        alt="Image Description"
                      />
                      <div className="absolute top-0 start-0 end-0">
                        <div className="p-2 md:p-5">
                          <h3 className="text-xl  font-bold text-white whitespace-nowrap text-lg font-medium  dark:text-neutral-200">
                            10
                          </h3>
                          <p className="mt-1 text-white whitespace-nowrap text-md font-medium  dark:text-neutral-200">
                            ajout(s) journalier(s)
                          </p>
                          <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <img
                        className="w-full h-auto rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYIYVH6TjplzvL_dtOycsy_62XpfIbsbBIg&s"
                        alt="Image Description"
                      />
                      <div className="absolute top-0 start-0 end-0">
                        <div className="p-2 md:p-5">
                          <h3 className="text-lg font-bold text-white whitespace-nowrap text-lg font-medium  dark:text-neutral-200">
                            12
                          </h3>
                          <p className="mt-1 text-white  whitespace-nowrap text-md font-medium  dark:text-neutral-200">
                            nouveau mots
                          </p>
                          <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </li>
            <li class="flex">
              <a
                href="/new"
                class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
              >
                <svg
                  class="group-hover:text-blue-500 mb-1 text-slate-400"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New word
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="m-4">
        <span className="px-6   py-4 whitespace-nowrap text-md font-medium text-gray-800 dark:text-neutral-200">
          {" "}
          Liste des mots ajouter avec leurs traductions
        </span>
        <br />
        <br />

        <div className="flex  flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        francais
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Ewondo
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {data.map((word) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {word.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {word.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {word.wordf}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {word.worde}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                          >
                            Supr..
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
