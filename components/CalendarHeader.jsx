import React from 'react'

const CalendarHeader = ({ title, subtitle }) => {

    return (
        <div mb="30px">
            <h2 className='cal-header-title'>
                {title}
            </h2>
            <h5 className='cal-header-sub'>
                {subtitle}
            </h5>
        </div>
    )
}

export default CalendarHeader
