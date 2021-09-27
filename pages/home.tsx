/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Sidearea from '../components/Sidearea'
import Welcome from '../components/Welcome'
import { supabase } from '../lib/supabaseClient'
import Chatarea from '../components/Chatarea';
import { useStore, Chat } from '../lib/chatStore'

function Home({userChats}: {userChats: Chat[]}) {

  const currentChat = useStore(state => state.currentChat);
    
    return (
        
            <div style={{maxHeight: '100vh', overflow:'hidden'}}>
                <Grid container direction="row">
                    <Grid item xs={4}>
            <Sidearea userChats={ userChats} />
                    </Grid>
                    <Grid item xs={8}>
                       {currentChat ? <Chatarea /> : <Welcome/>}
                    </Grid>
                </Grid>
            </div> 
        
    )
}

export default Home

 export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
    
    //Get all chats 
  
   let { data: chats} = await  supabase.from('chats').select('*');
       
  return {
    props: {
      protected: true,
      userChats: chats
    },
    revalidate: 10
  }
} 

