export default function MessageList(props) {
    return (
        <>
            <ul>
                <li>
                    {props.mensagens.map((mensagem) => {
                        return (
                            <>
                            {console.log(props.mensagens)}
                                <li key={mensagem.id}>
                                    <img src={`https://github.com/${mensagem.de}.png`}/>
                                    <strong>{mensagem.de}</strong>
                                    <span>{(new Date().toLocaleDateString())}</span>
                                </li>
                                <li>
                                    {mensagem.texto.startsWith('sticker:') 
                                    ? (
                                        <img src={mensagem.texto.replace('sticker:', '')}/>
                                    ) : (
                                        mensagem.texto
                                    )}
                                </li>
                            </>
                        )
                    })
                }
                </li>
            </ul>
            <p>Mensagens</p>
        </>
   )
}