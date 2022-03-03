import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, WhiteBoard } from './components'

import './index.scss'

const App = () => (
  <table>
    <thead>
      <tr className='border'>
        <th className='border'>Components</th>
        <th>Props</th>
      </tr>
    </thead>
    <tbody>
      <tr className='border'>
        <td className='border'>
          <Button text='Button' />
        </td>
        <td>
          <p>text: string</p>
          <p>onClick: function</p>
        </td>
      </tr>
      <tr className='border'>
        <td className='border'>
          <Input type='text' placeholder='Input here...' />
        </td>
        <td>
          <p>type: string ['text', 'password', 'number', 'email']</p>
          <p>placeholder: string</p>
        </td>
      </tr>
      <tr className='border'>
        <td className='border'>
          <WhiteBoard data={['content1', 'content2']} />
        </td>
        <td>
          <p>{'data: Array<String>'}</p>
        </td>
      </tr>
    </tbody>
  </table>
)
ReactDOM.render(<App />, document.getElementById('app'))
