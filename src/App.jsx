import { useState } from 'react'
import './App.css'

const teamMembers = [
  {
    name: 'Aditya Pradhan',
    role: 'Full Stack Developer',
    email: 'adityapradhan8867@gmail.com',
    image: '/Person1.jpeg',
  },
  {
    name: 'Darius ColeAdekogbe Gideon Nifemi ',
    role: 'FRONTEND DEVELOPER',
    email: 'adekogbegideon6@gmail.com ',
    image: '/Person2.jpeg',
  },
  {
    name: 'Odunayo Joseph Babatunde ',
    role: 'Lead engineer ',
    email: 'odunayojoseph130@gmail.com',
    image: '/Person3.webp',
  },
  {
    name: 'ALEX DIAMOND ',
    role: 'Supervisor',
    email: 'Realcardic1@gmail.com',
    image: '/Person4.png',
  },
  {
    name: 'Elio',
    role: 'ROLE ADVISOR ',
    email: 'Realcardic1@gmail.com',
    image: '/Person5.webp',
  }
]

const roleGroups = [
  {
    title: 'Leadership',
    roles: ['Founder & CEO', 'CTO', 'COO', 'Advisor'],
  },
  {
    title: 'Engineering',
    roles: [
      'Lead Full Stack Developer',
      'Backend Developer',
      'Frontend Developer',
      'AI Engineer',
      'Blockchain Developer',
      'UI/UX Designer',
      'QA Engineer',
    ],
  },
  {
    title: 'Product',
    roles: ['Product Manager', 'Product Designer'],
  },
  {
    title: 'Community',
    roles: ['Head of Community', 'Community Supervisors', 'Community Moderators', 'Ambassadors'],
  },
  {
    title: 'Marketing & Growth',
    roles: ['Marketing Lead', 'Graphic Designer', 'Content Creator', 'Partnerships Manager'],
  },
  {
    title: 'Research',
    roles: ['Market Strategist', 'Research Analyst'],
  },
  {
    title: 'Support',
    roles: ['Customer Support Lead', 'Support Specialists'],
  },
  {
    title: 'Finance & Legal',
    roles: ['Finance Manager', 'Legal Advisor', 'Compliance Advisor'],
  },
  {
    title: 'Advisory Board',
    roles: ['Technical Advisor', 'Business Advisor', 'Financial Advisor'],
  },
]

const highlights = [
  '24/7 product support',
  'Global community-led growth',
  'Design-forward engineering',
]

function App() {
  const [activePage, setActivePage] = useState('home')
  const [isDark, setIsDark] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email, message } = formData
    const subject = encodeURIComponent(`New message from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message || 'No message provided.'}`)
    const mailtoLink = `mailto:hello@caedicx.com?subject=${subject}&body=${body}`

    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink
    }

    setFeedback('Your email app should open with a prefilled message. If it does not, email hello@caedicx.com directly.')
  }

  return (
    <div className={`app-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <button className="brand" onClick={() => setActivePage('home')} type="button">
          <span className="brand-mark">C</span>
          CaedicX
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('home')} type="button">
            Home
          </button>
          <button className={activePage === 'roles' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('roles')} type="button">
            Role
          </button>
          <button className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('contact')} type="button">
            Contact
          </button>
        </nav>

        <button className="theme-toggle" onClick={() => setIsDark((value) => !value)} type="button" aria-label="Toggle theme">
          {isDark ? '☀' : '🌙'}
        </button>
      </header>

      <main className="main-content">
        {activePage === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">Visionary team • built for bold ideas</p>
                <h1>Where ambition meets execution.</h1>
                <p className="hero-text">
                  CaedicX brings together product, engineering, and community expertise to shape unforgettable digital experiences.
                </p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setActivePage('roles')} type="button">
                    Explore Roles
                  </button>
                  <button className="secondary-btn" onClick={() => setActivePage('contact')} type="button">
                    Let&apos;s Connect
                  </button>
                </div>
              </div>

              <div className="hero-panel">
                <div className="stat-card">
                  <p className="stat-label">Core Focus</p>
                  <ul>
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="team-section">
              <div className="section-heading">
                <p className="eyebrow">Meet the crew</p>
                <h2>Leadership that blends strategy, creativity, and technology.</h2>
              </div>

              <div className="team-grid">
                {teamMembers.map((member) => (
                  <article className="member-card" key={member.email}>
                    <img src={member.image} alt={member.name} />
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p>{member.email}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === 'roles' && (
          <section className="roles-section">
            <div className="section-heading">
              <p className="eyebrow">The structure behind the vision</p>
              <h2>Roles that power every layer of the company.</h2>
            </div>

            <div className="role-grid">
              {roleGroups.map((group) => (
                <article className="role-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="contact-section">
            <div className="section-heading">
              <p className="eyebrow">Say hello</p>
              <h2>Let&apos;s build something memorable together.</h2>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Reach out</h3>
                <p>hello@caedicx.com</p>
                <p>+1 (555) 014-2048</p>
                <p>Remote • Global • Always connected</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  />
                </label>
                <label>
                  Message
                  <textarea
                    rows="4"
                    placeholder="Tell us about your idea"
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  />
                </label>
                <button className="primary-btn" type="submit">Send Message</button>
                {feedback ? <p className="feedback-text">{feedback}</p> : null}
              </form>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
