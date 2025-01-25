import React from "react"
import FloatingShape from "./components/FloatingShape"
import TODO from "./components/TODO"
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-sky-400 to-cyan-900 relative overflow-hidden">
        <FloatingShape color='bg-blue-300' size='w-64 h-64' top='-5%' left='10%' delay={0}></FloatingShape>
        <FloatingShape color='bg-cyan-300' size='w-64 h-64' top='20%' left='50%' delay={2}></FloatingShape>
        <FloatingShape color='bg-blue-300' size='w-64 h-64' top='70%' left='80%' delay={5}></FloatingShape>
        <TODO />
        <Toaster
          position="top-right"
          />
      </div>
          <Footer/>
    </>
  )
}

export default App
