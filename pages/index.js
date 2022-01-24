//import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'

function GlobalStyle(){
    return(
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }
            body {
                font-family: 'Open Sans', sans-serif;
                background-image : url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)  
              }
            /* App fit Height */ 
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
            /* ./App fit Height */
            .divLogin{
              background-color: ${appConfig.theme.colors.neutrals[700]};
              display: flex;
              flex-direction: row;
              align-items:center;
              justify-content: space-between;
              width:100%;
              max-width: 700px;
              border-radius: 5px;
              height:300px;
              padding: auto; 
              margin: auto;
              box-shadow: 0 2px 10px 0 white
            }
            form{
              display: flex; 
              flex-direction: column; 
              align-items:center; 
              justify-content: center;
              width: 300px;
              text-align: center; 
              margin: auto
            }
            .divImg{
              //display: flex;
              //flexDirection: column;
              align-items: center;
              max-width: 200px;
              margin: auto;
              padding: 16px;
              background-color: ${appConfig.theme.colors.neutrals[800]};
              border: 1px solid;
              border-color: ${appConfig.theme.colors.neutrals[999]};
              border-radius: 10px;
              flex: 1;
              min-height: 240px;
            }
            h2{
              margin-bottom:10px
            }
            img{
              width:150px;
              margin-left:5%;
              margin-bottom: 10px;
              border-radius:50%
            }
            span{
              font-size:18px;
              color: ${appConfig.theme.colors.neutrals[200]},
              background-color: ${appConfig.theme.colors.neutrals[900]},
              padding: 3px 10px,
              border-radius: 1000px
            margin:auto;
            }
            input{
              width:100%;
              font-size:20px;
              margin-bottom:10px
            }
            button{
              width:100%;
              padding:5px;
              font-size:20px;
              border: none;
              background: ${appConfig.theme.colors.primary['900']}
            }
        `}
        </style>
    )
}

function Titulo(props){
    const Tag = props.tag || h1;
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color:${appConfig.theme.colors.neutrals[100]};
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom:10px
                  }
              `}
            </style>
        </>
    )
}

function HomePage(){
    const username = 'clovisbalreira';
    return (
        <>
          <GlobalStyle/>
          <div className='divLogin'>
            <form action="">
              <Titulo tag="h1">Bem Vindo de Volta</Titulo>
              <h2>Discord - Alura Matrix</h2>
              <input type='text'></input>
              <button>Enviar</button>
            </form>
            <div class="divImg">
              <img src={`https://github.com/${username}.png`}>
              </img>
              <span>{username}</span>
            </div>        
          </div>
        </>
    )
}
export default HomePage

/*export default function PaginaInicial() {
  const username = 'peas';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário *//*}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário *//*}


          {/* Photo Area *//*}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area *//*}
        </Box>
      </Box>
    </>
  );
}*/