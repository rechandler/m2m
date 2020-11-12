import AppBar from 'src/components/AppBar'
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar></AppBar>

      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  )
}

export default MainLayout
