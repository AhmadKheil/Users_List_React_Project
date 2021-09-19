import React , {useState , useContext} from 'react'
import {Container , Row , Col , Form , Button , Alert} from 'react-bootstrap'
import {editContext , updatedUserContext} from './context'

function Edit()
{
    const [userInfo, setUserInfo] = useContext(editContext)
    const [userUpdate, setUserUpdate] = useContext(updatedUserContext)
    const [alert , setAlert] = useState(null)
    const [showMessage , setShowMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userUpdate)
        setUserUpdate(userInfo)
        setShowMessage(true)
        setUserInfo({ ...userInfo, id: '', first_name: '', last_name: '', email: '', avatar: '', disable: true })
        setAlert(<Alert variant= 'success' onClose={() => setShowMessage(false)} dismissible>
                    <Alert.Heading>Update Message</Alert.Heading>
                    <p>
                        Information Updated successfully !
                    </p>
                </Alert>)
    }
    
    return (
        <>
            <Container className='edit' id='edit'>
                <center>
                    <h2><u>Choose the user who you want to update his information</u></h2><br/>
                </center>
                <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                    <Form.Label><b>First name</b></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        value={userInfo.first_name}
                        onChange={(e) => setUserInfo({ ...userInfo , first_name : e.target.value})}
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label><b>Last name</b></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        value={userInfo.last_name}
                        onChange={(e) => setUserInfo({ ...userInfo , last_name : e.target.value})}        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo , email : e.target.value})}
                    />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label><b>Choose your profile image</b></Form.Label>
                            <Form.Control type="file" accept= ".png , .jpg"/>
                    </Form.Group>
                </Row>
                <center>
                <Button type="submit" disabled = {userInfo.id === undefined? true : userInfo.disable} style={{marginBottom : '1%'}}>Update Information</Button>
                </center>
                </Form>
                {showMessage? alert : null}
            </Container>
        </>
    )
}
export default Edit