import '../App.css';
import CV from "./CV.pdf";


function About() {
    return (
        <div className="About">
            <h2>I'm Andy An</h2>
            <p className="lead">I have been a highly enthusiastic to experience different positions, working environments and systems, while showcasing a desire to learn, grow and master new skills.</p>
            <p className="lead">
                <a href={CV} target="_blank" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-black">CV</a>
            </p>
        </div>
    )
}
export default About;
