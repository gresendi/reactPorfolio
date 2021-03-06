import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ClassTimeline from '../../components/ClassTimeline/ClassTimeline'
import ContactMe from '../../components/ContactMe/ContactMe'
import SkillList from '../../components/SkillList/SkillList'
import ProjectList from '../../components/ProjectList/ProjectList'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>

      <NavBar home= {true}/>
      
      <AboutMe />
      <ClassTimeline />
      <SkillList />
      <ProjectList />
      <ContactMe />
      <Footer />
      
    
    </>

    

  )
}

export default Home
