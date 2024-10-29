import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Headshot from "../../assets/ADITI_HEADSHOT.jpeg"


export default function AboutPage() {
    return (
      <>
        <div id="about" className="about">
          <h1>About</h1>
          <div className="about-container">
            <div className="container2-1">
                <Image
                    className="headshot"
                    src={Headshot}
                    roundedCircle
                    height={"300rem"}
                    width={"300rem"}
                    alt="Lucy Beck"
                />
                <p><p>Hey, I’m Aditi 👋</p>

                <p>As a seasoned AI engineer having 2.5+ years of exp, I transform data into ingenious solutions. Currently, I'm working my magic on Generative AI breakthroughs for BFSI clients in IBM's WatsonX team.</p>

                <p>My AI journey kicked off at Mercedes Benz, where I fine-tuned my skills in crafting smart ML pipelines that enable data-driven decisions. These days, I'm driven to push the boundaries, exploring emerging frameworks like LlamaIndex and LangChain.</p>

                <p>With a Bachelor of Technology from the esteemed National Institute of Technology Patna, I'm well-equipped to tackle any challenge that comes my way. I'm endlessly fascinated by the ever-evolving world of AI, and I can't wait to see what the future holds!</p></p>
            </div>

            <div className="container2-2">

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Frameworks</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    Langchain, LlamaIndex, IBM WatsonX, Tensorflow, Pytorch, Keras, Scikit-learn, OpenCV
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Languages</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    Python, HTML, CSS, JavaScript, React.js                    </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Technologies</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    RESTful API, IBM Code Engine, Docker, Git, Github, Power BI, Matplotlib                 </Card.Text>
                </Card.Body>
              </Card>

            </div>
          </div>
        </div>
      </>
    );
  }