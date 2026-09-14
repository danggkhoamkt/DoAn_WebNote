import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-2xl shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-blue-600">FE Base Ready 🚀</h1>
        <p className="text-gray-500">
          Vite + React + Tailwind CSS đã được cấu hình sẵn.
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
