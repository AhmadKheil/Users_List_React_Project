import React from 'react'
import { Container} from 'react-bootstrap'
import { LoremIpsum } from 'react-lorem-ipsum';
function About() {
    return (
        <>
            <Container fluid className='about' id='about'>
                <center><br /><h1 className='h1title'>About Users List Web Site</h1></center>
                <center><LoremIpsum p={2} /></center><br />
                <center><h6>Copyright © 1997 - 2021 · All Rights Reserved</h6></center><br/>
            </Container>
        </>
    )
}
export default About