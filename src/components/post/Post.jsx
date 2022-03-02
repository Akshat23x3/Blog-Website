import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg' alt=''/>

        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'> Life</span>

            </div>

            <span className='postTitle'> Lorem ipsum dolor sit amet</span>
            <hr />
            <span className='postDate'> 1 hour ago</span>
        </div>
        <p className='postDesc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat ac felis. Feugiat vivamus at augue eget arcu dictum varius duis at.
        </p>
    </div>
  )
}
