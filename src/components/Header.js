import React from 'react'
import '../App.css'
import {AppBar, Toolbar, IconButton, Typography, Button, List,  ListItem, ListItemText, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Polymer } from '@material-ui/icons'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    icon:{
        margin:15,
        fontSize:40,
    },
    title: {
        fontSize:22,
        letterSpacing:5,
        marginTop:35
    },
    button: {
        width:'20%',
        backgroundColor:'#000',
        color:"#fff",
        '&:hover': {
           backgroundColor:"#000"
        },
      },
    color:{
        backgroundColor:'#1e3799'
    },
    title1:{
        marginTop:-65,
        marginLeft:300
    },
    link:{
        marginTop:-10,
        marginLeft:40,
        fontFamily:'Sans-Serif',
        letterSpacing:1,
        color:"#fff"
    },
    contact:{
        marginLeft:200,
        color:"#fff",
        fontFamily:'Sans-Serif',
    },
    button1:{
        marginLeft:30,
        backgroundColor:"#fff",
        color:'#1e3799',
        textTransform:"none"
    }
    
  }));

function Header() {

    const classes = useStyles()
    return (
        <>
        <div className={classes.root}>
        <AppBar position="static"  className={classes.color} >
           <Button
                variant="contained"
                className={classes.button}
            >
            <Polymer className={classes.icon}/>
            <Typography className={classes.title} variant="OVERLINE TEXT">AGENCIO</Typography>
            </Button>
            <Toolbar className={classes.title1}>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>About</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>Service</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>Work</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>Case</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>Studies</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link href="#" className={classes.link}>Contact</Link></Typography>
            <Typography  variant="OVERLINE TEXT"><Link className={classes.contact}>+ 386 600 888 33</Link></Typography>
            <Button variant="contained" className={classes.button1} >
                Contact Us
            </Button>
            </Toolbar>
        </AppBar>
    </div> 
    </>
    )
}

export default Header
