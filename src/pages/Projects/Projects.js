import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import Pixel from '../../images/project-screenshots/Pixel.png'
import joferImg from '../../images/project-screenshots/JOFER.png'
import foodForYou from '../../images/project-screenshots/foodForYou.png'
import mePlants from '../../images/project-screenshots/mePlant.png'
import glanceImg from '../../images/project-screenshots/glanceImg.jpg'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Footer from '../../components/Footer/Footer'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const projects = [
  {
    img: glanceImg,
    title: 'Glance',
    author: '#React.js #Node.js #MongoDB #Express',
    gitHubLink: 'https://github.com/gresendi/glance',
    deployedSite: 'https://glanceatnature.herokuapp.com/',
    description: "A full MERN Stack application geared toward productivity with a hint of nature. Includes local weather information, link managment, task managment, inspirational quotes, and random images of nature! "
  },
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
    img: mePlants,
    title: 'mePlants',
    author: '#HTML #CSS #Javascript #Bootstrap, #Firebase',
    gitHubLink: 'https://github.com/gresendi/mePlants',
    deployedSite: 'https://meplant-app.herokuapp.com/',
    description: "This web application is a blog site for plants, and helps a user to track their plants and watering schedules. This application is powered by HTML, CSS, Javascript, Bootstrap, Firebase and others."
  },
  {
    img: foodForYou,
    title: 'Food for You',
    author: '#HTML #CSS #Javascript',
    gitHubLink: 'https://github.com/gresendi/FoodForYou',
    deployedSite: 'https://gresendi.github.io/FoodForYou/',
    description: 'A basic web application designed to help with deciding on what to cook. Enter in the ingredients that you have in your fridge and click on the "Recipes" tab. The system will generate a list of recipes that includes the ingredients you have inputed in. '
  },
  
  {
    img: Pixel,
    title: 'Pixel Art Maker',
    author: '#HTML #CSS #Javascript ',
    gitHubLink: 'https://github.com/gresendi/pixel-art-maker',
    deployedSite: 'https://gresendi.github.io/pixel-art-maker/',
    description: "Simple website where you can create a grid and create pixel art!"
  }

]



const Projects = () => {


  const [hover, setHover] = useState({
    0: false,
    1: false,
    2: false,
    3:false
  })

  return (

    <>

      <NavBar home={false} />
      <>

        <div id='projects' className="projectContainer">
          <h1 className="projectsTitle">Project Highlights</h1>

          <div>
            <Stack
              direction={{ xs: 'column'}}
              spacing={8}
              justifyContent="center"
              alignItems="center"
              paddingBottom= '40px'
            >
              {

                projects.map((project, index) => (
                  <Item>
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
                  </Item>
                ))
              }


            </Stack>
            
          </div>

        </div>
      </>
      
      <Footer/>


    </>

    


  )
}


export default Projects