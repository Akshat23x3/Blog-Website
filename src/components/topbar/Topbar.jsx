import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'


export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className='topleft'>
                <i class="topicon fa-brands fa-facebook-square"></i>
                <i class="topicon fa-brands fa-instagram-square"></i>
                <i class="topicon fa-brands fa-twitter-square"></i>
                <i class="topicon fa-brands fa-pinterest-square"></i>
            </div>
            <div className='topcenter'>
                <ul className='toplist'>
                    <li className='toplistitem' >
                        <Link className='link' to='/'> HOME </Link>
                    </li>

                    <li className='toplistitem' >
                        <Link className='link' to='/'> ABOUT </Link>
                    </li>

                    <li className='toplistitem' >
                        <Link className='link' to='/'> CONTACT </Link>
                    </li>


                    <li className='toplistitem' >
                        <Link className='link' to='/write'> WRITE </Link>
                    </li>
                    <li className='toplistitem' >
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className='topright'>
                {
                    user ? (
                        <img className='topImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc9Tm8MQl-CdVOClSI6_j5Wpsg2zs8qA3dw&usqp=CAU' alt='' />

                    ) : (
                        <ul className='toplist'>
                            <li className='toplistitem' >
                                <Link className='link' to="/login"> LOGIN </Link>
                            </li>

                            <li className='toplistitem'>
                                <Link className='link' to='/register'> REGISTER </Link>
                            </li>
                        </ul>

                        
                    )

                }
                <i class="searchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
