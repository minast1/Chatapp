/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Sidearea from '../components/Sidearea'
import Welcome from '../components/Welcome'
import { supabase } from '../lib/supabaseClient'
import { Chat } from '../lib/constants'
import Chatarea from '../components/Chatarea';
import { useStore } from '../lib/chatStore'

function Home() {

  const currentChat = useStore(state => state.currentChat);
    
    return (
        
            <div style={{maxHeight: '100vh', overflow:'hidden'}}>
                <Grid container direction="row">
                    <Grid item xs={4}>
                     <Sidearea />
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
    
    //Get public user and their chats
   /*  */
     
  return {
    props: {
      protected: true,
    },
    //revalidate: 5
  }
} 

