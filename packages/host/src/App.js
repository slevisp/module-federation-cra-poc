import { useEffect, useState } from 'react'
import './App.css'
import RemoteApp from 'remote/App'
import { WhiteBoard } from 'commonComponents/core'
import Receiver from './_utils/Receiver'

function App () {
  const [whiteBoardData, setWhiteBoardData] = useState([])
  useEffect(() => {
    const abortController = Receiver.listen(setWhiteBoardData)

    return () => {
      if (abortController) abortController.abort()
    }
  }, [])
  return (
    <div className='App'>
      <RemoteApp />
      <header className='host-app'>
        <p>{'Host page <Receive message from Remote>'}</p>
        <WhiteBoard data={whiteBoardData} />
      </header>
    </div>
  )
}

export default App
