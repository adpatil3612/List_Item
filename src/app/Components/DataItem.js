import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

export const DataItem = (props) => {
    const {item, likeListener, dislikeListener} = props
    return(
        <>
        <div className = 'list-element'>
            <Button className='icon-button' id={item.id} onClick = {likeListener} size='tiny'>
                <Icon name='thumbs up outline' id={item.id}/> 
                <span className='icon-like' id={item.id}>
                    {item.like}
                </span>
            </Button>
            <Button className='icon-button' id={item.id} onClick = {dislikeListener} size='tiny'>
                <Icon name='thumbs down outline' id={item.id}/>
                <span className={'icon-dislike'} id={item.id}>
                    {item.dislike}
                </span>
            </Button>
            <div className='description'>
                <h3><strong>{item.description}</strong></h3>
            </div>
        </div>
        <hr></hr>
        </>
    )
}
