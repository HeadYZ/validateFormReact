import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'

const initialInputState = { username: '', age: '' }

const AddUser = props => {
	const [userInput, setUserInput] = useState(initialInputState)

	const userInputHandler = (input, value) => {
		setUserInput(prevState => {
			return { ...prevState, [input]: value }
		})
	}

	const submitForm = e => {
		e.preventDefault()

		if (userInput.username.trim().length === 0) return
		if (userInput.age <= 0 || userInput.age.trim().length === 0) return
		props.onAddUser(userInput)
		setUserInput(initialInputState)
	}

	return (
		<Card>
			<form onSubmit={submitForm} className={styles.form}>
				<label htmlFor='username' className={styles.label}>
					Username
				</label>
				<input
					type='text'
					value={userInput.username}
					onChange={e => {
						userInputHandler('username', e.target.value)
					}}
					className={styles.input}
				/>
				<label htmlFor='age' className={styles.label}>
					Age (Years)
				</label>
				<input
					type='number'
					value={userInput.age}
					min='1'
					onChange={e => {
						userInputHandler('age', e.target.value)
					}}
					className={styles.input}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
