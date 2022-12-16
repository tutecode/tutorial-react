import { useState } from "react";

function App() {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(numero1 + numero2)
    if(enabledPro){
      console.log('Otorgar acceso Pro')
    }
  }

  // Create State
  const [formData, setFormData] = useState({
    numero1: '',
    numero2: ''
  })

  const [enabledPro, setEnablePro] = useState(false)

  const { numero1, numero2 } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Numero 1:
          </label>
          <div className="mt-1 sm:mt-0 sm: col-span-2">
            <div className="max-w-lg flex rounded-md shadow-sm">
              <input
                type="text"
                name="numero1"
                value={numero1}
                onChange={e => onChange(e)}
                className="flex-1 block w-full border focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-full sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Numero 2:
          </label>
          <div className="mt-1 sm:mt-0 sm: col-span-2">
            <div className="max-w-lg flex rounded-md shadow-sm">
              <input
                type="text"
                name="numero2"
                value={numero2}
                onChange={e => onChange(e)}
                className="flex-1 block w-full border focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-full sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>
        <div className="max-w-lg flex rounded-md text-gray-600 font-worksans-light">
          <input
            type="checkbox"
            name="pro"
            onChange={e => setEnablePro(e.target.checked)}
            value="1"
            placeholder="0"
            className="rounded-md sm:text-sm border-gray-300 mr-2"
          />
          Pro
        </div>
        <button className='inline-flex p-2 px-4 rounded-full bg-rose-300'>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
