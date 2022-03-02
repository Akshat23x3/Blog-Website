import React from 'react'
import './singlePost.css'

export default function singlePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src='https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=pexels-travis-blessing-1363876.jpg&fm=jpg' className='singlePostImg' />
                <h1 className='singlePostTitle'>
                    Lorem Ipsum is simply dummy text of the printing
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid  fa-trash-can"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author : <b> Safak </b>
                    </span>
                    <span className='singlePostDate'>
                        1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum nunc arcu, vel consectetur felis fringilla vel. Nulla consectetur mollis felis, vitae imperdiet erat tempor eget. Cras vitae libero fringilla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum nunc arcu, vel consectetur felis fringilla vel. Nulla consectetur mollis felis, vitae imperdiet erat tempor eget. Cras vitae libero fringilla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum nunc arcu, vel consectetur felis fringilla vel. Nulla consectetur mollis felis, vitae imperdiet erat tempor eget. Cras vitae libero fringilla.  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum nunc arcu, vel consectetur felis fringilla vel. Nulla consectetur mollis felis, vitae imperdiet erat tempor eget. Cras vitae libero fringilla.
                </p>
            </div>
        </div>
    )
}
