import { useState } from 'react'
import emailjs from 'emailjs-com'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import TextField from '@mui/material/TextField'
import InsertComment from '@mui/icons-material/InsertComment'
import Alert from '@mui/material/Alert'
import './ContactMe.css'

const ContactMe = () => {
  const [ click, toggleClick ] = useState(false)
  const [ connectInfo, setConnectInfo ] = useState({
    email: '',
    message: ''
  })
  const [ emailSent, setEmailSent ] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    setEmailSent(false)
    toggleClick(!click)
  }

  const handleInputChange = ({ target: { name, value } }) => setConnectInfo({ ...connectInfo, [name]: value })

  const handleSubmit = event => {
    event.preventDefault()

    emailjs.send("service_bzw9z2j", "portfolio_contact", connectInfo, "user_74lDawTBgW65Sfcmf8XdP")

    setEmailSent(true)
    setConnectInfo({ email: '', message: '' })

  }

  const displayInputArea = () => {

    return(
      <>
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1}
          }}
          noValidate
          autoComplete="off"
          className="messageInput"
        >
          {emailSent ? <Alert className="emailSentMsg" severity="success">Email sent!</Alert> : <></>}
          <h3 className="contactMeTitle">Let's Connect!</h3>
          <div>
            <TextField
              id="outlined-email"
              label="Email"
              name="email"
              value={connectInfo.email}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              name="message"
              onChange={handleInputChange}
              multiline
              rows={4}
            />
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
          </div>
        </Box>
      </>
    )

  }

  return(
    <>
      <Box className="contactToggler">
        <Fab className="contactBtnColor" aria-label="add" onClick={handleClick}>
          <InsertComment />
        </Fab>
      </Box>
      {click ? displayInputArea() : <></>}
    </>
  )
}

export default ContactMe
