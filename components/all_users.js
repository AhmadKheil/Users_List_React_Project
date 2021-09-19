import React from 'react'
import {Container , Row} from 'react-bootstrap'
import Single from './single_user'

function Users({users})
{
    return (
        <>
            <Container className='cards' id='cards'>
                <Row>
                    {
                        users.map(user => {
                            return <Single key={user.id} data={user}/>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Users