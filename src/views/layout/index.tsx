import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.scss'
import Aside from './aside'
import axios from 'axios'
// import  { URL } from '../../util/http'

// console.log(URL)

const URl: string = import.meta.env.VITE_APP_BASE_URL

export default function Layout() {
  const dlz = () => {
    axios.get(URl).then(
      (res) => {
        console.log(res)
      }
    )
  }
  return (
    <section id='container'>
        <aside>
            <Aside></Aside>
        </aside>
        <section>
            <header>header</header>
            <div>
              <button onClick={ dlz }>点我发起请求</button>
            </div>
            <main><Outlet></Outlet></main>
        </section>
    </section>
  )
}
