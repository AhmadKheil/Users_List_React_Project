import React , {useState , useContext} from 'react';
import { Container , Form , Row , Col , Button , Alert} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { styleContext } from './context'

function Search({users})
{
    const [styleId,setStyleId] = useContext(styleContext)
    const [showMessage, setShowMessage] = useState(false)
    const [headingMessage, setHeadingMessage] = useState('')
    const [message, setMessage] = useState('')
    const [link , setLink] = useState()
    const [id, setId] = useState('')
    const [variant, setVariant] = useState('')
    
    const handlesubmit = (e) => {
        e.preventDefault()
        const ids = users.map(user => {
            return user.id
        })
        for (let i = 0; i < ids.length; i++)
        {
            if(parseInt(id) === ids[i])
            {
                setShowMessage(true)
                setHeadingMessage('Correct Id!')
                setMessage('This id is correct , the search operation was finished successfully!!')
                setLink(<Alert.Link href={'#'+id}> Go to this user</Alert.Link>)
                setVariant('success')
                setStyleId(id)
                console.log(styleId , id)
                setId('')
                return
            }
        }
        
        setShowMessage(true)
        setHeadingMessage('Incorrect Id!')
        setMessage('This id is incorrect , search operation failed, please try another Id !')
        setLink(null)
        setVariant('danger')
        setStyleId(id)
        setId('')
        return
    }
    if (showMessage)
    {
        return (
        <>
            <Container className='search align-items-center'>
                <Row>
                    <Col sm={7}> <h3><u>If you want to seacrh a specific user , enter his id here!</u></h3></Col>
                    <Col sm={5}>
                        <Form className='searchform' onSubmit = {handlesubmit}>
                        <Row className="align-items-center">
                            <Col className="my-1">
                                <Form.Control id="inlineFormInputName" placeholder="Enter ID" type='number' value={id} onChange={(e) => setId(e.target.value)}/>
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit"><Icon.Search />{' '} Search</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Col>
                </Row>
                <br/>
                <Alert variant={variant} onClose={() => setShowMessage(false)} dismissible>
                    <Alert.Heading>{headingMessage}</Alert.Heading>
                    <p>
                        {message + ' '}
                        {link}
                    </p>
                </Alert>
            </Container>
        </>
        )
    }
    else {
        return (
        <>    
            <Container className='search align-items-center'>
                <Row>
                    <Col sm={7}> <h3><u>If you want to seacrh a specific user , enter his id here!</u></h3></Col>
                    <Col sm={5}>
                        <Form className='searchform' onSubmit = {handlesubmit}>
                        <Row className="align-items-center">
                            <Col className="my-1">
                                <Form.Control id="inlineFormInputName" placeholder="Enter ID" type='number' value={id} onChange={(e) => setId(e.target.value)}/>
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit"><Icon.Search />{' '} Search</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}
export default Search;