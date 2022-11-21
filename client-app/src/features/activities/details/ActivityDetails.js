import React from 'react'
import { Button,Card,Image } from 'semantic-ui-react'


function ActivityDetails(props) {
  return (
    <Card fluid>
        <Image src={`/assets/categoryImages/${props.activity.category}.jpg`} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.activity.title}</Card.Header>
        <Card.Meta>
            <span>{props.activity.date}</span>
        </Card.Meta>
        <Card.Description>
            {props.activity.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths='2'>
                <Button onClick={() => props.openForm(props.activity.id)} basic color='blue' content='Edit'/>
                <Button onClick={props.cancleActivity} basic color='grey' content='Cancel'/>
            </Button.Group>
        </Card.Content>
    </Card>
  )
}

export default ActivityDetails
