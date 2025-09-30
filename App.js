import React, { useState } from 'react';

// --- Global Constants and Utilities ---
const BRAND_COLOR_TEAL = '#65A3C7';
const BRAND_COLOR_ORANGE = '#E69138';

// --- Icon Definitions (Lucide SVG Replacements) ---
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>);
const PlayIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>);
const MailIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const PhoneIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.6-5.6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3c.45 0 .91.17 1.25.46l4.42 4.86a2 2 0 0 1-.36 3.23l-3.21 1.93a.93.93 0 0 0-.12.6v.05a.93.93 0 0 0 .12.6l3.21 1.93a2 2 0 0 1 .36 3.23l-4.42 4.86c-.34.29-.8.46-1.25.46Z"/></svg>);
const MapPinIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
const LinkedinIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6v10h4V10a2 2 0 0 1 2-2 2 2 0 0 1 2 2v8h4zM4 18H2v-7h2zM3 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>);
const FacebookIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const YoutubeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15 15 12 10 9v6z"/><circle cx="12" cy="12" r="10"/></svg>);


// --- Shared Components ---

// Recreates the wave and footer design from the contact screenshot
const Footer = ({ setPage }) => (
  <footer className="relative bg-white pt-24 mt-20">
    {/* Large Wave SVG - Styled to match the screenshot background */}
    <div className="absolute top-0 left-0 w-full h-24 overflow-hidden transform translate-y-[-100%] z-10">
      <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ background: BRAND_COLOR_TEAL }}>
        <path fill="#ffffff" fillOpacity="1" d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,80C840,64,960,32,1080,21.3C1200,11,1320,21,1380,26.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
      </svg>
    </div>
    
    <div className="bg-white" style={{ background: BRAND_COLOR_TEAL }}>
      <div className="max-w-7xl mx-auto p-8 text-white z-20 relative">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          
          {/* Logo and Socials */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold">Luca<span className="font-normal text-lg">.com</span></h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
              <a href="https://linkedin.com" target="_blank" className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
              <a href="https://youtube.com" target="_blank" className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <p className="text-sm cursor-pointer hover:underline" onClick={() => setPage('About')}>More About Leslie</p>
            <p className="text-sm cursor-pointer hover:underline" onClick={() => setPage('Series')}>Watch Luca's Leadership Minis &rarr; Season 1</p>
          </div>

          {/* Get in Touch */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-2">Get in Touch</h3>
            <div className="flex items-center space-x-2 text-sm">
              <MailIcon className="w-5 h-5"/>
              <span>leslie@lesliemartinich.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <PhoneIcon className="w-5 h-5"/>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPinIcon className="w-5 h-5"/>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-4 text-center text-xs text-white opacity-80 border-t border-white border-opacity-30 mt-4">
        &copy; 2025 Luca. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Component: Header/Navigation ---

const Header = ({ setPage, toggleSidebar }) => {
  const NavLink = ({ text, pageName }) => (
    <button 
      onClick={() => setPage(pageName)}
      className="text-gray-700 hover:text-indigo-600 font-medium transition-colors p-2"
    >
      {text}
    </button>
  );

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <button onClick={() => setPage('Home')} className="text-2xl font-bold text-gray-900">
          Luca<span className="text-sm font-normal">.com</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavLink text="Series" pageName="Series" />
          <NavLink text="Crew" pageName="Crew" />
          <NavLink text="About" pageName="About" />
          <NavLink text="Book" pageName="Book" />
          <NavLink text="Author's Website" pageName="About" />
          <NavLink text="Contact Us" pageName="Contact" />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="text-gray-600 lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleSidebar}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

// --- Component: Sidebar (Mobile Menu) ---

const Sidebar = ({ isOpen, setPage, toggleSidebar }) => {
  const NavItem = ({ text, pageName }) => (
    <button 
      onClick={() => { setPage(pageName); toggleSidebar(); }}
      className="w-full text-left p-3 rounded-lg text-white hover:bg-indigo-600 transition-colors duration-200 font-medium"
    >
      {text}
    </button>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Content */}
      <div 
        className={`
          fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-2xl z-50 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-2xl font-bold text-indigo-400">Menu</h1>
          <button className="text-white hover:text-gray-400" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <NavItem text="Home" pageName="Home" />
          <NavItem text="Series" pageName="Series" />
          <NavItem text="Crew" pageName="Crew" />
          <NavItem text="About Author" pageName="About" />
          <NavItem text="The Book" pageName="Book" />
          <NavItem text="Contact" pageName="Contact" />
        </nav>
      </div>
    </>
  );
};

// --- Page Components ---

// Recreates Hero section (Screenshot 014133.jpg)
const HomePage = ({ setPage }) => (
  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div className="relative pt-20 pb-40 lg:pb-0 min-h-[60vh] flex items-center justify-between">
      {/* Background Grid Pattern (Simple CSS approximation) */}
      <div className="absolute inset-0 z-0 opacity-10 bg-repeat" style={{ backgroundImage: 'radial-gradient(circle, #00000030 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-gray-700 border border-gray-300 rounded-full bg-white shadow">The Leader Among Leaders</span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Ride the <span style={{ backgroundColor: BRAND_COLOR_ORANGE, padding: '0 4px', color: 'white' }}>Wave of</span> Leadership with <span className="text-indigo-600">Luca.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-md">
          A fun animated series for IT pros who want to lead with skill (and stoke).
        </p>
        <button 
          onClick={() => setPage('Series')}
          className="mt-8 flex items-center space-x-3 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
        >
          <div className="p-2 bg-white rounded-full text-indigo-600">
            <PlayIcon className="w-5 h-5"/>
          </div>
          <span>Watch the Series</span>
        </button>
      </div>
      
      {/* Luca Surfer Character Placeholder */}
      <div className="hidden lg:block relative z-10 w-[400px] h-[400px]">
        <img 
            src="https://placehold.co/400x400/999999/ffffff?text=Luca+Surfer" 
            alt="Luca surfing" 
            className="w-full h-full object-contain"
        />
        {/* Faux water splash detail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-12 rounded-full bg-blue-300 opacity-50 blur-md"></div>
      </div>
    </div>
  </div>
);

// Recreates The Crew Section (Screenshot 014142.png)
const CrewPage = () => {
  const crewMembers = [
    { name: 'Luca', description: 'Visionary but flawed leader learning balance.' },
    { name: 'Ray', description: 'The wise mentor showing the change curve.' },
    { name: 'Vince', description: 'The rock-solid architect who challenges authority.' },
    { name: 'Maya', description: 'The newest team member bringing fresh perspective.' },
    { name: 'Sam', description: 'The dependable engineer focusing on process.' },
    { name: 'Erin', description: 'The strategic planner managing resources efficiently.' },
  ];

  const CrewCard = ({ member }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center transition duration-300 hover:shadow-2xl">
      <div className="h-48 w-full bg-blue-200 rounded-lg flex items-center justify-center mb-4">
        <img 
            src={`https://placehold.co/150x200/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${member.name}`}
            alt={member.name} 
            className="w-3/4 h-auto object-contain rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">{member.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{member.description}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
      <h2 className="text-4xl font-extrabold text-gray-900 pt-8">
        Meet <span style={{ backgroundColor: BRAND_COLOR_ORANGE, padding: '0 4px', color: 'white' }}>Luca & his Crew.</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {crewMembers.map((member, index) => (
          <CrewCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

// Recreates Series Minutes Section (Screenshot 014149.jpg) and adds more content
const SeriesPage = () => {
  const episodes = [
    { number: '01', title: 'The First Wave', description: 'Understanding the fundamentals of team trust.' },
    { number: '02', title: 'Catching the Flow', description: 'Delegation and letting go of control.' },
    { number: '03', title: 'Wipeout Recovery', description: 'Handling failure and maintaining team morale.' },
    { number: '04', title: 'Riding Tandem', description: 'Effective collaboration across tech stacks.' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
      <h2 className="text-4xl font-extrabold text-gray-900 pt-8">
        Luca's &rarr; <span style={{ backgroundColor: BRAND_COLOR_ORANGE, padding: '0 4px', color: 'white' }}>Leadership Minutes.</span>
      </h2>

      {/* Featured Episode (Mimicking the screenshot's video frame) */}
      <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="aspect-video relative">
          <img 
            src="https://placehold.co/1200x675/A3D3E9/1F2937?text=Episode+01+-+Understanding+Trust" 
            alt="Featured Episode" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-5xl font-extrabold text-white mb-4">Episode 01</h3>
            <button className="self-start flex items-center space-x-2 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300">
              <PlayIcon className="w-5 h-5"/>
              <span>Watch Episode 01 Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Episode List */}
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-gray-800 border-b pb-2">All Episodes</h3>
        {episodes.map((ep, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-extrabold text-indigo-600">{ep.number}</span>
              <div>
                <p className="text-lg font-semibold text-gray-900">{ep.title}</p>
                <p className="text-sm text-gray-500">{ep.description}</p>
              </div>
            </div>
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center space-x-1">
              Watch <PlayIcon className="w-4 h-4"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Combines Author and Book sections (Screenshot 014200.jpg & 014217.png)
const AboutPage = ({ setPage }) => (
  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-20">
    
    {/* Author Section */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
      {/* Leslie Bio */}
      <div className="lg:w-1/2 space-y-6">
        <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full bg-white shadow">Meet the Author</span>
        <h2 className="text-5xl font-extrabold text-gray-900">
          Leslie.
        </h2>
        
        <ul className="space-y-4 text-lg text-gray-700">
          <li>🚀 **Leadership Coach + Engineer** who has guided **500+ tech teams** across **3 continents**.</li>
          <li>🎤 Inspiring keynote speaker, **trusted by global giants** like Dell and Emerson.</li>
          <li>🧀 Creator of trust-based leadership models that make teams thrive.</li>
          <li>📚 Author who turned her lessons into Luca's fun, animated adventures.</li>
        </ul>
        <button 
          onClick={() => setPage('Book')}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Learn More About the Book &rarr;
        </button>
      </div>

      {/* Leslie Photo */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="bg-white p-4 rounded-3xl shadow-2xl max-w-sm">
          <img 
            src="https://placehold.co/400x500/d8d8d8/1F2937?text=Leslie+Martinich"
            alt="Leslie Martinich" 
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
    
    {/* Book Section (Screenshot 014217.png) */}
    <div className="text-center py-16">
      <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-gray-700 border border-gray-300 rounded-full bg-white shadow">The book that inspired the series.</span>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
        Where <span style={{ backgroundColor: BRAND_COLOR_ORANGE, padding: '0 4px', color: 'white' }}>Luca's story began</span>
      </h2>
      
      {/* Book Cover Placeholder */}
      <div className="relative inline-block mb-10 transform hover:scale-[1.05] transition duration-300">
        <img 
          src="https://placehold.co/300x400/386053/ffffff?text=The+Care+and+Feeding+of+TEAMS"
          alt="Book Cover"
          className="w-64 h-auto rounded-lg shadow-2xl"
        />
      </div>

      <button 
        onClick={() => setPage('Book')}
        className="block mx-auto flex items-center space-x-3 w-max px-6 py-3 text-lg font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        <span>Get the book for deeper stories.</span>
      </button>
    </div>
  </div>
);

// Dedicated Book Page
const BookPage = () => (
  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
    <h2 className="text-4xl font-extrabold text-gray-900 pt-8">
      "The Care and Feeding of Teams"
    </h2>
    <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
            <img 
                src="https://placehold.co/300x400/386053/ffffff?text=The+Care+and+Feeding+of+TEAMS"
                alt="Book Cover"
                className="w-full h-auto rounded-lg shadow-2xl"
            />
        </div>
        <div className="md:w-2/3 space-y-6">
            <p className="text-xl text-gray-700 font-light">
                This is the foundational text that inspired the entire Luca's Leadership Minutes series. Learn the practical, trust-based leadership models that Leslie Martinich developed over two decades leading high-performing tech teams.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">What You Will Learn:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>How to build psychological safety from day one.</li>
                <li>Strategies for hiring top talent without bias.</li>
                <li>The five levers of team performance and motivation.</li>
                <li>Effective conflict resolution methods for technical teams.</li>
            </ul>
            <div className="pt-4">
                <a href="#" className="inline-block px-8 py-4 text-xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition duration-300">
                    Buy the Book on Amazon
                </a>
            </div>
        </div>
    </div>
  </div>
);

// Recreates Contact Form Section (Screenshot 014223.png)
const ContactPage = () => {
  const InputField = ({ name, placeholder, type = 'text' }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-
