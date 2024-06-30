import { useEffect, useState } from "react";
import { useLogin } from "./useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isvalid, setisvalid] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (e, url, username, password) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setisvalid(false);

    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok || response.status !== 200) {
      setIsLoading(false);
      setError(json.error);
      setisvalid(false);
    }

    if (response.ok || username.length !== 0 || password.length !== 0) {
      // save the user to local storage
      console.log(username.length);
      localStorage.setItem(
        "user",
        JSON.stringify({ username, password, valid: "true" })
      );
      setIsLoading(false);
      setisvalid(true);
    }
  };
  if (isvalid === true) {
    navigate("/home");
  }

  // useEffect(() => {}, [username || password]);

  return (
    <div className="container mx-2 px-4">
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl  font-bold text-gray-800 sm:text-4xl ">
              Connexion
            </h1>
            <p className="mt-1 text-gray-600 dark:text-neutral-400 first-letter:uppercase">
              connectez-vous à la plateforme pour nous fournir en mots
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
              Remplissez le formulaire
            </h2>
            <form>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      value={username}
                      required
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      className="py-3   border border-green-500     px-4 block w-full  rounded-lg text-sm border   focus:ring-blue-500  focus:border-gray-200 focus:border-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      required
                      onChange={(e) => {
                        setpassword(e.target.value);
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
                    handlesubmit(
                      e,
                      "http://localhost:8000/blogs",
                      username,
                      password
                    );
                  }}
                >
                  {isLoading == null && (
                    <span className="text-lg"> Chargement ...</span>
                  )}
                  {isLoading != null && (
                    <span className="text-lg"> connexion</span>
                  )}
                </button>
              </div>
              <div className="mt-3 text-center">
                {error == null ? (
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    chaque session dure 21h maximun
                  </p>
                ) : (
                  <p className="text-sm text-red  dark:text-red-500">
                    {" "}
                    ERREUR : Une erreur est survenue opur votre identification
                    ou avec le serveur. Veuillez reessayer ou contacter le
                    service client au 693100855
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Contact Us */}
    </div>
  );
};

export default Login;
