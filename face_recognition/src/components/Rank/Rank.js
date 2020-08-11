import React from 'react'

export default function Rank({ name, entries }) {
    return (
        <div>
            <div className="white f3">
                {`Hi ${name}, Welcome to Face Recognition `}
            </div>
            <div className="white f1">
                {` You have searched for ${entries} times. `}
            </div>
        </div>
    )
}
