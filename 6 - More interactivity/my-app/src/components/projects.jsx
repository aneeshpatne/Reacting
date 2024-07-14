import './styles/project.css';
import { placeholder,JS,ML, React, GCP, Next } from '../assets/img';
const logoMapper = {'JS':JS, 'ML':ML, 'React':React, 'GCP':GCP, 'Next':Next};
function TechStack({imgSrc, Name}){
    return (<div id='techstack'>
        <div id='techstack-logo'>
        <img src={imgSrc} alt=''></img>
        </div>
        <div id='techstack-name'>{Name}</div>
    </div>);
}
function ProjectContainer({imgSrc, title, desc, tech}){
    return(<div id="project-container">
        <div id='project-img'>
            <img src={imgSrc} alt='project description'></img>
        </div>
        <h1 id='project-name'>{title}</h1>
        <div id='project-desc'>{desc}</div>
        <div id='techstack-container'>
        {tech.map((val) => (<TechStack Name ={val} imgSrc={logoMapper[val]}/>))}
        </div>
    </div>)
};

const d1 = [ 
    {'Title' : 'Personal Portfolio' ,
    'desc' : 'A sleek and user-friendly personal portfolio website to showcase my projects, skills, and achievements, with intuitive navigation and modern design',
    'tech': ['Next','GCP']},
    {'Title' : 'Vishv' ,
    'desc' : 'A web application to promote awareness on climate change and quality education, incorporating an inclusive color-blindness-friendly interface , featuring ML-driven AQI predictions',
    'tech': ['React','GCP','ML']},
    {'Title' : 'Vishv' ,
    'desc' : 'A web application to promote awareness on climate change and quality education, incorporating an inclusive color-blindness-friendly interface , featuring ML-driven AQI predictions',
    'tech': ['React','GCP','ML']},
    {'Title' : 'Vishv' ,
    'desc' : 'A web application to promote wareness on climate change and quality education, incorporating an inclusive color-blindness-friendly interface , featuring ML-driven AQI predictions',
    'tech': ['React','GCP','ML']}
        ];

export default function Project(){
    return(
        <div id='project-container-main'>
        {d1.map((data) => <ProjectContainer imgSrc={placeholder} title = {data.Title} desc = {data.desc} tech={data.tech}/>)}
        </div>
    )
}