//import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import Header from '../component/header';
import MessageList from '../component/MensageList';

const SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk'

const SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co'

const supabaseClient = createClient(SUPA_BASE_URL,SUPA_BASE_KEY)

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagens, setListaDeMensagens] = useState([]);
    const roteamento = useRouter()
    
    function selectSupaBase(){
        supabaseClient.from('mensagem').select('*').order('id', { ascending: false }).then(({data}) => { 
            setListaDeMensagens(data)
            console.log("dados",data)
        });
    }

    useEffect(() => {
        selectSupaBase()
    },[])

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            //id: listaDeMensagens.length + 1,
            de: 'clovisbalreira',
            texto: novaMensagem,
        };

        supabaseClient
            .from('mensagem')
            .insert([
                mensagem
            ])
            .then(({data}) => {
                console.log(data)
                setListaDeMensagens([
                    data[0],
                    ...listaDeMensagens,
                ]
            );
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
                    </form>
                </div>
            </div>
        </div>
        )
}