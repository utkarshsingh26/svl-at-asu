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
          <h2>Full Papers (Journal, Conference, and Symposium)</h2>
          <br/>

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

          {/* Paper Entry 11 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="zhao2021chartstory.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jian Zhao, Shenyu Xu, Senthil Chandrasegaran, Chris Bryan, Fan Du, Aditi Mishra, Xin Qian, Yiran Li, and Kwan-Liu Ma
              <b> ChartStory: Automated Partitioning, Layout, and Captioning of Charts into Comic-Style Narratives. </b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 29.2, pp. 1384-1399, 2021.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a>
            </div>
          </div>

          {/* Paper Entry 12 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="bryan2020analyzing.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Aditi Mishra, Hide Shidara, and Kwan-Liu Ma.
              <b> Analyzing Gaze Behavior for Text-embellished Narrative Visualizations under Different Task Scenarios.</b>
              <i> Visual Informatics, 4.3, pp. 41–50, 2020.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Study Materials</a>
            </div>
          </div>

          {/* Paper Entry 13 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="wang2020umbra.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Xumeng Wang, Chris Bryan, Yiran Li, Rusheng Pan, Yangling Liu, Wei Chen, and Kwan-Liu Ma.
              <b> Umbra: A Visual Analysis Approach for Defense Construction Against Inference Attacks on Sensitive Information.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 28.7, pp. 2776-2790, 2020.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video #1</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video #2</a>
            </div>
          </div>

          {/* Paper Entry 14 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="talktraces.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Senthil Chandrasegaran, Chris Bryan, Hidekazu Shidara, Tung-Yen Chuang, and Kwan-Liu Ma.
              <b> TalkTraces: Real-Time Capture and Visualization of Verbal Content in Meetings.</b>
              <i> ACM CHI Conference 2019.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a>
            </div>
          </div>

          {/* Paper Entry 15 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="graphprotector.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Xumeng Wang, Wei Chen, Jia-Kai Chou, Chris Bryan, Huihua Guan, Wenlong Chen, Rusheng Pan, and Kwan-Liu Ma.
              <b> GraphProtector: A Visual Interface for Employing and Assessing Multiple Privacy Preserving Graph Algorithms.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 25.1, pp. 193-203, 2019.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Appendix</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Talk</a>
            </div>
          </div>

          {/* Paper Entry 16 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="vizsec2018.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jia-Kai Chou, Chris Bryan, Jing Li, and Kwan-Liu Ma.
              <b> An Empirical Study on Perceptually Masking Privacy in Graph Visualization.</b>
              <i> 15th IEEE Symposium on Visualization for Cyber Security (VizSec), 2018.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Talk</a>
            </div>
          </div>

          {/* Paper Entry 17 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="constellations.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Shenyu Xu, Chris Bryan, Jianping Kelvin Li, Jian Zhao, and Kwan‐Liu Ma.
              <b> Chart Constellations: Effective Chart Summarization for Collaborative and Multi‐User Analyses.</b>
              <i> Computer Graphics Forum, 37.3, pp. 75-86, 2018.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a>
            </div>
          </div>


          {/* Paper Entry 18 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="meetingvis.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Yang Shi, Chris Bryan, Sridatt Bhamidipati, Ying Zhao, Yaoxue Zhang, and Kwan-Liu Ma.
              <b> MeetingVis: Visual Narratives to Assist in Recalling Meeting Context and Content.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 24.6, pp. 1918-1929, 2018.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer">   Honorable mention at IEEE PacificVis 2017</a> 
            </div>
          </div>

          {/* Paper Entry 19 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="navigable_videos.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jacqueline Chu, Chris Bryan, Min Shih, Leonardo Ferrer, and Kwan-Liu Ma.
              <b> Navigable Videos for Presenting Scientific Data on Affordable Head-Mounted Displays.</b>
              <i> Proceedings of the 8th ACM on Multimedia Systems Conference (MMSys'17), pp. 250-260, 2017.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Video</a> 
            </div>
          </div>

          {/* Paper Entry 20 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="privacygraph.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jia-Kai Chou, Chris Bryan, and Kwan-Liu Ma.
              <b> Privacy preserving visualization for social network data with ontology information.</b>
              <i> Proceedings of the 2017 IEEE Pacific Visualization Symposium (PacificVis), pp. 11-20, 2017.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a>
            </div>
          </div>

          {/* Paper Entry 21 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="tsi.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Kwan-Liu Ma, and Jonathan Woodring.
              <b> Temporal summary images: An approach to narrative visualization via interactive annotation generation and placement.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 23.1, pp. 511-520, 2017.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Appendix</a>
            </div>
          </div>

          {/* Paper Entry 22 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="synteny_explorer.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Gregory Guterman, Kwan-Liu Ma, Harris Lewin, Denis Larkin, Jaebum Kim, Jian Ma, and Marta Farré.
              <b> Synteny Explorer: An Interactive Visualization Application for Teaching Genome Evolution.</b>
              <i> IEEE Transactions on Visualization and Computer Graphics, 23.1, pp. 711-720, 2017.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a>
            </div>
          </div>

          {/* Paper Entry 23 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="integratingpredictiveanalytics.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Xue Wu, Susan Mniszewski, and Kwan-Liu Ma.
              <b> Integrating Predictive Analytics into a Spatiotemporal Epidemic Simulation.</b>
              <i> Proceedings of the 2015 IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 17-24.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Appendix</a>
            </div>
          </div>

          {/* Paper Entry 24 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="towardsmosquitoborn.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Susan Mniszewski, C.A. Manore, Chris Bryan, Sara Y Del Valle, and Douglas Roberts.
              <b> Towards a Hybrid Agent-Based Model for Mosquito Borne Disease.</b>
              <i> Proceedings of the 2014 Summer Simulation Multiconference (SummerSim), 2014.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">PMID</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a>
            </div>
          </div>


          {/* Paper Entry 25 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="contactdiaries.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Kwan-Liu Ma, Yang-Chih Fu.
              <b> An Interactive Visualization Interface for Studying Egocentric, Categorical, Contact Diary Datasets.</b>
              <i> Proceedings of the 2013 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM), pp. 771-778, 2013.</i> <br/>
              <a href="https://example.com/doi" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Paper</a>
            </div>
          </div>

          <hr />
          <h2>Workshop Papers, Short Papers, and Other</h2>
          <br/>

          {/* Paper Entry 1 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="huang2022sparvis.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jinbin Huang, Shuang Liang, Qi Xiong, Yu Gao, Chao Mei, Yi Xu, and Chris Bryan.
              <b> SPARVIS: Combining Smartphone and Augmented Reality for Visual Data Analytics.</b>
              <i> Workshop on Visual Analytics in Immersive Environments (VAinIE) at ISMAR 2022. </i> <br/>
              <a href="https://ieeexplore.ieee.org/document/9974220" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/huang2022sparvis.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Short Paper</a>
            </div>
          </div>

          {/* Paper Entry 2 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="huang2021phoenix.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jinbin Huang, Jonathan Plasencia, Dianna Bardo, Nicholas Rubert, Erik Ellsworth, Steven Zangwill, and Chris Bryan.
              <b> Phoenix Virtual Heart: A Hybrid VR-Desktop Visualization System for Cardiac Surgery Planning and Education.</b>
              <i> 2021 IEEE Workshop on Visual Analytics in Healthcare (VAHC), pp 36-40, 2021. </i> <br/>
              <a href="https://ieeexplore.ieee.org/abstract/document/9623278" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/huang2021phoenix.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Short Paper</a>
            </div>
          </div>

          {/* Paper Entry 3 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2021bayesian.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Shashank Ginjpalli, and Chris Bryan. 
              <b> Bayesian Modelling of Alluvial Diagram Complexity.</b>
              <i> 2021 IEEE Visualization Conference (VIS), pp 51-55, 2021. </i> <br/>
              <a href="https://ieeexplore.ieee.org/abstract/document/9623282" className="link-danger" target="_blank" rel="noopener noreferrer">DOI</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/arunkumar2021bayesian.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Short Paper</a>
            </div>
          </div>

          {/* Paper Entry 4 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="huang2020totemfinder.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Jinbin Huang, Aditi Mishra, Anjana Arunkumar, and Chris Bryan.
              <b> TotemFinder: A Visual Analytics Approach for Image-based Key Players Identification. </b>
              <i> 2020 IEEE Conference on Visual Analytics Science and Technology (VAST Challenge). </i> <br/>
              <a href="https://vast-challenge.github.io/2020/" className="link-danger" target="_blank" rel="noopener noreferrer">Contest Site</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/huang2020totemfinder.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Short Paper</a> |
              <a href="https://virtual.ieeevis.org/session_a-vastchallenge-1.html" className="link-danger" target="_blank" rel="noopener noreferrer"> Presentation</a> |
              <a href="https://github.com/JakobWong/VAST2020" className="link-danger" target="_blank" rel="noopener noreferrer"> Code Repository</a> |
              <a href="https://example.com/paper3" className="link-danger" target="_blank" rel="noopener noreferrer"> Honorable Mention: Effective Use of Visual Encodings for Correcting Classification Errors</a>
            </div>
          </div>

          {/* Paper Entry 5 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2020visual.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Swaroop Mishra, and Chris Bryan.
              <b> A Visual Exploration of Fair Evaluation for ML - Bridging the Gap Between Research and the Real World. </b>
              <i> 3rd Workshop on Visualization for AI Explainability at IEEE VIS 2020. </i> <br/>
              <a href="https://visxai.io/2020.html" className="link-danger" target="_blank" rel="noopener noreferrer">Workshop Site</a> | 
              <a href="https://aarunku5.github.io/" className="link-danger" target="_blank" rel="noopener noreferrer"> Data Story</a> 
            </div>
          </div>

          {/* Paper Entry 6 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="arunkumar2020realtime.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Anjana Arunkumar, Swaroop Mishra, Bhavdeep Singh Sachdeva, Chitta Baral, and Chris Bryan.
              <b> Real-Time Visual Feedback for Educative Benchmark Creation: A Human-and-Metric-in-the-Loop Workflow. </b>
              <i> NeurIPS 2020 Workshop on Human And Machine in-the-Loop Evaluation and Learning Strategies (HAMLETS 2020). </i> <br/>
              <a href="https://hamlets-workshop.github.io/" className="link-danger" target="_blank" rel="noopener noreferrer">Workshop Site</a> | 
              <a href="https://openreview.net/forum?id=vi42eRDhGv7" className="link-danger" target="_blank" rel="noopener noreferrer"> Data Story</a> 
            </div>
          </div>

          {/* Paper Entry 7 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="pvis_storytelling2018.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Hidekazu Shidara, Chris Bryan, Oh-Hyun Kwon, Kwan-Liu Ma.
              <b> North Korea: Real or Paper Tiger? </b>
              <i> IEEE PacificVis 2018 Visual Storytelling Contest. </i> <br/>
              <a href="http://itolab.is.ocha.ac.jp/pvis2018/program.html#visual-data-storytelling-contest-1" className="link-danger" target="_blank" rel="noopener noreferrer">Contest Site</a> | 
              <a href="https://hshidara.github.io/PVis-Contest/" className="link-danger" target="_blank" rel="noopener noreferrer"> Demo</a> 
            </div>
          </div>

          {/* Paper Entry 8 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="pvis_storytelling2017.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Keshav Dasu, Sravya Divakarla, Kwan-Liu Ma
              <b> Summarizing the U.S. Presidential Election Day 2016. </b>
              <i> IEEE PacificVis 2017 Visual Storytelling Contest. </i> <br/>
              <a href="http://pacificvis.snu.ac.kr/programs/contest-114" className="link-danger" target="_blank" rel="noopener noreferrer">Contest Site</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/pvis_storytelling2017.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Data Story</a> 
            </div>
          </div>

          {/* Paper Entry 9 */}
          <div className="row">
            <div className="col-2 my-2">
              <img
                className="border rounded shadow img-fluid"
                src="predanalytics2014.png"
                alt="Visualization Perceptual Classification"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-10 my-2">
            Chris Bryan, Susan Mniszewski, and Kwan-Liu Ma.
              <b> Integrating Predictive Visualization with the Epidemic Disease Simulation System. </b>
              <i> IEEE VIS 2014 Workshop on Visualization for Predictive Analytics. </i> <br/>
              <a href="https://predictive-workshop.github.io/" className="link-danger" target="_blank" rel="noopener noreferrer">Workshop Site</a> | 
              <a href="https://chrisbryan.github.io/assets/pdf/vpa2014.pdf" className="link-danger" target="_blank" rel="noopener noreferrer"> Short Paper</a> 
            </div>
          </div>

        </div>
      </div>
    </NightDesertGraphThemeWithPapers>
  );
}

export default Papers;
