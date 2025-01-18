import styles from './TaskItem.module.css';
import { useContext } from 'react';
import { TaskListContext } from '../TaskListContext';
export const TaskItem = ({ item, enableEditor, requestDeleteTask }) => {
	const { isEditing, isLoading, isCreating, isDeleting } = useContext(TaskListContext);
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
