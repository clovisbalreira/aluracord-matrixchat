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

            /* arquivo index */
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
            
            .divLogin h2{
              margin-bottom:10px
            }
            
            .divLogin form{
              display: flex; 
              flex-direction: column; 
              align-items:center; 
              justify-content: center;
              width: 300px;
              text-align: center; 
              margin: auto
            }
            
            .divLogin input{
              width:100%;
              font-size:20px;
              margin-bottom:10px
            }
            
            .divLogin button{
              width:100%;
              padding:5px;
              font-size:20px;
              border: none;
              background: ${appConfig.theme.colors.primary['900']}
            }
            
            .divImg{
              align-items: center;
              max-width: 200px;
              margin: auto;
              //padding: 16px;
              background-color: ${appConfig.theme.colors.neutrals[800]};
              border: 1px solid;
              border-color: ${appConfig.theme.colors.neutrals[999]};
              border-radius: 10px;
              flex: 1;
              min-height: 240px
            }
            
            .divImg img{
              width:150px;
              margin: 16px 10%;
              border-radius:50%
            }
            
            .divImg span{
              font-size:18px;
              color: ${appConfig.theme.colors.neutrals[200]};
              margin: 5%
            }
            
            /* arquivo chat */
            .divChat{
              display: flex; 
              align-items: center; 
              justify-content: center;
              background-color: ${appConfig.theme.colors.primary[500]};
              background-image: url(https:virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg);
              background-repeat: no-repeat; 
              background-size: cover; 
              background-blend-mode: multiply;
              color: ${appConfig.theme.colors.neutrals['000']}
            }

            .divBoxBackground{
              display: flex;
              flex-direction: column;
              flex: 1;
              box-shadow: '0 2px 10px 0 rgb(0 0 0 / 20%)';
              border-radius: 5px;
              background-color: ${appConfig.theme.colors.neutrals[700]};
              height: auto;
              max-width: 95%;
              //max-height: 95vh;
              margin: 20px;
              padding: 32px
            }  
            
            .divBoxBackground header{
              width: 100%; 
              margin-bottom: 16px; 
              display: flex; 
              align-items: center; 
              justify-content: space-between
            }  
            
            .divBoxBackground header button{
              width: 10%;
              padding: 5px;
              font-size: 15px;
              border: none;
              background: ${appConfig.theme.colors.primary['900']}
            }  

            .divBoxChat{
              position: relative;
              display: flex;
              flex: 1;
              height: auto;
              background-color: ${appConfig.theme.colors.neutrals[600]};
              flex-direction: column;
              border-radius: 5px;
              padding: 16px
            }
        
            .divBoxChat ul{
              background-color:${appConfig.theme.colors.neutrals['600']};
              width:100%
              overflow: scroll;
              display: flex;
              flex-direction: column-reverse;
              align-items: top; 
              justify-content: space-between;            
              flex: 1;
              color: ${appConfig.theme.colors.neutrals["999"]};
              margin-bottom: 16px
            }    
             
            .divBoxChat ul li{
              padding:10px;
              border-radius: 5px;
              padding: 6px;
              padding-bottom: 12px
            }
            
            .divBoxChat ul li:hover{
              backgroundColor: ${appConfig.theme.colors.neutrals[700]};
            }
            
            .divBoxChat ul li img{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: inline-block;
                margin-right: 18px;
            }
            
            .divBoxChat ul li span{
              font-size: 10px;
              margin-left: 10px;
              color: ${appConfig.theme.colors.neutrals[300]}
            }

            .divBoxChat form{
              display: flex;
              align-items: center;
              width:100%;
            }

            .divBoxChat form textarea{
              background-color: ${appConfig.theme.colors.neutrals[800]};
              width:100%;
              margin-top:10px;
              padding:10px
            }

            /* page ButtonSendSticker */
            .divSticker{
              position: 'relative';
            }

            .divSticker Button{
              border-radius: 50%;
              padding: 0 3px 0 0;
              min-width: 50px;
              min-height: 50px;
              font-size: 20px;
              margin-left: 20px;
              margin-bottom: 8px;
              line-height: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${appConfig.theme.colors.neutrals[300]},
              filter: isOpen ? 'grayscale(0)' : 'grayscale(1)    
            }

            .divSticker Button:hover{
              filter: grayscale(0)
            }

            .divIsOpen{
              display: flex;
              flex-direction: column;
              border-radius: 5px;
              position: absolute;
              background-color: ${appConfig.theme.colors.neutrals[800]};
              width: 200px;
              height: 150px;
              right: 0px;
              top: 0px;
              padding: 16px;
              box-shadow: rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px,
            }

            .divIsOpen ul{
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              flex: 1;
              padding-top: 16px;
              overflow: scroll
            }

            .divIsOpen ul li{
              width: 10%;
              border-radius: 5px;
              padding: 10px 20px 20px;
            }

            .divIsOpen ul li:focus{
              backgroundColor: ${appConfig.theme.colors.neutrals[600]},
            }

            .divIsOpen ul li:hover{
              backgroundColor: ${appConfig.theme.colors.neutrals[600]},
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