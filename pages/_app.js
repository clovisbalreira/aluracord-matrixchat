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
  
  export default function CustomApp({ Component, pageProps }) {
    console.log('Roda em todas as páginas!');
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
  }