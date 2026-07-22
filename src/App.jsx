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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)



  return (
    <div className={`app-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <button className="brand" onClick={() => setActivePage('home')} type="button">
          <span className="brand-mark">C</span>
          CardicX
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('home')} type="button">
            Home
          </button>
          <button className={activePage === 'roles' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('roles')} type="button">
            Role
          </button>
        </nav>

        <button className="mobile-nav-button" onClick={() => setIsSidebarOpen(true)} aria-label="Open navigation">
          ☰
        </button>

        <button className="theme-toggle" onClick={() => setIsDark((value) => !value)} type="button" aria-label="Toggle theme">
          {isDark ? '☀' : '🌙'}
        </button>

        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} aria-hidden={!isSidebarOpen}>
          <div className="sidebar-header">
            <button className="brand" onClick={() => { setActivePage('home'); setIsSidebarOpen(false); }} type="button">
              <span className="brand-mark">C</span>
              CardicX
            </button>
            <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)} aria-label="Close navigation">✕</button>
          </div>
          <nav className="sidebar-links">
            <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => { setActivePage('home'); setIsSidebarOpen(false); }} type="button">
              Home
            </button>
            <button className={activePage === 'roles' ? 'nav-link active' : 'nav-link'} onClick={() => { setActivePage('roles'); setIsSidebarOpen(false); }} type="button">
              Role
            </button>
            <button className="nav-link" onClick={() => { window.location.href = 'mailto:hello@cardicx.com'; setIsSidebarOpen(false); }} type="button">
              Contact
            </button>
          </nav>
        </aside>
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
                    <button className="secondary-btn" onClick={() => { window.location.href = 'mailto:hello@cardicx.com' }} type="button">
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

        
      </main>
    </div>
  )
}

export default App
