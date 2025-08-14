import React from 'react'
import ButtonComponent from './ButtonComponent'

const list = ["all", "sports", "news", "movies", "documentaries", "Gaming", "Music"]

const ButtonList = () => {
    return (
        <div className='flex'>
            {list.map(item => (
                <ButtonComponent key={item} name={item} />
            ))}
        </div>
    )
}

export default ButtonList
