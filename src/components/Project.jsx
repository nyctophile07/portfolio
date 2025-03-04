import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Project(props) {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const projectSection = document.getElementById('projects');
            const projectPosition = projectSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (projectPosition < screenPosition) {
                controls.start({ x: 0, opacity: 1 });
            } else {
                controls.start({ x: 100, opacity: 0 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        props.project.map((project, index) => (
            <motion.div
                key={index}
                className='project-container'
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            ><a href={project.link} target='_blank'>
                <div className="project-img">
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="project-desc py-8 px-12 flex flex-col gap-2">
                    <h2 className='text-4xl text-yellow-300'>{project.title}</h2>
                    <p className='font-[300]'>{project.desc}</p>
                </div></a>
            </motion.div>
        ))
    );
}

export default Project;