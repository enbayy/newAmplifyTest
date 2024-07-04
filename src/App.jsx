import { useState } from 'react'
import ActionCard from './ui-components/ActionCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ActionCard />
    </>
  )
}

export default App
