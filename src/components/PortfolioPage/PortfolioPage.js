import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PortfolioPage.css"
import image2 from '../../assets/LLM (1).webp'
import image3 from '../../assets/RAG (2).png'
import image4 from '../../assets/feedback.jpg'
import image5 from '../../assets/champion (1).jpeg';
import image6 from '../../assets/blog (2).webp';
import image7 from '../../assets/abc (6).jpeg';

export default function PortfolioPage() {
    const navigate = useNavigate();

    const NavigateToPhotoEditor = () => {
        navigate("/photoeditor");
    }

    const NavigateToFroggo = () => {
        navigate("/froggo");
    }

    const NavigateToAha = () => {
        navigate("/aha");
    }

    const NavigateToCwf = () => {
        navigate("/cwf");
    }

    const NavigateToNUProjects = () => {
        navigate("/nuprojects");
    }

    const NavigateToSquirrel = () => {
        navigate("/squirrel");
    }

    const NavigateToAchievement1 = () => {
        navigate("/achievement1");
    }

    const NavigateToAchievement2 = () => {
        navigate("/achievement2");
    }

    const NavigateToAchievement3 = () => {
        navigate("/achievement3");
    }

    return (
        <>
            <div id="portfolio" className="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                <Card bg="light">
                        <Card.Img variant="top" src={image2} alt="Challenge with Friends" />
                        <Card.Body>
                            <Card.Title>LLM-Enhanced Article Standardization</Card.Title>
                            <Card.Text>
                            Content Transformation Platform for Knowledge articles:features Fine-tuned LLM responses and Parallel processing API calls to reduce latency for standardization of 5500 articles.
                            </Card.Text>
                            <Button variant="primary" >Tech stack: IBM InstructLab, Streamlit, PostgresSQL, WatsonX.AI, IBM Code Engine</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light">
                        <Card.Img variant="top" src={image3} alt="NUProjects" />
                        <Card.Body>
                            <Card.Title>Multiformat Document Processing System</Card.Title>
                            <Card.Text>
                            RAG-based document processing system for automated form filling and response generation from multiple document formats and languages.
                            </Card.Text>
                            <Button variant="primary" >Tech stack: RAG, Milvus Vector Store, IBM Code Engine, React.js </Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light">
                        <Card.Img variant="top" src={image4} alt="Lenovo" />
                        <Card.Body>
                            <Card.Title>AI-driven Feedback Analysis</Card.Title>
                            <Card.Text>
                            Intelligent customer feedback management system using Meta-LLama for automated sentiment analysis and responses with real-time visualization dashboard
                            </Card.Text>
                            <Button variant="primary">Tech stack: LLMs, IBM Cognos Analytics, HTML, CSS, JavaScript</Button>
                        </Card.Body>
                    </Card>
                </div>
                <h1>Achievements</h1>
                <div className="achievements-container">
                    <Card bg="light">
                        <Card.Img variant="top" src={image5} alt="Achievement 1" />
                        <Card.Body>
                            <Card.Title>IBM Champion Learner Gold</Card.Title>
                            <Card.Text>
                                Achieved Champion Learner Gold status in IBM for completing a series of AI courses and digital credentials which requires over 200 hours of learning in a year
                            </Card.Text>
                            {/* <Button variant="primary" onClick={NavigateToAchievement1}>Learn More</Button> */}
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image6} alt="Achievement 2" />
                        <Card.Body>
                            <Card.Title>Publication</Card.Title>
                            <Card.Text>
                            Published author on IBM Developer Portal. Engineered and documented open-source implementation of Branched RAG architecture using WatsonX.AI
                            </Card.Text>
                            {/* <Button variant="primary" onClick={NavigateToAchievement2}>Learn More</Button> */}
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image7} alt="Achievement 3" />
                        <Card.Body>
                            <Card.Title>Process Innovation Award 2023</Card.Title>
                            <Card.Text>
                            Awarded the Mercedes Benz Process Innovation Award 2023 as part of a collaborative team of five for our work on a recommendation system machine learning project.                            </Card.Text>
                            {/* <Button variant="primary" onClick={NavigateToAchievement3}>Learn More</Button> */}
                        </Card.Body>
                    </Card>
                    </div>
            </div>
        </>
    );
}