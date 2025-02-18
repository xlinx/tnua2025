import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Image } from "antd";

import { ReactP5Wrapper } from "@p5-wrapper/react";
function App() {
  const [count, setCount] = useState(0)


    function sketch(p5) {
        p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

        p5.draw = () => {
            p5.background(250);
            p5.normalMaterial();
            p5.push();
            p5.rotateZ(p5.frameCount * 0.01);
            p5.rotateX(p5.frameCount * 0.01);
            p5.rotateY(p5.frameCount * 0.01);
            p5.plane(100);
            p5.pop();
        };
    }
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
      <h1>TNUA</h1>
        <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <ReactP5Wrapper sketch={sketch} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
