import React from 'react'

const StarFilled = ({size}) => (
    <ion-icon style={{fontSize: size}} name="star"></ion-icon>
)

const StarEmpty = ({size}) => (
    <ion-icon style={{fontSize: size}} name="star-outline"></ion-icon>
)

// const StarHalf = ({size}) => (
//     <ion-icon style={{fontSize: size}} name="star-half"></ion-icon>
// )

export const Score = ({ stars = 0, users = 0, size = '0' }) => {

    return (
        <section className="score">
        <div>
            {
                [1,2,3,4,5].map(star => star <= stars ? <StarFilled size={size} /> : <StarEmpty size={size} />)
            }
        </div>
        <p>{users} Usuarios </p>
    </section>
    )
}