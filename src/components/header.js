export default function Header(props) {
    return (
        <header>
            <p>Chat</p>
            <button onClick={function (infosdoevento){
                infosdoevento.preventDefault()
                props.roteamento.push('/')
                }}>Logout
            </button>
        </header>
    )
}

