import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
      <Link to={routes.home()}>Home </Link>
    </MainLayout>
  )
}

export default AboutPage
