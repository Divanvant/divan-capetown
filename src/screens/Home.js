import lostInSpace from '../assets/lost-in-space.svg'
import { Link } from 'react-router-dom'

const Home = () => (
  <div style={styles.container}>
    <div style={styles.text}>
      <h1>
        Hi,
        <br />
        I'm Divan
        <br />a Full stack Developer
      </h1>
      <h2 style={{ fontFamily: 'Righteous, monospace' }}>
        With a passion for building UIs and APIs
      </h2>
      <div
        style={{
          display: 'flex',
          marginTop: '1.25rem',
          fontSize: '1.25rem',
        }}
      >
        <a
          className="button"
          href="mailto:divanvant+enquiry@gmail.com"
          style={{ marginRight: '1.5rem' }}
        >
          Get in touch
        </a>
        <Link className="button" to="/cv">
          View my CV
        </Link>
      </div>
    </div>
    <div className="image">
      <img src={lostInSpace} alt="user lost in space" />
    </div>
  </div>
)

export default Home

const styles = {
  container: {
    overflow: 'hidden',
    height: 'calc(100vh - 10rem)',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  text: {
    marginBottom: '5rem',
    width: '30rem',
  },
}
