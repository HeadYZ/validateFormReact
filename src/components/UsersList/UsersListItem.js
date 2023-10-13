import styles from './UsersListItem.module.css'

const UsersListItem = props => {
	return (
		<li className={styles['list-item']}>
			{props.username} ({props.age} years old)
		</li>
	)
}

export default UsersListItem
