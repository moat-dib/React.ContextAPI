import styles from './Footer.module.css';
import { useContext } from 'react';
import { TaskListContext } from '../TaskListContext';
export const Footer = ({ editingTitle, setEditingTitle, requestUpdateTask }) => {
	const { isEditing, isLoading, isCreating, isDeleting } = useContext(TaskListContext);
	return (
		<div className={styles.footer}>
			<h2>Manage your Tasks</h2>

			<label
				id={editingTitle}
				onInput={({ target }) => setEditingTitle(target.value)}
			>
				<input type="text" id={editingTitle} disabled={!isEditing} />
			</label>
			<button
				className={styles.addBtn}
				disabled={!isEditing}
				onClick={requestUpdateTask}
			>
				Save
			</button>
		</div>
	);
};
