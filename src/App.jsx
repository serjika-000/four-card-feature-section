import { useState } from 'react'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main' >
         <div className='header'>
         <h1 className='h1'>Reliable, efficient delivery
         <span className='h1-span'>Powered by Technology</span>
         </h1>
         <p className='desc'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className='page2'>
        <div>
          <div className='box b1'>
            <h2 className='title'>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img className='img' src="/images/icon-supervisor.svg" alt="" />
          </div>
        </div>

        <div>
          <div className='box b2'>
            <h2 className='title'>Team Builder</h2>
            <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img className='img' src="/images/icon-team-builder.svg" alt="" />
          
          </div>

          <div className='box b4'>
            <h2 className='title'>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img className='img' src="/images/icon-karma.svg" alt="" />
          </div>
        </div>

        <div>
          <div className='box b3'>
            <h2 className='title'>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img className='img' src="/images/icon-calculator.svg" alt="" />
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default App
