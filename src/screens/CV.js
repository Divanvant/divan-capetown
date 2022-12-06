import React, { useState } from 'react'

import avatar from '../assets/avatar.jpg'

const SectionHeading = ({ text, colors }) => {
  return (
    <div>
      <h3
        style={{
          ...styles.sectionHeading,
          color: colors[0],
          borderColor: colors[0],
        }}
      >
        {text}
      </h3>
    </div>
  )
}

const IconText = ({ iconName, flag, text }) => {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <span style={styles.smallFlagIconWrapper}>
        <i class={iconName}></i>
        {flag && flag !== '' ? (
          <span style={styles.smallFlagIcon}>{flag}</span>
        ) : null}
      </span>
      {text && text !== '' ? <span>{text}</span> : null}
    </div>
  )
}

const CV = () => {
  const [colors, setColors] = useState(['#2409f6', '#ffffff'])
  const [isVerifiedUser, setIsVerifiedUser] = useState(false)
  const tools = [
    'HTML',
    'CSS',
    'SCSS',
    'Javascript',
    'jQuery',
    'Vue',
    'React',
    'React Native',
    'Materialize',
    'Bootstrap',
    'Foundation',
    'WordPress',
    'PHP',
    'CircleCI',
    'GitHub',
    'AWS',
    'Laravel',
    'Ramda',
    'Design systems',
    'Gitlab',
    'Sentry',
    'Axon',
    'DDD',
    'Kafka',
    'Kubernetes',
  ]

  const nlNumber = '+31 ****'
  const saNumber = '+27 ****'
  const emailAddress = '****@*****.com'
  const dob = '****'
  const fullName = '****'

  const details = [
    { label: 'Full name', detail: fullName },
    { label: 'Nick name', detail: 'Divan' },
    { label: 'Languages', detail: ' English and Afrikaans' },
  ]

  return (
    <div>
      {!isVerifiedUser ? (
        <>
          <div
            className="hidden-for-print"
            style={{ ...styles.container, ...styles.disclaimer }}
          >
            <div style={{ padding: '2rem' }}>
              <h3>Sensitive information disclaimer</h3>
              <p>
                I'm hesitant to put some of my personal information online for
                any persons/bots to find. This means I've hidden some of my
                personal information on this page
              </p>
              <p>
                If you'd like a copy of my CV with all my information,
                <br /> please click below to send me an email. I will reply with
                a PDF copy for your perusal
              </p>
              <a
                class="button"
                href="mailto:divanvant+cvrequest@gmail.com?subject=CV request"
              >
                Request CV
              </a>
            </div>
          </div>
        </>
      ) : null}
      <div style={styles.container}>
        <div
          style={{
            backgroundColor: colors[0],
            color: colors[1],
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          <div style={{ ...styles.column, width: '40%' }}>
            <div style={styles.avatarWrapper}>
              <img src={avatar} alt="Divan van Tonder" style={styles.avatar} />
            </div>
          </div>
          <div style={{ ...styles.column, paddingLeft: '2rem' }}>
            <h1 style={{ position: 'absolute', opacity: 0 }}>
              Curriculum Vitae of Divan van Tonder
            </h1>
            <h2 style={styles.name}>
              Divan
              <br />
              van Tonder
            </h2>
            <h3 style={styles.title}>
              Full Stack Engineer{' '}
              <span style={{ fontSize: '0.66em', opacity: '66%' }}>
                (Front End First)
              </span>
            </h3>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              ...styles.column,
              width: '40%',
              padding: '2rem 2rem 0',
              marginTop: '2.5rem',
            }}
          >
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconText iconName="fa-solid fa-earth-europe" text="Leiden" />
                <IconText
                  iconName="fa-solid fa-earth-africa"
                  text="Cape Town"
                />
              </div>
              <IconText iconName="fa-solid fa-calendar-days" text={dob} />
              <IconText
                iconName="fa-solid fa-phone"
                flag="🇳🇱"
                text={nlNumber}
              />
              <IconText
                iconName="fa-solid fa-phone"
                flag="🇿🇦"
                text={saNumber}
              />
              <IconText iconName="fa-solid fa-envelope" text={emailAddress} />
              <IconText
                iconName="fa-solid fa-globe"
                text="divan.vantonder.io"
              />
            </div>

            <SectionHeading text="Proficiencies" colors={colors} />

            {tools.map((tool) => (
              <span
                style={{
                  ...styles.tag,
                  backgroundColor: `${colors[0]}ca`,
                  color: colors[1],
                }}
                key={tool}
              >
                {tool}
              </span>
            ))}

            <SectionHeading text="Work Experience" colors={colors} />

            <p>
              From <strong>February 2016 to December 2018</strong> I worked at
              <br />
              <strong>Lightswitch</strong> as a <strong>Web Developer</strong>
            </p>
            <p>
              From <strong>January 2019 to March 2022</strong> I worked at
              <br />
              <strong>Nona Digital</strong> as a <strong>UI Developer</strong>
            </p>
            <p>
              Since <strong>March 2022</strong> I've worked at
              <br />
              <strong>Yoco Technologies PTY Ltd</strong> as a{' '}
              <strong>Full Stack Engineer</strong>
            </p>
          </div>
          <div style={{ ...styles.column, padding: '2rem 2rem 2rem 0' }}>
            {details.map((detail) => (
              <div
                key={detail.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <div>{detail.label}</div>
                <div>{detail.detail}</div>
              </div>
            ))}
            <SectionHeading text="About Me" colors={colors} />
            <p>
              Throughout my career I have worked on always writing better and
              more legible code with every endeavor that I undertake. Always
              aiming to deliver bespoke and responsive websites, slick and
              user-friendly apps or intuitive api's for developers to integrate
              with. I've developed a proficient Front-End skill-set as well as a
              dependable backend for frontend knowledge base.
            </p>
            <p>
              I've worked on multiple Web Front Ends using Vue and React with
              various other tools for Server Side Rendering and State
              Management. I've worked on CI/CD pipelines with various different
              deployment targets such as AWS, Netlify and Heroku. I've worked on
              WordPress sites in various capacities including but not limited to
              WordPress Theming, WordPress as a Headless CMS and plugin
              development.
            </p>
            <p>
              I've also worked on React Native projects which has allowed me to
              develop apps for both android and IOS. I continue to stay up to
              date with as many of the latest developments in web frameworks.
              I've recently built a frontend using Vue 3, Vite as a build tool
              and Tailwind as a CSS Framework to expand my knowledge and stay up
              to date. My current role has also included learning about Domain
              Driven Design and an Event Driven architecture using Axon and
              Kafka.
            </p>
          </div>
        </div>
      </div>
      {isVerifiedUser ? (
        <div
          className="hidden-for-print"
          style={{
            ...styles.container,
            marginTop: '2rem',
          }}
        >
          <button onClick={() => window.print()}>Print</button>
        </div>
      ) : null}
      <div className="hidden-for-print" style={{ height: '4rem' }}></div>
    </div>
  )
}

const styles = {
  disclaimer: {
    margin: '1rem auto',
    maxWidth: '980px',
    textAlign: 'center',
    boxShadow: '2px 2px 10px #00000040',
    borderRadius: '4px',
    color: '#f96552',
    fontFamily: 'Poppins, Arial',
    fontWeight: '400',
    textShadow: '1px 1px 0px #00000010',
  },
  container: {
    margin: '0 auto',
    maxWidth: '980px',
    fontFamily: 'Poppins, Arial',
    fontWeight: '400',
  },
  column: {
    width: '50%',
  },
  avatarWrapper: {
    position: 'relative',
    textAlign: 'center',
  },
  avatar: {
    position: 'absolute',
    top: '50%',
    left: '2rem',
    transform: 'translateY(20%)',
    width: '13rem',
    borderRadius: '50%',
    margin: '0 auto',
  },
  name: {
    fontSize: '2.75rem',
    lineHeight: 1.1,
    textTransform: 'uppercase',
    marginBottom: 0,
    fontFamily: 'Poppins, Arial',
    fontWeight: '600',
  },
  title: {
    fontFamily: 'Poppins, Arial',
    fontWeight: '200',
  },
  sectionHeading: {
    display: 'inline-block',
    paddingRight: '1.5rem',
    paddingBottom: '0.75rem',
    borderBottom: '2px solid #222',
  },
  tag: {
    display: 'inline-block',
    lineHeight: 1.1,
    padding: '4px 0.5rem',
    borderRadius: '0.25rem',
    marginRight: '0.5rem',
    marginBottom: '0.25rem',
  },
  smallFlagIconWrapper: {
    position: 'relative',
    marginRight: '0.75rem',
  },
  smallFlagIcon: {
    position: 'absolute',
    fontSize: '9px',
    right: '-2px',
    top: '-1px',
  },
}

export default CV
