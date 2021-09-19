import React from 'react'
import {Layout} from 'antd'
import { LoremIpsum } from 'react-lorem-ipsum';
function About() {
    return (
        <>
            <Layout fluid className='about' id='about'>
                <center><br /><h1 className='h1title'>About Users List Web Site</h1></center>
                <center><LoremIpsum p={2} /></center><br />
                <center><h6>Copyright © 1997 - 2021 · All Rights Reserved</h6></center><br/>
            </Layout>
        </>
    )
}
export default About