import React from 'react'
import QueueAnim from 'rc-queue-anim';
const Resume= () => {
    return (
        <div>
            <QueueAnim animConfig={{ translateX: [100, 0] }}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
        </div>
    )
}

export default Resume;