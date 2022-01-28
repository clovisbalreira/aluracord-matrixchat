import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import Header from '../src/components/header';
import MessageList from '../src/components/MensageList';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker'

const SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk'

const SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co'

const supabaseClient = createClient(SUPA_BASE_URL,SUPA_BASE_KEY)

function escutaMensagensEmTempoReal(adicionaMensagem) {
    return supabaseClient
      .from('mensagem')
      .on('INSERT', (respostaLive) => {
        adicionaMensagem(respostaLive.new);
      })
      .subscribe();
  }

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagens, setListaDeMensagens] = useState([]);
    const roteamento = useRouter()
    const usuarioLogado = roteamento.query.username
    
    function selectSupaBase(){
        supabaseClient
            .from('mensagem')
            .select('*')
            .order('id', { ascending:false})
            .then(({data}) => { 
                setListaDeMensagens(data)
        });
    }

    useEffect(() => {
        selectSupaBase()
        escutaMensagensEmTempoReal((novaMensagem) => {
            console.log('Criando nova mensagem')
            setListaDeMensagens((valorAtual) => {
                return [
                    novaMensagem,
                    ...valorAtual,
                ]
            });
        })
    },[])

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            de: usuarioLogado,
            texto: novaMensagem,
        };

        supabaseClient
            .from('mensagem')
            .insert([
                mensagem
            ])
            .then(({data}) => {
                console.log(data)
        })
        setMensagem('');
    }

    return (
        <div className='divChat'>
            <div className='divBoxBackground'>
                <Header roteamento={roteamento}/>
                <div className='divBoxChat'>   
                    <MessageList mensagens={listaDeMensagens}/>
                    <form>
                        <textarea cols="30" rows="10"
                        placeholder="Insira sua mensagem aqui..."
                        value={mensagem}
                        onChange={(event) => {
                            const valor = event.target.value;
                            setMensagem(valor);
                        }}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                handleNovaMensagem(mensagem);
                            }
                        }}>
                        </textarea>
                        <ButtonSendSticker onStickerClick={(sticker) => {
                            console.log('Usando o component salvar esse dado no banco',sticker)
                            handleNovaMensagem(`sticker:${sticker}`)
                        }}/>
                    </form>
                </div>
            </div>
        </div>
        )
}