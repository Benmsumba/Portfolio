import { Molecules } from './Molecules';
const Arrow = () => <img className="arrow" src="/assets/arrow-right.svg" alt="" />;
export function App() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><a className="monogram" href="#home" aria-label="Ben Msumba home">B<span>M</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#education">Education</a><a href="#vision">Vision</a><a href="#contact">Contact</a></nav></header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-art" src="/assets/molecules.webp" alt="" />
        <Molecules /><div className="hero-content"><p className="eyebrow">Pharmacy meets possibility</p><h1 id="hero-title">BEN<span>MSUMBA</span></h1><p className="degree">Pharmacy Student &amp; Health Tech Innovator</p><p className="university">Bachelor of Pharmacy (Honours) · KUHeS</p><a className="text-link" href="#about"><span>Meet Ben</span><Arrow /></a></div>
      </section>
      <section className="education section" id="education" aria-labelledby="education-title"><div><p className="eyebrow">My</p><h2 id="education-title">ACADEMIC<br/><span>JOURNEY</span></h2></div><div className="education-detail"><h3>Bachelor of Pharmacy (Honours)</h3><p>Kamuzu University of Health Sciences</p><span className="status">Currently studying</span></div></section>
      <section className="about section" id="about" aria-labelledby="about-title"><div><p className="eyebrow">The person behind the name</p><h2 id="about-title">MEET <span>BEN.</span></h2></div><div className="prose"><p>I’m Ben Msumba, a student at Kamuzu University of Health Sciences, pursuing a Bachelor of Pharmacy (Honours).</p><p>My interest in pharmacy comes from a love of studying drugs—how they work in the body and how they are used to treat disease. I’m still exploring the different areas of pharmacy as I develop my knowledge and interests.</p><a className="text-link small" href="#education"><span>Explore my education</span><Arrow /></a></div></section>
      <section className="vision about section" id="vision" aria-labelledby="vision-title"><div><p className="eyebrow">A passion for health technology</p><h2 id="vision-title">MY <span>VISION.</span></h2></div><div className="prose"><p>I want to bring together my interest in pharmacy and my passion for health technology to help improve healthcare. As I learn, I’m exploring the challenges people face and how technology could help solve them.</p></div></section>
      <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Stay connected</p><h2 id="contact-title">LET’S <span>CONNECT.</span></h2><p>Find me on GitHub and LinkedIn.</p><div className="social-links"><a href="https://github.com/Benmsumba" target="_blank" rel="noopener noreferrer"><img src="/assets/github.svg" alt="" /><span>GitHub</span><span className="sr-only"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/benmsumba/" target="_blank" rel="noopener noreferrer"><img src="/assets/linkedin.svg" alt="" /><span>LinkedIn</span><span className="sr-only"> (opens in a new tab)</span></a></div></section>
    </main><footer><a className="footer-name" href="#home">BEN MSUMBA</a><p>Pharmacy student · KUHeS</p><a href="#home">Back to top</a></footer>
  </>;
}
