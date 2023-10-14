import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const initialInputState = { username: '', age: '' }

const AddUser = props => {
	const [userInput, setUserInput] = useState(initialInputState)
	const [error, setError] = useState()

	const userInputHandler = (input, value) => {
		setUserInput(prevState => {
			return { ...prevState, [input]: value }
		})
	}

	const hideModalHandler = () => {
		setError(null)
	}

	const submitForm = e => {
		e.preventDefault()

		if (userInput.username.trim().length === 0) {
			setError({ title: 'Invalid username', content: 'Please enter a valid name and age (non-empty values).' })
			return
		}
		if (userInput.age <= 0 || userInput.age.trim().length === 0) {
			setError({ title: 'Invalid age', content: 'Please enter a valid name and age (non-empty values).' })
			return
		}
		props.onAddUser(userInput)
		setUserInput(initialInputState)
	}

	return (
		<>
			{error && <ErrorModal title={error.title} content={error.content} onClick={hideModalHandler} />}
			<Card>
				<form onSubmit={submitForm} className={styles.form} autoComplete='on'>
					<label htmlFor='username' className={styles.label}>
						Username
					</label>
					<input
						id='username'
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
						id='age'
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
		</>
	)
}

export default AddUser
