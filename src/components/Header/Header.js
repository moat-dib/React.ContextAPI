import styles from './Header.module.css';
import { useContext } from 'react';
import { HeaderContext } from '../HeaderContext';
export const Header = (setInputValue, requestAddTask) => {
	const { isEditing, isCreating, isDeleting } = useContext(HeaderContext);
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
