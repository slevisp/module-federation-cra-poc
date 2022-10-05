import { useRef } from 'react'
import './App.css'
import { Button, Input } from 'commonComponents/core'
import Messager from './_utils/Messager'

function App () {
  const inputRef = useRef(null)
  const handleBtnClicked = () => {
    const { value } = inputRef.current

    const messager = new Messager(value)
    messager.dispatch()
  }
  return (
    <div className='App'>
      <header className='App-header'>
        {'Remote page <dispatch message>'}
        <div>
          <Input ref={inputRef} placeholder='Say something...' text='text' />
          <Button text='Submit' onClick={handleBtnClicked} />
        </div>
      </header>
    </div>
  )
}

export default App
