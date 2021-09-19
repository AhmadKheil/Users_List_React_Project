import React from 'react'
import { Container , Button} from 'react-bootstrap'
import { LoremIpsum } from 'react-lorem-ipsum';
import * as Icon from 'react-bootstrap-icons';

function Description()
{
    return (
        <>
            <Container className='desc'>
                <h1>Users List</h1>
                <h4><LoremIpsum p={1}/></h4>
            </Container>
            <Container>
                <center>
                     <Button variant="primary">Read more</Button>{' '}<Button variant="outline-dark"><Icon.Laptop/> Watch demo</Button>
                </center>
            </Container>
        </>
    )
}
export default Description