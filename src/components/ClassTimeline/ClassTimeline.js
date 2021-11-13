import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import './ClassTimeline.css'



const ClassTimeline = () => {
  return(
    <div id = 'timeline' className="classesContainer">
      <h1 className="timelineTitle">Programming Journey</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            
          >
            <Typography variant="h6" component="span">
              Graduated From University of California Irvine
            </Typography>
            <Typography>Bachelors of Arts in Economics</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              2018
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
           
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            
          >
            <Typography variant="h6" component="span">
              Completed Udacity: Intro to Programming Nanodegree,
            </Typography>
            <Typography>Learned HTML, CSS, Python, and Javascript</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              2019
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Moved to Wisconsin
            </Typography>
            <Typography>Worked Retail :(</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"

          >
            <Typography variant="h6" component="span">
              Started Attending Community College
            </Typography>
            <Typography>Learned C++, Java, Visual Basic, .Net, Windows Server OS, Windows and Linux</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" >
              2020
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Moved Back to California
            </Typography>
            <Typography>Started working at a boys group home.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"

          >
            <Typography variant="h6" component="span">
              Recent graduate of UC Irvine's Full Stack Development Bootcamp
            </Typography>
            <Typography></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              2021
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default ClassTimeline
