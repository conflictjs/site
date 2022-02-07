import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <main className="m-6">
        <div className="container mx-auto">
          <img src="https://conflict.js.org/conflict.svg" className="w-[200px] mx-auto sm:w-[300px] lg:w-[400px] sm:mx-0" />
          <h2 className="subtitle mb-3 sm:ml-4 lg:ml-5">Build <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-600">incredible</a> Discord integrations, <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">faster</a> and <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">simpler</a> than with any other library.</h2>
          <span className="mb-3 sm:ml-4 lg:ml-5">
            <a href="https://docs.conflict.yodacode.xyz/getting-started" className="mr-3">
              <button className="btn my-3 bg-gradient-to-br to-red-500 from-blue-500 border-2 dark:border-gray-900 border-white text-white transition-all duration-300 w-[150px] bg-size-200 bg-pos-0 hover:bg-pos-100">
                Get Started
              </button>
            </a>
            <a href="https://docs.conflict.yodacode.xyz" className="">
              <button className="bg-gray-200 inline-block my-[-3px] h-[44px] align-middle rounded-md">
                <button className="align-top btn bg-gradient-to-br to-red-500 from-blue-500 border-2 border-blue-500 hover:border-red-500 text-transparent font-extrabold bg-clip-text transition-all duration-300 w-[150px] bg-size-200 bg-pos-0 hover:bg-pos-100">
                  Docs
                </button>
              </button>
            </a>
          </span>
          <br />
          <code className="inline-block">
            <pre className="mb-3 sm:ml-4 lg:ml-5 inline-block bg-slate-900 text-white p-3 shell rounded-lg">{'npx create-conflict-app'}</pre>
          </code>
        </div>
      </main>
    </div>
  );
}
