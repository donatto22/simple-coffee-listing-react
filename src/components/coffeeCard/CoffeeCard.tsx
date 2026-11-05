import type { FC } from 'react'
import type { Coffee } from '../../modules/coffee'
import './coffeeCard.css'

import starFill from '../../assets/Star_fill.svg'
import star from '../../assets/Star.svg'

interface CoffeeCardProps {
    coffee: Coffee
}

const CoffeeCard: FC<CoffeeCardProps> = ({ coffee }) => {
    return (
        <div>
            <div className='coffeeImage'>
                {coffee.popular == true && <p className='popularTag'>Popular</p>}
                <img src={coffee.image} alt={coffee.name} />
            </div>

            <div className='coffeeName'>
                <h3>{coffee.name}</h3>
                <p className='coffeePrice'>{coffee.price}</p>
            </div>

            <div className='coffeeDetails'>
                {
                    coffee.rating != null ?
                        <img src={starFill} alt="Rating" /> :
                        <img src={star} alt="Rating" />
                }
                <div>
                    <p>{coffee.rating}</p>
                    {
                        coffee.votes == 0 ?
                            <p className='coffeeVotes'>No ratings</p> :
                            <p className='coffeeVotes'>({coffee.votes} votes)</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard