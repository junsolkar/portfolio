import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particleLayout : {
        position:"absolute"
    }
})
const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Particles 
            canvasClassName = {classes.particleLayout}
            params={{
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    shape: {
                        type:"circle"
                    },
                    size:{
                        value:3,
                        random: true,
                        anim:{
                            enable:true,
                            speed: 4,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity:{
                        value:1,
                        random: true,
                        anim:{
                            enable:true,
                            speed:1,
                            opacity_min:0.1,
                            sync:true
                        }
                    }
                }
            }}
            />
            <Navbar />
            <Header />

        </>
    )
}

export default Home
