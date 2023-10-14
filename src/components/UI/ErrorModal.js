import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'

const ErrorModal = props => {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClick}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.content}</p>
				</div>
				<Button className={styles.button} onClick={props.onClick}>
					Close
				</Button>
			</Card>
		</>
	)
}

export default ErrorModal
