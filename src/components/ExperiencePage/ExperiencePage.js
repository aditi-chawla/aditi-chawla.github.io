import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
        <>
        <div id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience-container">
            <div>
                  <h2>AI Engineer </h2>
                  <p>IBM WatsonX, Financial Services Market (US), </p>
                  <p>Apr 2024 - Present</p>
                      <ul>
                          <li>Architected cutting-edge AI solutions for BFSI clients, specializing in financial document processing and regulatory-compliant automation solutions </li>
                          <li>Engineered high-performance RAG architectures including Form Filling Assistant,achieving 80% faster document processing across workflows</li>
                          <li>Published Branched RAG architecture for investment advisory on IBM Developer Portal</li>
                          <li>Delivered successful POCs for content standardization using parallel LLM processing, achieving 97% reduction in processing time,reducing compliance violations</li>
                      </ul>
              </div>

              <div>
                  <h2>Data Scientist</h2>
                  <p>Mercedes Benz Research & Development India - Bangalore</p>
                  <p>Sept 2022 - Mar 2024</p>
                      <ul>
                          <li>Managed the end-to-end lifecycle of ML models from conceptualization to deployment</li>
                          <li>Utilized Neural Network architecture (CNN, ANN) to solve diverse challenges in Digital Product Development</li>
                          <li>Built Computer Vision based Analysis for Optimizing Vehicle Design against Dirt accumulated on outer profile</li>
                          <li>Conducted EDA and data preprocessing while analyzing and ranking machine learning algorithms based on their success probability to address specific problems.</li>
                      </ul>
              </div>

              <div>
                <h2>R&D Intern</h2>
                <p>Daimler Trucks Innovation Center India - Bangalore</p>
                <p>Nov 2021 - Feb 2022</p>
                <ul>
                  <li>Transitioned design calculations for electric vehicle battery digital design from Excel to Python,enhancing efficiency and enabling advanced analytical capabilities.</li>
                  <li>Conducted competitive market analysis and developed dashboards for leading electric vehicles in the European and Chinese markets.</li>
                </ul>
              </div>

              <div>
                <h2>R&D Intern</h2>
                <p>Schneider Electric R&D - Gurugram</p>
                <p>Nov 2020 - June 2021</p>
                <ul>
                  <li>Developed machine learning regression models to predict optimal design parameters for digital development of BLDC motors,applied hypertuning for performance </li>
                  <li>Leveraged data analysis techniques to drive substantial improvements in product efficiency and performance.</li>
                </ul>
              </div>
            </div>
        </div>
        </>
    );
}