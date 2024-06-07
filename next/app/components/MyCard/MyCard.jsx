'use client'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Styles from './MyCard.module.css'
import { POST } from '@/api/api-utils'
import {endpoints} from '@/api/config'
import { useState } from 'react'

export const MyCard = (props) => {

  const [state, setState] = useState(props.data.channels.state)
  console.log(state)
  const handleClick = async () => {
    const res = await POST(endpoints.switch, props.data.channels)
    setState(res.result)
    console.log(state)
  }

  return (
    <Card className={Styles["card"]}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Тип: {props.data.type}</ListGroup.Item>
        <ListGroup.Item>{props.data.state}</ListGroup.Item>
        <ListGroup.Item>{props.data.voltage}</ListGroup.Item>
      </ListGroup>
      {state ? 
          <Card.Body className={Styles['card__on_body']}>
          <Button variant="light">
            <img className={Styles['card__on']} src='./images/light__off.svg' onClick={handleClick}/>
          </Button>
        </Card.Body> :
        
        <Card.Body className={Styles['card__off_body']}>
        <Button variant="light">
          <img className={Styles['card__off']} src='./images/light__off.svg' onClick={handleClick}/>
        </Button>
      </Card.Body>
    
    }
    </Card>
  )
}
