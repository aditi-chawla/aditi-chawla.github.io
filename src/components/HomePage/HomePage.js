import Button from 'react-bootstrap/Button';
import "./HomePage.css"
import Resume from "../../assets/ADITI_CHAWLA_RESUME.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import background from '../../assets/background.avif';

export default function HomePage() {
    const myStyle = {
      backgroundImage: `linear-gradient(to top, rgba(42, 42, 42, 0.5) 5%, rgba(0,0,0, 0.80 ) 90%), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "auto",
      }

    return (
      <>
        <div className="home" style={myStyle}>
            <h1>Aditi Chawla</h1>
            <h2>Artificial Intelligence Engineer</h2>
            <Button className="resume-button" variant="outline-light" href={Resume} target="_blank">View Resume</Button>{' '}
        </div>
        <AboutPage/>
        <ExperiencePage/>
        <PortfolioPage/>
        <ContactPage/>
      </>
    );
  }