import { useEffect, useState } from 'react'
import './App.css'
import RemoteApp from 'remote/App'
import { WhiteBoard } from 'commonComponents/core'

function App () {
  const [whiteBoardData, setWhiteBoardData] = useState([])
  useEffect(() => {
    let data = []
    const abortController = window.addEventListener('POST_MESSAGE', event => {
      const value = event?.detail?.value
      if (value) {
        data = [value, ...data]
        setWhiteBoardData(data)
      }
    })

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
