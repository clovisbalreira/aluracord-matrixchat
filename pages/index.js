import { useState } from 'react';
import { useRouter } from 'next/router'
import Tit from '../src/components/titulo'

function HomePage(){
  const [username, setUserName] = useState('clovisbalreira')
  const roteamento = useRouter();

  return (
    <>
      <div className='divLogin'>
        <form onSubmit={function (infosdoevento){
          infosdoevento.preventDefault()
          roteamento.push(`/chat?username=${username}`)
        }}>
          <Tit tag="h1" texto="Bem Vindo de Volta"></Tit>
          <h2>Discord - Alura Matrix</h2>
          <input 
            type="text" 
            value={username} 
            onChange={function (event) {
              const valor = event.target.value
              setUserName(valor)
            }} 
          />
          <button>Enviar</button>
        </form>
        <div className="divImg">
          <img src={`https://github.com/${username}.png`}>
          </img>
          <span>{username}</span>
        </div>        
      </div>
    </>
  )
}
export default HomePage