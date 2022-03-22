import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="!Conflict" />
      <Nav />
      <main className="m-6">
        <div className="container mx-auto" style={{
          height: 'calc( 100vh - 200px )'
        }}>
          <div style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <img alt="Conflict " src="/conflict.svg" className="w-[200px] mx-auto sm:w-[300px] lg:w-[400px] sm:mx-0" />
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
        </div>


        <div className="container mx-auto" style={{
          height: 'calc( 100vh - 200px )'
        }}>
          <div style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <h2 className="subtitle mb-3 sm:ml-4 lg:ml-5">
            <img alt="Conflict " src="/conflict.svg" className="w-[175px] mx-auto sm:w-[175px] lg:w-[175px] sm:mx-0 inline-block align-bottom" />
            {' '} is the Discord framework for <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-600">beginners</a></h2>
            <p className="sm:ml-4 lg:ml-5">Create a command with as little as <b>6 lines of code.</b></p>
            <br />
            <code className="inline-block">
              <pre style={{ maxWidth: 'calc(100vw - 50px)', overflowX: 'auto' }} className="mb-3 sm:ml-4 lg:ml-5 inline-block bg-slate-900 text-white p-3 rounded-lg">{`import Command from 'conflict/commands';

export default new Command({
    name: 'helloworld',
    description: 'Hello, world!',
    execute: command => command.respond('Hello, world!')
});`}</pre>
              <a href="https://docs.conflict.yodacode.xyz" target="_blank" rel="noreferrer">
                <div style={{
                  position: "relative",
                  bottom: "0px",
                  left: '50%',
                  borderRadius: '10px',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  background: '#000000aa',
                  color: 'white'
                }} className="lg:ml-5 sm:ml-4 transition-all duration-300 ease-in-linear hover:translate-x-[-45%] translate-x-[-50%]">Compare to 40+ lines in other libraries →</div>
              </a>
            </code>
          </div>
        </div>

        <div className="container mx-auto" style={{
          height: 'calc( 100vh - 200px )'
        }}>
          <div style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <h2 className="subtitle mb-3 sm:ml-4 lg:ml-5">
            <img alt="Conflict " src="/conflict.svg" className="w-[175px] mx-auto sm:w-[175px] lg:w-[175px] sm:mx-0 inline-block align-bottom" />
            {' '} has all the new <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">features</a></h2>
            <p className="sm:ml-4 lg:ml-5">Use new features like modals with as little as <b>13 lines of JSX.</b></p>
            <br />
            <code className="inline-block">
              <pre style={{ maxWidth: 'calc(100vw - 50px)', overflowX: 'auto' }} className="mb-3 sm:ml-4 lg:ml-5 inline-block bg-slate-900 text-white p-3 rounded-lg">{`<ActionRow>
    <Button onclick={(event) => {
        event.modal(
            <Modal title="I'm a modal" onSubmit={(form) => {
                form.respond('You just submitted! Here\\'s the data: ' + JSON.stringify(form.values));
            }}>
                <ActionRow>
                    <TextInput label="Text input" placeholder="Input some text!" variant="input" name="text_input" />
                </ActionRow>
            </Modal>
        );
    }} variant="cta">Open Modal</Button>
</ActionRow>`}</pre>
              <a href="https://docs.conflict.yodacode.xyz" target="_blank" rel="noreferrer">
                <div style={{
                  position: "relative",
                  bottom: "0px",
                  left: '50%',
                  borderRadius: '10px',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  background: '#000000aa',
                  color: 'white'
                }} className="lg:ml-5 sm:ml-4 transition-all duration-300 ease-in-linear hover:translate-x-[-45%] translate-x-[-50%]">Compare to hundreds of lines in other libraries <i>if it&apos;s even supported</i> →</div>
              </a>
            </code>
          </div>
        </div>
      </main>
    </div>
  );
}
