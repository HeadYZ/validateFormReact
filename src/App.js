import UsersList from './components/UsersList/UsersList'
import AddUser from './components/AddUser/AddUser'
import styles from './App.module.css'
import { useState } from 'react'
function App() {
	const [users, setUsers] = useState([])

	const addUserHandler = userData => {
		setUsers(prevState => [userData, ...prevState])
	}

	return (
		<div className={styles.app}>
			<AddUser onAddUser={addUserHandler} />
			{users.length > 0 && <UsersList users={users} />}
		</div>
	)
}

export default App
