module.exports = {
  siteTitle: 'Vivek Iyer',
  siteDescription:
    'Vivek Iyer is an IRE Researcher pursuing his Masters at IIIT, Hyderabad. His area of interest lies at the intersection of NLP and Deep Learning, and its applications in IRE.',
  siteKeywords:
    'Vivek Iyer, Vivek, Iyer, Remorax, NLP Researcher, IRE Researcher, AI Researcher, ML Researcher, Deep Learning Researcher, Ontologies, Knowledge Graphs, Google Summer of Code, Machine Learning, Deep Learning, Information Retrieval & Extraction, Natural Language Processing, Data Mining, Text Mining, Knowledge Representation, LSTM, IIIT Hyderabad, Open Source Developer, Open Source, FOSSASIA',
  siteUrl: 'https://remorax.netlify.com',
  siteLanguage: 'en_US',
  name: 'Vivek Iyer',
  location: 'Hyderabad, India',
  email: 'vivek.iyer@research.iiit.ac.in',
  github: 'https://github.com/Remorax',
  socialMedia: [
    {
      name: 'Google',
      url: 'mailto:vivekbalasundaram@gmail.com',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Remorax',
    },
    {
      name: 'Gitter',
      url: 'https://gitter.im/remorax',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vivekiyer98/',
    },
    {
      name: 'CV',
      url: '/Resume2.pdf',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Research',
      url: '/#research',
    },
    {
      name: 'Internships',
      url: '/#internships',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
