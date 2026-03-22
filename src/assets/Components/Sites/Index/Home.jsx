import {Link} from 'react-router-dom'
import './Index.css'

export default function Home({easterActive}){
    return(
        <>
        <div>
            <main className={`index-main ${easterActive ? "easter-bg" : ""}`}
            id="main">
                <section className="hero">
                    <article className="hero-text">
                        <h1>Welcome!</h1>
                        <p>My name is Erik and I'm a Builder! Even since I was a kid I've always loved to build stuff. <br /><br />The only difference now is that I dont build with bricks. I build with code! Check out some of the stuff I've built!</p>
                        <Link to="/portfolio" className="cta-button">Portfolio</Link>
                    </article>
                        <div className="index-image"></div>
                    
                </section>
            </main>
        </div>
        </>
    )
}