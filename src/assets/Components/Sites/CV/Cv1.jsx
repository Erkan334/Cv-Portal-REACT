import './Cv.css'
import Cv from './Cv.json'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDev, faHtml5, faCss, faJs, faRest, faReact } from "@fortawesome/free-solid-svg-icons";

export default function Cv1({easterActive}){
    return(
        <>
                            {/* if easterActive = true, show easter-background */}
            <main className={`cv-main ${easterActive ? "easter-bg" : ""}`} id="main">
                <section className="cv-section">
                    <h1>CV - Resume</h1>
                    <section className="education">
                        <h2>Education</h2>

                        {Cv.educations.map((education, index) => {
                            return(

                                <div key={index}>
                                    <article>
                                    <section className="h3-title">
                                        <h3>{education.title}</h3>
                                        <h3>{education.date}</h3>
                                    </section>
                                        <p>{education.description}</p>
                                    </article>
                                </div>
                            )
                        })}

                    </section>
                        
                        {/* Icons doesnt work for now, only text is showing */}
                    <section className="skillset">
                        <h2>Skillset</h2>
                        <section className="skill-container">
                            {Cv.icons?.map((icon, index) =>{
                                return(

                                <div key={index}>
                                    <div className="card">
                                        <h3>{icon.text}</h3>
                                        <i className={icon.name}></i>
                                    </div>
                                </div>
                                )
                            })}
                            
                        </section>
                    </section>

                    <section className="military">
                        <article>
                            <h2>Additional information</h2>
                            {Cv.military.map((mili, index) => {
                            return(

                                <div key={index}>
                                    <section className="h3-title">
                                        <h3>{mili.title}</h3>
                                        <h3>{mili.date}</h3>
                                    </section>
                                        <p>{mili.description}</p>
                                </div>
                            )
                            })}
                            
                        </article>
                    </section>

                </section>
            </main>
        </>
    )
}