import React from 'react'
import '../App.css'
import { Container, Paper, Typography, Box, Button, Grid, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Maximize,
         BlurLinear,
         Pages,
         LabelImportant,
         HdrWeak,
         AspectRatio,
         RecordVoiceOver,
         Nfc,
         Explore
         } from '@material-ui/icons'



const useStyles = makeStyles((theme) => ({
   content:{
       backgroundColor:"#fff",
       height:'350px',
       width:'750px',
       marginTop:150,
       marginLeft:50
   },
   heading:{
       padding:30,
       fontSize:'3rem',
       display:'flex',
       justifyContent:'left',
       width:'700px',
       margin:30,
       fontFamily:'Sans'
     
   },
   para:{
       marginTop:-60,
       marginLeft:70,
       padding:15,
       opacity:0.5,
       width:'650px',
       fontFamily:'Sans-Serif'
   },
   button:{
       backgroundColor:"#1e3799",
       color:"#fff",
       textTransform:"none",
       padding:10,
       width:'200px',
       marginLeft:75,  
       fontFamily:'Sans-Serif',
       letterSpacing:1,
       '&:hover': {
        opacity:0.9,
        backgroundColor:"#1e3799",
     },
    
   },
   root1:{
       marginTop:1000
   },
   icon:{
     color:"#b2bec3",
     textTransform:"none",
     letterSpacing:1,
     marginTop:-2,
     '&:hover': {
      color:"#0984e3"
   },
  },
   heading1:{
     color:"#fff",
     letterSpacing:2,
     fontFamily:'Arial',
     opacity:0.8
  },
    title:{
      margin:30,
      color:"#fff",
      fontFamily:"Sans",
      fontSize:'40px'
    },
    button1:{
      backgroundColor:"#1e3799",
      color:"#fff",
      textTransform:"none",
      padding:15,
      opacity:0.8,
      marginLeft:60,  
      fontFamily:'Sans-Serif',
      '&:hover': {
       opacity:0.9,
       backgroundColor:"#1e3799",
    },
    },
    heading2:{
      color:'#000',
      letterSpacing:2,
     fontFamily:'Arial',
     opacity:0.8
    },
    title1:{
      color:'#000',
      fontFamily:"Sans",
      fontSize:'40px',
      margin:15
    },
    para1:{
      padding:12,
      opacity:0.5,
      width:'500px',
      fontFamily:'Sans-Serif'
    },
    button2:{
      backgroundColor:"#1e3799",
       color:"#fff",
       textTransform:"none",
       padding:10,
       width:'200px',
       fontFamily:'Sans-Serif',
       letterSpacing:1,
       '&:hover': {
        opacity:0.9,
        backgroundColor:"#1e3799",
     },
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
    },
    root2: {
      maxWidth: 400,
      height:450,
    },
    media: {
      height: 200,
      backgroundColor:"#222"
    },
    spacing:{
      padding:40
    },
    title2:{
      fontFamily:"Sans",
      fontSize:'30px',
      margin:5
    },
    para2:{
      marginLeft:20,
      opacity:0.5,
      width:'650px',
      fontFamily:'Sans-Serif'
    },
    card:{
      margin:25
    },
    materialIcon:{
      opacity:0.8,
    },
    para3:{
      opacity:0.5,
      width:'300px',
      fontFamily:'Sans-Serif'
    }

   
  }));

  const defaultProps = {
        borderColor: '#1e3799',
    };
    
