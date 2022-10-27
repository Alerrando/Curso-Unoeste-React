import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen bg-black">
      <div className="m-auto grid">
        <div className="text-center my-8">
          <h1 className="text-white text-3xl">Contador {count}</h1>
        </div>
        <div className="flex">
          <button
            className="py-1 px-4 text-black bg-[#4FA095] hover:text-white hover:bg-red-600 transition-all"
            onClick={() => setCount(count + 1)}
          >
            {' '}
            Incrementar
          </button>
          <button
            className="py-1 px-4 mx-4 text-black bg-[#4FA095] hover:text-white hover:bg-red-600 transition-all"
            onClick={() => setCount(0)}
          >
            {' '}
            Resetar
          </button>
          <button
            className="py-1 px-4 text-black bg-[#4FA095] hover:text-white hover:bg-red-600 transition-all"
            onClick={() => (count != 0 ? setCount(count - 1) : null)}
          >
            {' '}
            Diminuir
          </button>
        </div>
      </div>
    </div>
  )
}
