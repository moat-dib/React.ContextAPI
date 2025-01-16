import styles from './TaskItem.module.css';
export const TaskItem = ({
	item,
	isEditing,
	enableEditor,
	isDeleting,
	requestDeleteTask,
}) => {
	return (
		<li key={item.id}>
			<button
				className={styles.edit}
				id={item.id}
				disabled={isEditing}
				onClick={({ target }) => enableEditor(target)}
			>
				✎
			</button>
			<p>{item.title}</p>

			<button
				className={styles.close}
				id={item.id}
				disabled={isDeleting}
				onClick={({ target }) => requestDeleteTask(target)}
			>
				✖
			</button>
		</li>
	);
};
