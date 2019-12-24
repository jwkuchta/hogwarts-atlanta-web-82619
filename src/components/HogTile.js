import React from 'react'

const HogTile = ({hog}) => {
    return (
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        </div>
    )
}

export default HogTile