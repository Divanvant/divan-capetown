import lostInSpace from '../assets/lost-in-space.svg'

const Home = () => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="text">
      <h1>
        Hi,
        <br />
        I'm Divan,
        <br />
        Full stack Developer
      </h1>
      <a
        href="mailto:divanvant+enquiry@gmail.com"
        style={{ 'text-decoration': 'underline' }}
      >
        Get in touch
      </a>
    </div>
    <div className="image">
      <img src={lostInSpace} alt="user lost in space" />
    </div>
  </div>
)

export default Home
