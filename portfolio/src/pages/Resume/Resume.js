import NavBar from "../../components/NavBar/NavBar"
import sadFace from '../../images/sad-face.png'
import './Resume.css'

const Resume = () => {
  return (
    <>
      <NavBar />
      <embed src="https://drive.google.com/file/d/1NMW3Wx3jkmdcHICAZc0J2K78FuDiE_sD/preview" className="resumePDF" type="application/pdf" width="100%" height="100%" title="resume"></embed>
      <img src={sadFace} alt="sad face" className="sadFace" />
    </>
  )
}

export default Resume
