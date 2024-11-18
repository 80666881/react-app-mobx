import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {store} from './store/doubler'
import { observer } from "mobx-react-lite" // Or "mobx-react".
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <button onClick={() => store.increment()}>
          count is {store.double}
        </button>

    </>
  )
}
export default observer(App)
