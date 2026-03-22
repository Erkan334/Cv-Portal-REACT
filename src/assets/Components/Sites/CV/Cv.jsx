import './Cv.css'

export default function Cv(){
    return(
        <>
            <main className="cv-main" id="main">
                <section className="cv-section">
                    <h1>CV - Resume</h1>
                    <section className="education">
                        <h2>Education</h2>
                        <article>
                            <section className="h3-title">
                                <h3>Chas Academy - Fullstack Development .NET</h3>
                                <h3>August 2025 - June 2027</h3>
                            </section>
                            <p>I’m currently studying .NET Fullstack Development at Chas Academy, where I’m building a strong foundation in both backend and frontend development. 
                                The program focuses on modern technologies within the .NET ecosystem, including C#, ASP.NET Core, databases, APIs, and frontend frameworks.
                                Through hands-on projects and real-world assignments, I’m developing practical skills in building scalable web applications,
                                working with clean code principles, and understanding the full development process from idea to deployment.</p>
                        </article>
                        <article>
                            <section className="h3-title">
                                <h3>Centrum Vux - Natural Science</h3>
                                <h3>October 2023 - Mars 2024</h3>
                            </section>
                            <p>I studied Natural Science and Web Development at Komvux for six months, strengthening my foundational knowledge and gaining early experience in web technologies.</p>
                        </article>
                        <article>
                            <section className="h3-title">
                                <h3>Gymnasium - Engineering Science</h3>
                                <h3>August 2018 - June 2021</h3>
                            </section>
                            <p>I completed the Technology Program in upper secondary school with a specialization in Engineering Science. The program provided a strong technical foundation, with a focus on problem-solving, analytical thinking, and understanding how technology and systems work. It sparked my interest in technology and laid the groundwork for my continued studies in development and programming.</p>
                        </article>
                    </section>
            
                    <section className="skillset">
                        <h2>Skillset</h2>
                        <section className="skill-container">
                            <div className="card">
                                <h3>C# | .NET</h3>
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                            <div className="card">
                                <h3>HTML</h3>
                                <i className="fa-brands fa-html5 fa-3x"></i>
                            </div>
                            <div className="card">
                                <h3>CSS</h3>
                                <i className="fa-brands fa-css3 fa-3x"></i>
                            </div>
                            <div className="card">
                                <h3>JS</h3>
                                <i className="fa-brands fa-js fa-3x"></i>
                            </div>
                            <div className="card">
                                <h3>REST</h3>
                                <i className="fa-regular fa-window-restore fa-3x"></i>
                            </div>
                            <div className="card">
                                <h3>REACT</h3>
                                <i className="fa-brands fa-react fa-3x"></i>
                            </div>
                        </section>
                    </section>

                    <section className="military">
                        <article>
                            <h2>Additional information</h2>
                            <section className="h3-title">
                            <h3>Military Service</h3>
                            <h3>August 2021 - June 2022</h3>
                            </section>
                            <p>I completed 10 months of mandatory military service in Sweden, where I developed discipline, teamwork, and the ability to perform under pressure. The experience strengthened my sense of responsibility and taught me the importance of structure, communication, and reliability.</p>
                        </article>
                    </section>

                </section>
            </main>
        </>
    )
}