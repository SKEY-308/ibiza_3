import React from 'react'
import Image from "next/image";

const UserInfo = ({ user }) => {
    return (
        <div className='user-info'>
            <div className="user-info__img">
                <Image width={50} height={50} src={user.img} alt="" />
            </div>
            <div className="user-info__name">
                <span>{user.name}</span>
            </div>
        </div>
    )
}

export default UserInfo