function Section() {

    const classes = useStyles()
    return (
        <>
        {/* Section 1  */}
        <Container>
                <Paper className={classes.content}>
                <Box borderTop={2} {...defaultProps}/>
                    <Typography variant="h2" className={classes.heading}> <Maximize />Business solution for ambitios, fast growing brands.</Typography>
                    <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos</p>
                    <Button variant="contained"  className={classes.button}>
                        Start A Project
                    </Button>
                </Paper>          
        </Container>
       
        {/* Section 2 */}
        <Container >
          <Grid container spacing={1} style={{marginTop:160,justifyContent:'center'}} >
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.icon} style={{fontFamily:'sans-serif',fontSize:'1rem'}} variant="subtitle1">MITCHELL and BRIYANT</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography className={classes.icon} variant="subtitle1"><BlurLinear />INTERCOM</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography className={classes.icon} variant="h5"><Pages />sartirous</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography className={classes.icon} variant="subtitle1"  style={{fontFamily:'sans-serif',letterSpacing:2}}><LabelImportant /> HIGHCHARTS</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography className={classes.icon} variant="OVERLINE TEXT" ><HdrWeak /> mixpanel</Typography>
            </Grid>
          </Grid>
        </Container>
        
        {/* Section 3 */}
        <Container>
          <Grid container spacing={1} style={{marginTop:10}}>
            <Grid item xs={5}>
              <Paper style={{backgroundColor:"#222", width:'512px', height:'550px'}}></Paper>
            </Grid>
            <Grid item xs={7}>
            <Paper style={{backgroundColor:"#1e3799", height:'550px'}}>
            <Typography variant="OVERLINE TEXT" className={classes.heading1}><Maximize />OUR SERVICES</Typography>
            <p className={classes.title}>Services we can help you with.</p>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ul class="list">
                    <li>Illustartion & Iconography</li>
                    <li>Motion Design & Animation</li>
                    <li>Mobile App Developement</li>
                  </ul>
              </Grid>
              <Grid item xs={6}>
                <ul class="list">
                  <li>UI/UX Design</li>
                  <li>Research & Discovery</li>
                  <li>Prototyping & Interaction</li>
                  <li>Competitive Analysis</li>
                  <li>Front-End Developement</li>
                </ul>
              </Grid>
            </Grid>
            <Button variant="contained"  className={classes.button1}>
                Challenges are oppurunity in dusguise. Take the challenge!
            </Button>
            </Paper>
            </Grid>
          </Grid>
        </Container>
        
        {/* Section 4 */}
        <Container>
        <Grid container spacing={2} style={{marginTop:50}} >
          <Grid item xs={4}>
          <Typography variant="OVERLINE TEXT" className={classes.heading2}><Maximize />OUR WORK</Typography>
          <p className={classes.title1}>See our recent work.</p>
          <p className={classes.para1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur Quos blanditiis tenetur unde suscipit,</p>
          <Button variant="contained"  className={classes.button2}>
            See all Project
          </Button>
          </Grid>
          <Grid item xs={8}>
          <div className={classes.root}>
            <Paper style={{backgroundColor:'#1e3799', width:'250px', height:'350px', margin:'20px'}} elevation={1} />
            <Paper style={{backgroundColor:'#ffcccc',width:'280px', height:'430px', marginTop:'-20px'}} elevation={1} />
          </div>
          </Grid>
        </Grid>
        </Container>
        
         {/* Section 4 */}
        <Container>
        <Grid container spacing={2} style={{marginTop:50}} >
          <Grid item xs={4}>
          <Card className={classes.root2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
              />
              <CardContent className={classes.spacing}>
              <p style={{opacity:0.5, fontFamily:"Sans-Serif"}}>
                  " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica "
                  </p>
                <Typography className={classes.title2}>
                  Danial Fuggazi 
                </Typography>
               <p>---------</p>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="OVERLINE TEXT" className={classes.heading1} style={{color:"#000", padding:30}}><Maximize />ALL SERVICES</Typography>
            <p style={{color:"#000", marginTop:-8}} className={classes.title}>Making products meaningful.</p>
            <p className={classes.para2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos</p>
            <Grid container className={classes.card} spacing={1}>
              <Grid item xs={6}>
                <AspectRatio className={classes.materialIcon} />
                <h1>Product Design</h1>
                <p className={classes.para3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit . Quos blanditiis tenetur unde suscipit</p>
              </Grid>
              <Grid item xs={6}>
                <RecordVoiceOver className={classes.materialIcon} />
                <h1>Branding and Marketing</h1>
                <p className={classes.para3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit . Quos blanditiis tenetur unde suscipit</p>
              </Grid>
              <Grid item xs={6}>
                <Nfc className={classes.materialIcon} />
                <h1>Custom Developement</h1>
                <p className={classes.para3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit . Quos blanditiis tenetur unde suscipit</p>
              </Grid>
              <Grid item xs={6}>
                <Explore className={classes.materialIcon} />
                <h1>Rapid Prototyping</h1>
                <p className={classes.para3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit . Quos blanditiis tenetur unde suscipit</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box style={{padding:15, marginTop:20}}>
        <Typography variant="OVERLINE TEXT" className={classes.heading1} style={{color:"#000", padding:30}}><Maximize />RECENTLY PUBLISHED</Typography>
            <p style={{color:"#000", marginTop:-5}} className={classes.title}>Interesting Articles Update Daily.</p>
            <p className={classes.para2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos</p>
        </Box>
        </Container>
       </>
    )
        
         
         
        
}

export default Section
