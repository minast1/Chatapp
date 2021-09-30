
import { Container } from '@material-ui/core';
import Auth from '../components/Auth';


export default function Home() {
  
  return (
  
      <Container maxWidth={false} disableGutters>
          <Auth />
      </Container>

  )
}
