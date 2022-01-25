import appConfig from '../config.json'
export default function Titulo(props){
    const Tag = props.tag || h1;
    return(
        <>
            <Tag>{props.texto}</Tag>
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
