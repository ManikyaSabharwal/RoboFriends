import React from 'react';

const Searchbox = ({seachField, searchChange}) => {
	return (
		<div className='pa3'>
		<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			value = {seachField}
			onChange = {searchChange}
		/>
		</div>
	)
}

export default Searchbox;