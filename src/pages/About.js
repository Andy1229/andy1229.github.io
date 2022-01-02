import '../App.css';
import CV from "./CV.pdf";


function About() {
    return (
        <div className="About">
            <h1 className="About_h">I solve problems by IT.</h1>

            <p className="About_text">I have been a highly enthusiastic to experience different positions, working environments and systems, while showcasing a desire to learn, grow and master new skills.</p>
            <p><a href={CV} target="_blank" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-black">CV</a></p>
        </div>
    )
}
export default About;
