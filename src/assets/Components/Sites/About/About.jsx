import './About.css'
import aboutData from './About.json'

export default function About({easterActive}){


    return(
        <main>
            
            <section className={`about-section ${easterActive ? "easter-bg" : ""}`} id="main">
                <h1>About Me</h1>
                <h2>These are some things that I enjoy</h2>

                {
                    aboutData.hobbies.map((hobby, index) => (
                            // about-article uses flex row-reverse == every other "card" is reversed
                        <article key={index} className={index === 1 || index === 3 ? "about-article" : ""}>
                            <div className={hobby.divName}></div>

                            <section>
                                <h2>{hobby.title}</h2>
                                <p>{hobby.description}</p>
                            </section>
                        </article>
                        
                    ))
                }

                    
            </section>
        </main>
    )
}