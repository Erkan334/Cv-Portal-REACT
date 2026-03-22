import './Portfolio.css'
import {useState, useEffect} from 'react'
import portfolioData from './Portfolio.json'

export default function Portfolio({easterActive}){

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
            //Fetch repos from two diffferent accounts at once
        Promise.all([
            fetch("https://api.github.com/users/Erkan334/repos").then(response => response.json()),
            fetch("https://api.github.com/users/NadineL1/repos").then(response => response.json())
        ])
        .then(([repos1, repos2]) => {
            setRepos([...repos1, ...repos2]);
        })
        // Sets loading to false once promise is settled
        .finally(() =>{
            setLoading(false);
        });

    }, []);
    
    //Filter so I only get the projects I want by id
    const projectIds = [1159246048, 1141951813, 1169934249, 1080427112];
    const projectRepos = repos.filter(repo => projectIds.includes(repo.id))

    const [activeModal, setActiveModal] = useState(null);
    const activeRepo = projectRepos.find(repo => repo.id === activeModal);

    // if projects are loading, show loading message
    if(loading){
        return <p>Loading projects</p>;
    }

    return(
        
        <>
            <main >
                <section className={`portfolio-section ${easterActive ? "easter-bg" : ""}`} id="main">
                    <h1>Portfolio</h1>
                    <div className="container">

                        {
                            projectRepos.map((repo) => {
                                
                                const config = portfolioData[repo.id];
                                

                                return(
                                    <div key={repo.id}>
                                        <a onClick={() => setActiveModal(repo.id)}>
                                            <article className={config.className}>
                                                <img src={config.image} alt="" />
                                                <h2>{repo.name}</h2>
                                                <p>{repo.description}</p>
                                            </article>
                                        </a>
                                    </div>
                                )
                            })
                        }


                        
                        {/* Placeholders */}
                        
                            <article className="project5">
                                <img src="/PortfolioImages/Portfolio/404.jpg" alt="" />
                                <h2>TBA</h2>
                                <p>Future projects will be here</p>
                            </article>

                            <article className="project6">
                                <img src="/PortfolioImages/Portfolio/404.jpg" alt="" />
                                <h2>TBA</h2>
                                <p>Future projects will be here</p>
                            </article>
                            
                    </div>
                </section>

                {activeRepo && (() => {
                    const activeConfig = portfolioData[activeRepo.id]; 

                    return (
                        <div className={`modal active`}  onClick={() => setActiveModal(null)}>
                            <div className="modal-content" onClick={event => event.stopPropagation()}> {/* stopPropagation allows the user to click the modal without closing it */}
                                <h1>{activeRepo.name}</h1>
                                <p>{activeRepo.description}</p>
                            </div>
                        </div>
                    )
                })()}

                {/* <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h1>HobbyRestAPI</h1>
                        <p>This is a Rest API I made with ASP.NET in C#. </p>

                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>

                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h1>Aurel</h1>
                        <p>This was one of my first attempt at making a frontend website. I was experimenting with HTML and CSS to learn how the basics work.</p>

                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>

                <div id="modal3" className="modal">
                    <div className="modal-content">
                        <h1>CV-Portal</h1>
                        <p>This website is my first frontend project that I've finished! It is made with HTML, CSS and a tiny bit of JS.</p>

                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>
                <div id="modal4" className="modal">
                    <div className="modal-content">
                        <h1>5Bank</h1>
                        <p>A team-project where the goal was to make a bank console-application.</p>

                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div> */}

            </main>
        </>
    )
}