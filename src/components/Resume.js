import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Typography, Table} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: '#233'
    },
    timeline: {
        position:'relative',
        padding:'1rem',
        margin:'0 auto',
        "&:before": {
            content:"''",
            position:'absolute',
            height:'100%',
            border:'1px solid tan',
            right:'40px',
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:'both'
        },
        [theme.breakpoints.up("md")]:{
            padding:'2rem',
            "&:before":{
                left:'calc(50% - 1px)',
                right:'auto'
            }
        }
    },
    timelineItem:{
        padding: "1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear: "both",
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStlye:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)",
        },
        [theme.breakpoints.up("md")]:{
            width:'44%',
            margin:'1rem',
            "&:nth-of-type(2n)": {
                float:'right',
                margin:'1rem',
                borderColor:'tan'
            },
            "&:nth-of-type(2n):before": {
                right:'auto',
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato"
            },
        },
        "&:after":{
            content:"''",
            position:"absolute",
        },
    },
    timelineYear:{
        textAlign:'center',
        maxWidth:'9.375rem',
        margin:'0 3rem 0 auto',
        fontSize:'1.8rem',
        background:'tomato',
        color:'white',
        lineHeight:1,
        padding:'0.5rem 0 1rem',
        "&:before": {
            display:'none'
        },
        [theme.breakpoints.up("md")]:{
            textAlign:'center',
            margin:'0 auto',
            "&:nth-of-type(2n)": {
                float:'none',
                margin:'0 auto',
            },
            "&:nth-of-type(2n):before": {
                display:'none'
            },
        }
    },
    heading :{
        color:"tomato",
        padding:"3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform: "uppercase"
    }
}));
const Resume = () => {
    const classes = useStyles()
    return (
        <>
        <Navbar />
        <Box component='header' className={classes.mainContainer}>
            <Typography variant='h4' align='center' className={classes.heading}>
                Work Experience
            </Typography>
            <Box component='div'className={classes.timeline}>
            <Typography variant='h2'className={`${classes.timelineYear} ${classes.timelineItem}`}>
                2019
            </Typography>
            <Box component='div' className={classes.timelineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='body1' align='center'style={{color:"tomato"}}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='subtitle1' align='center' style={{color:"tan"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
            <Typography variant='h2'className={`${classes.timelineYear} ${classes.timelineItem}`}>
                2018
            </Typography>
            <Box component='div' className={classes.timelineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='body1' align='center'style={{color:"tomato"}}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='subtitle1' align='center' style={{color:"tan"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
            <Typography variant='h2'className={`${classes.timelineYear} ${classes.timelineItem}`}>
                2017
            </Typography>
            <Box component='div' className={classes.timelineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='body1' align='center'style={{color:"tomato"}}>
                    Lorem Ipsum
                </Typography>
                <Typography variant='subtitle1' align='center' style={{color:"tan"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
        </Box>
        </Box>
        </>
    )
}

export default Resume
