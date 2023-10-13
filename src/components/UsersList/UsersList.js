import UsersListItem from './UsersListItem'
import Card from '../UI/Card'
import styles from './UsersList.module.css'
const UsersList = props => {
	return (
		<Card className={styles['margin-top']}>
			<ul className={styles.list}>
				{props.users.map(user => (
					<UsersListItem username={user.username} age={user.age} />
				))}
			</ul>
		</Card>
	)
}

export default UsersList
