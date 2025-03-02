import React from "react";
import "./Desktop.css";

export const Desktop = () => {
    return (
        <div className="desktop">
            <header className="nav">
                <nav>
                    <ul>
                        <li>ABOUT ME</li>
                        <li>SKILLS</li>
                        <li>EXPERIENCE</li>
                        <li>CONTACTS</li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>
                    Hello There, <br />I am{" "}
                    <span className="highlight">Suvam Choudhury</span>
                </h1>
                <p className="intro">
                    Hi, I'm Suvam Choudhury from Odisha, India. I have a passion for
                    exploring the world and I'm a tech enthusiast who loves innovation. My
                    goal is to simplify life with technology. Capturing moments through
                    photography is one of my hobbies, and I'm also venturing into the
                    realm of graphic design. Moreover, I enjoy creating my own small
                    projects, as you can see below.
                </p>
                <img
                    className="hero-image"
                    src="https://via.placeholder.com/150"
                    alt="Web Development"
                />
            </section>

            <section className="skills">
                <div className="skill-tags">
                    {[
                        "C++",
                        "Java",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "PHP",
                        "MySQL",
                        "MongoDB",
                        "Python",
                        "AWS",
                        "Photography",
                        "Video Editing",
                        "Photoshop",
                    ].map((skill) => (
                        <span key={skill} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="experience">
                <div className="current-job">
                    <span className="status-indicator"></span>
                    <p>
                        Currently working at <span className="highlight">accenture</span>
                    </p>
                    <p className="job-description">
                        It's truly an incredible opportunity to launch my career with a
                        prestigious company like Accenture as an Application Development
                        Associate.
                    </p>
                </div>
            </section>

            <section className="projects">
                <h2>PROJECTS</h2>
                <div className="project-list">
                    <div className="project-card">
                        <img src="https://via.placeholder.com/150" alt="DZINK" />
                        <h3>DZINK</h3>
                        <p>
                            An Ecom. web app featuring a diverse collection of merchandise
                            across a wide range of categories and varieties.
                        </p>
                    </div>
                    <div className="project-card">
                        <img src="https://via.placeholder.com/150" alt="e-Library" />
                        <h3>e-Library</h3>
                        <p>
                            Explore diverse genres, engage in discussions, and join a
                            community passionate about reading and learning.
                        </p>
                    </div>
                </div>
            </section>

            <section className="gallery">
                <h2>MY GALLERY</h2>
                <div className="gallery-images">
                    <img src="https://via.placeholder.com/150" alt="Gallery Image 1" />
                    <img src="https://via.placeholder.com/150" alt="Gallery Image 2" />
                </div>
                <button className="view-more">VIEW MORE</button>
            </section>

            <footer className="contact">
                <h2>Let’s have a conversation...</h2>
                <p>
                    Direct message to me: <br />
                    <span className="email">@ suvamchoudhury18@gmail.com</span> <br />
                    <span className="phone">+91 7064114285</span>
                </p>
                <div className="social-icons">
                    <img src="https://via.placeholder.com/50" alt="LinkedIn" />
                    <img src="https://via.placeholder.com/50" alt="GitHub" />
                    <img src="https://via.placeholder.com/50" alt="Instagram" />
                </div>
            </footer>
        </div>
    );
};