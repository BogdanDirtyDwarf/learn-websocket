import { useState, useEffect } from 'react'
import { socket } from './socket/socket'


function App() {
  useEffect(() => {
    socket.emit('chat', {message:'1234'})
    socket.on('chat', (e)=>{
      console.log(e);
    })

  },[])
  return (
    <div className="App">
      
    </div>
  )
}

export default App
