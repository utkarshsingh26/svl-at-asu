import NightDesertGraphThemeWithPapers from '../components/ui/DesertGraphThemeWithPapers';

function Papers() {
  return (
    <NightDesertGraphThemeWithPapers>
      <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <style jsx>{`
          .img-fluid {
            max-width: 100%; /* Ensure the image scales down within its column */
            height: auto;    /* Maintain aspect ratio */
          }
          .container {
            max-width: 1000px; /* Limit the width of the entire container */
            margin-left: 0;    /* Shift the container to the left */
          }
          .row {
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-start;
            margin-bottom: 20px; /* Add space between rows */
          }
          .col-2 {
            flex: 0 0 auto;
            width: 15%; /* Adjusted width for better spacing */
            margin-right: 15px; /* Add space between image and text */
          }
          .col-10 {
            flex: 1;
            width: 85%; /* Adjusted width for better spacing */
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add text shadow */
          }
          .link-danger {
            color: #dc3545;
            text-decoration: none;
          }
          .link-danger:hover {
            text-decoration: underline;
          }
        `}</style>
        <div className="container">
          <h1>Publications</h1>
          <hr />
          <h3>Full Papers (Journal, Conference, and Symposium)</h3>

          {/* Paper Entry 1 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2025mind.png"
                alt="Mind Wandering"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
              Anjana Arunkumar, Lace Padilla, and Chris Bryan.
              <b> Mind Drifts, Data Shifts: Utilizing Mind Wandering to Track the Evolution of User Experience with Data Visualizations.</b>
              <i> accepted to IEEE VIS 2024, to be published in IEEE Transactions on Visualization and Computer Graphics.</i> <br/>
              <a href="https://arxiv.org/abs/2408.03576" className="link-danger" target="_blank" rel="noopener noreferrer">ArXiv Preprint</a>
            </div>
          </div>

          {/* Paper Entry 2 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="wang2025defogger.png"
                alt="Defogger Visualization"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
              Xumeng Wang, Shuangcheng Jiao, and Chris Bryan.
              <b> Defogger: A Visual Analysis Approach for Data Exploration of Sensitive Data Protected by Differential Privacy.</b>
              <i> accepted to IEEE VIS 2024, to be published in IEEE Transactions on Visualization and Computer Graphics.</i> <br/>
              <a href="https://example.com/paper2" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a>
            </div>
          </div>

          {/* Paper Entry 3 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2023image.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
              Anjana Arunkumar, Lace Padilla, Gi-Yeul Bae, and Chris Bryan.
              <b> Image or Information? Examining the Nature and Impact of Visualization Perceptual Classification.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 30.1, pp. 1030-1040, 2024.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a> | 
              <a href="https://example.com/supplementary" className="link-danger" target="_blank" rel="noopener noreferrer">Supplementary Materials</a>
            </div>
          </div>

          {/* Paper Entry 4 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2023lingo.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Shubham Sharma, Rakhi Agrawal, Sriram Chandrasekaran, and Chris Bryan.
              <b> LINGO: Visually Debiasing Natural Language Instructions to Support Task Diversity.</b>
              <i> Computer Graphics Forum, 42.3, 2023.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a> | 
              <a href="https://example.com/supplementary" className="link-danger" target="_blank" rel="noopener noreferrer">Video</a>
            </div>
          </div>

          {/* Paper Entry 5 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2023real.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Swaroop Mishra, Bhavdeep Sachdeva, Chitta Baral, and Chris Bryan.
              <b> Real-Time Visual Feedback to Guide Benchmark Creation: A Human-and-Metric-in-the-Loop Workflow.</b>
              <i> Proceedings of the 17th Conference of the European Chapter of the Association for Computational Linguistics (EACL), pp. 2899-2927, 2023.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a>
            </div>
          </div>

          {/* Paper Entry 6 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="huang2022conceptexplainer.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jinbin Huang, Aditi Mishra, Bum-Chul Kwon, and Chris Bryan.
              <b> ConceptExplainer: Understanding the Mental Model of Deep Learning Algorithms via Interactive Concept-based Explanations.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 29.1, pp. 831-841, 2023.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a>
            </div>
          </div>

          {/* Paper Entry 7 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2022pmutracker.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Andrea Pinceti, Lalitha Sankar, and Chris Bryan.
              <b> PMU Tracker: A Visualization Platform for Epicentric Event Propagation Analysis in the Power Grid. </b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 29.1, pp. 1081-1090, 2023.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">Paper</a>
            </div>
          </div>

          {/* Paper Entry 8 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="mishra2022why.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Aditi Mishra, Utkarsh Soni, Jinbin Huang, and Chris Bryan.
              <b> Why? Why not? When? Visual Explanations of Agent Behaviour in Reinforcement Learning. </b>
              <i> Proceedings of the 2022 IEEE 15th Pacific Visualization Symposium (PacificVis), pp. 111-120, 2022.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a>
            </div>
          </div>

           {/* Paper Entry 9 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="mishra2022news.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Aditi Mishra, Shashank Ginjpalli, and Chris Bryan.
              <b> News Kaleidoscope: Visual Investigation of Coverage Diversity in News Event Reporting. </b>
              <i> Proceedings of the 2022 IEEE 15th Pacific Visualization Symposium (PacificVis), pp. 131-140, 2022.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a>
            </div>
          </div>

          {/* Paper Entry 10 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2022pmuvis.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Nitin Gupta, Andrea Pinceti, Lalitha Sankar, and Chris Bryan.
              <b> PMUVis: A Large Scale Platform to Assist Power System Operators in a Smart Grid. </b>
              <i> IEEE Computer Graphics and Applications, 42.6, pp. 84-95, 2022.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
            </div>
          </div>


        </div>
      </div>
    </NightDesertGraphThemeWithPapers>
  );
}

export default Papers;
