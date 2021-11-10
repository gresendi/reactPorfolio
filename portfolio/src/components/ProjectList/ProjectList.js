import { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import SeeMoreBtn from '../SeeMoreBtn/SeeMoreBtn'
import pubImg from '../../images/project-screenshots/PUB-icon.png'
import binTreeImg from '../../images/project-screenshots/binary-tree-icon.png'
import joferImg from '../../images/project-screenshots/JOFER.png'
import foodForYou from '../../images/project-screenshots/foodForYou.png'
import mePlants from '../../images/project-screenshots/mePlant.png'
import './ProjectList.css'

const projects = [
  {
    img: joferImg,
    title: 'Jofer',
    author: '#React.js #Node.js #MongoDB',
    featured: true,
    gitHubLink: 'https://github.com/sequint/Jofer',
    deployedSite: 'https://jofer.herokuapp.com',
    description: `A full MERN Stack application geared toward helping employers and HR departments give their applicants the best application experience possible, while streamlining communication during the hiring process.`
  },
  {
    img: foodForYou,
    title: 'Food for You',
    author: '#HTML #CSS #Javascript',
    gitHubLink: 'https://github.com/gresendi/FoodForYou',
    deployedSite: 'https://gresendi.github.io/Project1/index.html',
    description: 'A basic web application designed to help with deciding on what to cook. Enter in the ingredients that you have in your fridge and click on the "Recipes" tab. The system will generate a list of recipes that includes the ingredients you have inputed in. At the bottom of each recipe, there is a "View Recipe" button, where a module will pop up and give you the choice of saving that specific recipe. When you save a recipe, it will be saved in "My Favorites" tab, so that you can keep the recipes you like. If you change your mind, you can remove the saved recipe in "My Favorites" tab at the bottom of the recipe.'
  },
  {
    img: mePlants,
    title: 'mePlants',
    author: '#HTML #CSS #Javascript #Bootstrap, #Firebase',
    gitHubLink: 'https://github.com/gresendi/mePlants',
    deployedSite: 'https://meplant-app.herokuapp.com/',
    description: "This web application is a blog site for plants, and helps a user to track their plants and watering schedules. This application is powered by HTML, CSS, Javascript, Bootstrap, Firebase and others."
  }
]

const ProjectList = () => {
  const [ hover, setHover ] = useState({
    0: false,
    1: false,
    2: false
  })

  return(
    <div id = 'projects' className="projectContainer">
      <h1 className="projectsTitle">Project Highlights</h1>
      <SeeMoreBtn path="projects" />
      <ImageList ImageList className="imgListContainer" cols={1} >
        {
          projects.map((project, index) => (
            <ImageListItem
              key={project.img}
              onMouseEnter={() => setHover({ ...hover, [index]: true })}
              onMouseLeave={() => setHover({ ...hover, [index]: false })}
            >
              <img
                src={`${project.img}?w=248&fit=crop&auto=format`}
                srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={project.title}
                loading="lazy"
                className="projImg"
              />
              {hover[index] ? <ImageListItemBar className="descArea" title={project.description}></ImageListItemBar> : <></>}
              <ImageListItemBar
                title={project.title}
                subtitle={project.author}
                actionIcon={
                  <IconButton
                    className="linkIcon"
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${project.title}`}
                  >
                    <a className="noDecor linkIcon" href={project.deployedSite} target="_blank" rel="noreferrer">
                      <LanguageIcon className="linkIcon" sx={{ fill: 'white' }} />
                    </a>
                    <a className="noDecor" href={project.gitHubLink} target="_blank" rel="noreferrer">
                      <GitHubIcon className="linkIcon" sx={{ fill: 'white' }} />
                    </a>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))
        }
      </ImageList >
    </div>
  )
}

export default ProjectList
