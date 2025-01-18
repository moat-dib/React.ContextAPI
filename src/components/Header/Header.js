import styles from './Header.module.css';
import { useContext } from 'react';
import { TaskListContext } from '../TaskListContext';
export const Header = ({ setInputValue, requestAddTask }) => {
	const { isEditing, isLoading, isCreating, isDeleting } = useContext(TaskListContext);
	return (
		<div className={styles.header}>
			<h2>Task List</h2>
			<label onInput={({ target }) => setInputValue(target.value)}>
				<input type="text" id="newTaskInput" placeholder="Add new task..." />
			</label>
			<button
				disabled={isCreating}
				onClick={requestAddTask}
				className={styles.addBtn}
			>
				Add
			</button>
		</div>
	);
};
