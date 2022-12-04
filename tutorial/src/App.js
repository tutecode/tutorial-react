import Hola from "./components/index/Hola"

function App() {

  let numero1 = 5
  let numero2 = null

  return (
    <>
    <Hola numero1={numero1} numero2={numero2}/>
    <div className="text-rose-500">mundo!</div>
    {
      // Si existe numero2 y si existe numero1 sino...
      numero2 ? <>Si Existe</>
      : numero1 ? <>Numero 1 si existe</>
      :
      <div className="animate-pulse p-2">
        <div class="rounded w-full h-52 bg-gray-400"></div>
        <div class='flex flex-col mt-5'>
          <div class='w-full h-5 bg-gray-400 rounded'></div>
          <div class='mt-2 w-10/12 h-3 bg-gray-400 rounded'></div>
          <div class='mt-2 w-8/12 h-3 bg-gray-400 rounded'></div>
        </div>
      </div>
    }
    </>
  );
}

export default App;
