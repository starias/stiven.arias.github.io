import { useState } from 'react';

// Styles
import '../../styles/projects.css';
import '../../styles/work.css';

// Components
import PopUpCard from '../utils/PopUpCard.jsx';
import Gif from '../utils/Gif.jsx';
import YouTube from '../utils/YouTube.jsx';
import Video from '../utils/Video.jsx';

// Assets
import hells_kichenette from '../../assets/video/hells-kichenette.mp4'
import colour_space from '../../assets/video/colourSpace-gameplay.mp4'
import unity_save from '../../assets/video/unity-save-system.mp4'
import corewar from '../../assets/video/corewar.mp4'
import dopplebanger from '../../assets/video/dopplebanger.mp4'
import papagayo from '../../assets/video/papagayogames.mov'
import towertido from '../../assets/video/towertido.mp4'
import goblinslayer from '../../assets/video/goblin-slayer.mp4'
import aaclass from '../../assets/gif/ai-classification.gif'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Projects Data
    const projects = [
        {
            title: 'Hell\'s Kichenette',
            subtitle: 'Bullet Hell Jam #6 - Ranked 72/230',
            date: 'May 2025',
            description:
                'The only restaurant where bullets fly faster than orders. ' +
                'You\'re the last line of defense between chaos and cuisine ' +
                'in a top-down, fast-paced bullet hell cooking game. Customers ' +
                'queue up with bizarre orders like “Paella” and “Cosmic Burger” — ' +
                'and their patience is dangerously short.\n\n' +
                '🔸Dodge deadly projectiles like spinning knives and flying pans\n' +
                '🔸Collect ingredients to complete chaotic orders\n' +
                '🔸Serve unstable customers before they go berserk and start attacking!\n' +
                '🔸Watch out for black hole spawners throwing food',
            bullets: [
                'Game Developer',
                'Bullet Hell Jam #6',
                'Developed within 10 days - 2 people',
                'Code architecture, gameplay mechanics, audio system (FMOD), and Menu system',
                'Usability and UX design',
                'QA Testing',
            ],
            keywords: ['Unity', 'C#', 'WebGl'],
            mediaComponent: <Video src={hells_kichenette} />,
            links: [
                { label: 'Github Repository', url: 'https://github.com/StArias-Projects/hells-kitchenette' },
                { label: 'Try it yourself!', url: 'https://randomplayerstudios.itch.io/hells-kitchenette' },
                { label: 'Bullet Hell Jam #6 Results - Ranked 72nd', url: 'https://itch.io/jam/bullet-jam-6/results?page=4' },
            ],
        },
        {
            title: 'Colour Space Video Game - Game Jam Winner',
            subtitle: 'Macro Jam #6',
            date: 'April 2025',
            description:
                'Colour Space is a survival action game in which you have ' +
                'to defeat enemies by reflecting their own projectiles. ' +
                'Move around the space, pickup incredible objects, and, more ' +
                'important, don\'t die.\n' +
                'You will be able to look at your stats at the end of the game ' +
                'and try another round.\n' +
                'This video game was developed for the Macro Jam #6 on itch.io ' +
                'platform during 4 days. Me and my parter designed and developed the ' +
                'entire video game from scratch. I primarily focused on the code ' +
                'architecture we were going to follow. After that, ' +
                'I worked on the gameplay mechanics, enemy spawning system, audio system ' +
                'integration using FMOD, and the Menu System  to change scenes.',
            bullets: [
                'Game Developer',
                'Macro Game Jam #6',
                'Developed within 4 days - 2 people',
                'Code architecture, gameplay mechanics, audio system (FMOD), and Menu system',
                'Usability and UX design',
                'QA Testing',
            ],

            keywords: ['Unity', 'C#', 'WebGl'],
            mediaComponent: <Video src={colour_space} />,
            links: [
                { label: 'Github Repository', url: 'https://github.com/StArias-Projects/colour-space-jam' },
                { label: 'Try it yourself!', url: 'https://orphic-dreaming.itch.io/colour-space' },
                { label: 'Macro Jam #6 Results - Ranked Winner', url: 'https://itch.io/jam/macro-jam-06/results' },
            ],
        },
        {
            title: 'Unity Save System',
            subtitle: 'Unity SDK',
            date: 'March 2025',
            description:
                'Save System is a personal and free tool-project to save the data ' +
                'of video games on different platforms.\n' +
                'The Save System allows you to save the progress of a video game on ' +
                'the disk of the device using the Unity Persistence Data Path.\n' +
                'The tool is intended to be open-source to let you modify and custom ' +
                'the scripts as you need for your own project.\n' +
                'I developed this from scratch including all the code architecture, ' +
                'functionalities, and documentation.',
            bullets: [
                'Unity Tool Developer',
                'Unity Multi Platform Game System',
                'Persistence Data Path',
                'Documentation, Tutorial, Unity Package',
                'JSON Support & Data Serialization',
                'Custom Debug Logger with different colours',
            ],

            keywords: ['Unity', 'C#', 'SDK'],
            mediaComponent: <Video src={unity_save} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/StArias-Projects/unity-save-system' },
                { label: 'Unity Save System on Itch.io', url: 'https://starias.itch.io/unity-save-system' },
            ],
        },
        {
            title: 'CoreWar UCM: Bachelor\'s Thesis - Unity',
            subtitle: 'Complutense University of Madrid',
            date: 'Academic Year: 2021-2022',
            description:
                'CoreWar UCM is a simulator developed as an alternative to the ARES Simulator (more info see links)' +
                ', designed to execute and visualize Core War battles where two custom "viruses" fight against ' +
                'each other.\n' +
                'Built with Unity, the project aimed to improve the user experience through enhanced UI and ' +
                'functionality compared to the old ARES.\n' + 'This project received '
                + < b >'the highest grade of 10 / 10'</b > +
                'following the final presentation to the university judges.\n' +
                'My primary tasks included to led and manage the team and to design and develop the final ' +
                'documentation.I also participated in the the creation and development of the core ' +
                'architecture of the code.Later on, I focused on UI development, including the code ' +
                'integration and the reasearch, optimization, testing, and assets integration, using Photoshop.',
            bullets: [
                'Scrum Master and documentation',
                'Code Architecture & Development',
                'Gameplay Logic',
                'UI Development',
                'Research & Optimization',
            ],
            keywords: ['Unity', 'C#', 'Visual Studio', 'C++', 'Plugin integration', 'Research & Investigation'],
            mediaComponent: <Video src={corewar} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/CoreWarUCM/Simulator' },
                { label: 'Old ARES Simulator', url: 'https://corewar.co.uk/ares.htm' },
            ],
        },
        {
            title: 'DoppleBanger Video Game',
            subtitle: 'Visual Studio, C++',
            date: 'Jan - May 2020',
            description:
                'DoppleBanger is an isometric action RPG with a pirate theme ' +
                'where the player explores, conquers, and loots equipment and treasures ' +
                'across various levels, following the core principles of the genre.\n' +
                'Developed using C++ and Visual Studio 2019 within a team of 10 people.\n' +
                'I led and managed a team taking the Scrum Master role, including managing the GDD. ' +
                'I also was in charge of the desing and development of the base architecture and ' +
                'structure of the code. I developed the logic for the game\'s UIs and implemented ' +
                'core mechanics for the main character and one of the final bosses.\n' +
                'During the whole development process I was also involved in the integration of ' +
                'different graphic items, using tools like Photoshop.\n' +
                'Finally, we developed a Tracker System for this video game in order to collect ' +
                'analytics within the game.',
            bullets: [
                'Scrum Master and documentation',
                '10 people team',
                'Code Architecture & Development',
                'Gameplay Logic',
                'Integrated a tracker to collect analytics within the game. ' + <i class="fa fa-calendar" style="font-size:16px"></i> + ' Feb - May 2022',
                'Art Integration using Photoshop and other tools',
                'Made with Visual Studio from scratch',
            ],
            keywords: ['C++', 'Visual Studio', 'SDL', 'Scratch'],
            mediaComponent: <Video src={dopplebanger} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/C-Tas/DoppleBanger' },
            ],
        },
        {
            title: 'Papagayo Games',
            subtitle: 'Video Game Engine + 2 Prototypes',
            date: 'Jan - May 2021',
            description:
                'Developed a custom open source game engine from scratch to support various game types. ' +
                'To demonstrate its versatility, we created two prototypes, "CyberStork", and "Bat the Bird", ' +
                'with full installers.\n' +
                'Developed using C++ and Visual Studio 2019 within a team of 11 people. In addition, it ' +
                'includes a LUA interpreter as the main programming language to develop the video games with ' +
                'the engine.\n' +
                'I led and managed the team taking the role of Scrum Master, including managing the GDD. ' +
                'I was in charge of the design and development of the base architecture and core systems we ' +
                'were going to use for the project. Later on, I focused on the totally integration of the ' +
                'Physics, Graphics, and UI systems for the engine.\n' +
                'Within the video games I worked on the UI logic and GameState management, including the ' +
                'searching and integration of assets and resources.\n' +
                'Finally, in order to improve the productivity, I developed a tool to automatically compile ' +
                'the engine after cloning the repository. The automation is based on .bat and .ps1 scripts. ' +
                'I also included a completed documentation explaining how to use this tool.',
            bullets: [
                'Scrum Master and documentation',
                '11 people team',
                'Code Architecture & Development',
                'Designed and developed core systems',
                'Integrated Physics, Graphics, and UI systems for the engine',
                'Gameplay Logic',
                'UI logic and GameState management for the games',
                'Automated engine compilation with .bat and .ps1 scripts and documenting',
                'Made with Visual Studio from scratch',
            ],
            keywords: [
                'C++', 'Lua Interpreter', 'Visual Studio', 'Scratch', 'OGRE',
                'CEGUI', 'Fmod', 'Bullet Physics', 'JSON Parser',
            ],
            mediaComponent: <Video src={papagayo} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/Papagayos-Games' },
            ],
        },
        {
            title: 'Towertido Video Game',
            subtitle: 'Visual Studio Code - Phaser 3',
            date: 'Sep - Dec 2019',
            description:
                'Towertido is a 2D side- view Tower Defense video game with a warlike theme with a ' +
                'futuristic aesthetic. The objective is to defend the towers that prevent enemy access ' +
                'to the military complex\n' +
                'Developed with Python and Phaser within a team of 2 people.\n' +
                'My primary tasks include game designing and planning by creating the GDD. ' +
                'We developed the game using JavaScript and Phaser as the game engine. ' +
                'Finally, we embedded the game into an HTML page and we deployed it using Github Pages.\n',
            bullets: [
                'Game Design & Planning',
                '2 people team',
                'Code Architecture & Development',
                'Designed and developed core systems',
                'Phaser Integration',
                'Technical Setup & Web Deployment',
            ],
            keywords: [
                'JS', 'HTML', 'Visual Studio Code', 'Phaser 3', 'Github Pages',
                'Web Deployment',
            ],
            mediaComponent: <Video src={towertido} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/StArias-Projects/Towertido' },
                { label: 'Try it yourself!', url: 'https://starias-projects.github.io/Towertido/' },
            ],
        },
        {
            title: 'Goblin Slayer Video Game',
            subtitle: 'Unity',
            date: 'Feb - May 2019',
            description:
                'Goblin Slayer is a Hack \'n\' Slash action video game with a 2D side- scrolling view. ' +
                'The game is set in caves where goblins reside, and the objective is to eliminate all of them.\n' +
                'Developed with C# and Unity within a team of 6 members, it was my first big project with Unity.\n' +
                'My primary tasks include designing the game and the implemention of character and enemy ' +
                'behaviours, animations, and overall user experience(UX); This included the development ' +
                'of the HUD and UI logic for in -game menus.\n' +
                'Additionally, I was in charge of the GDD.',
            bullets: [
                'Game Design & Planning',
                '6 people team',
                'Code Architecture & Development',
                'Designed and developed core systems',
                'Documentation & Management',
                'My first big project with Unity!',
            ],
            keywords: [
                'C#', 'Unity', 'Visual Studio',
            ],
            mediaComponent: <Video src={goblinslayer} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/while-true-studio/GoblinSlayer' },
            ],
        },
        {
            title: 'Body Performance Classification',
            subtitle: 'AI Training',
            date: 'Jan 2022',
            description:
                'The project aims to evaluate machine learning algorithms for optimal dataset classification.\n' +
                'The dataset consists of 13, 393 samples, each representing an individual with 11 attributes ' +
                'related to physical characteristics and performance.The data forms a(13, 393, 12) matrix.\n' +
                'The last column indicates the fitness training rating(A, B, C, or D), with A being the best score.\n' +
                'Algorithms used: SVM, Logistic Regression, and Neural Networks',
            bullets: [
                'AI Classification Training',
                '2 people team',
                'SVM',
                'Logistic Regression',
                'Neural Networks',
                'Data Analysis',
            ],
            keywords: [
                'Python', 'VS Code', 'Pandas', 'Numpy'
            ],
            mediaComponent: <Gif src={aaclass.src} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/while-true-studio/GoblinSlayer' },
            ],
        },
    ];

    // Card Structure
    return (
        <div className="project-wrapper">

            <div className="project-github">
                <a
                    key="starias-projects"
                    href="https://github.com/StArias-Projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-button project-github-link"
                >
                    <i className="fa-brands fa-github"></i> StArias Projects <i className="fa-brands fa-github"></i>
                </a>
            </div>

            <div className="project-grid-container">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <h4 className="project-subtitle">{project.subtitle}</h4>
                            <p className="project-dates">
                                <i className="fa fa-calendar" style={{ fontSize: '1rem', marginRight: '0.5rem' }}></i>
                                {project.date}
                            </p>
                            <div className="project-readmore">Read More <i className="fa fa-plus"></i></div>
                        </div>
                        <div className="project-media">
                            {project.mediaComponent}
                        </div>
                    </button>
                ))}
            </div>

            {selectedProject && (
                <div className="project-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="project-popup" onClick={e => e.stopPropagation()}>
                        <PopUpCard project={selectedProject} onClose={() => setSelectedProject(null)} />
                    </div>
                </div>
            )}
        </div>
    );
}
