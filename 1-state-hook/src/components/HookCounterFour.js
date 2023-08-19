import React, { useState } from 'react'

function HookCounterFour() {

	const [items, setItems] = useState([])

	///seee how to add a value to a array in hooks :)
	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: items.length + 1
			}
		])
	};

	// console.log("Test");

	return (

		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour
