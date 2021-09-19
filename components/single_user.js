import React , {useContext} from 'react'
import {Col , Card , Image , ListGroup , ListGroupItem , Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import {styleContext , editContext , updatedUserContext} from './context'

function Single({data})
{
    const [styleId, setStyleId] = useContext(styleContext);
    const [userInfo, setUserInfo] = useContext(editContext);
    const [userUpdate, setUserUpdate] = useContext(updatedUserContext)
    
    const handleEdit = (id) => {
        console.log(userInfo)
        const oneuser = [data].map(user => {
            if (user.id === id) {
                return { ...user, disable: false }
            }
            return null
        })
        setUserInfo(oneuser[0])
        setUserUpdate({})
        window.location.href="#edit"
    }

    return (
        <>
            <Col sm={4}>
                <Card style={styleId === data.id.toString() ? { backgroundColor: '#d1e7dd', width: '18rem' } : { width: '18rem' }} className='cardtop' id={data.id} onClick={() => {setStyleId('')}}>
                    <Image style={{height : 286}} src={data.avatar} alt ="" rounded fluid/>
                    <Card.Body>
                        <Card.Title>User Info ({data.id})</Card.Title>
                        <Card.Text>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Vel nullam eleifend vivamus. Augue urna sed velit elit.
                            Malesuada sodales ridiculus sodales. Tempor netus varius mauris.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style = {styleId === data.id.toString() ? {backgroundColor : '#d1e7dd'} : {}}><u>FirstName:</u> {data.id === userUpdate.id ? data.first_name = userUpdate.first_name && userUpdate.first_name : data.first_name}</ListGroupItem>
                        <ListGroupItem style = {styleId === data.id.toString() ? {backgroundColor : '#d1e7dd'} : {}}><u>LastName:</u> {data.id === userUpdate.id ?  data.last_name = userUpdate.last_name && userUpdate.last_name : data.last_name}</ListGroupItem>
                        <ListGroupItem style = {styleId === data.id.toString() ? {backgroundColor : '#d1e7dd'} : {}}><u>Email:</u> {data.id === userUpdate.id ? data.email = userUpdate.email && userUpdate.email : data.email}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <center><Button onClick = {() => handleEdit(data.id)}><Icon.Pencil />{' '} Edit</Button></center>
                    </Card.Body>
                </Card>
            </Col>        
        </>
    )
}
export default Single