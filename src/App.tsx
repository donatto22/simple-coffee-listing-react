import { useEffect, useState } from 'react'
import CoffeeCard from './components/coffeeCard/CoffeeCard'
import type { Coffee } from './modules/coffee'
import './styles.css'

import bgCafe from './assets/bg-cafe.jpg'

const App = () => {
	const [coffees, setCoffees] = useState<Array<Coffee>>()

	const getCoffee = async () => {
		const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
		const data = await response.json()

		setCoffees(data)
	}

	useEffect(() => {
		getCoffee()
	}, [])

	return (
		<>
			<img id='background' src={bgCafe} alt="Background Coffee" />

			<main>
				<div id='principal'>
					<h1>Our Collection</h1>
					<p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
				</div>

				<section>
					{
						coffees?.map(c => <CoffeeCard coffee={c} />)
					}
				</section>
			</main>
		</>
	)
}

export default App