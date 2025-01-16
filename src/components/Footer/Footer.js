import styles from './Footer.module.css';
export const Footer = ({
	editingTitle,
	setEditingTitle,
	isEditing,
	requestUpdateTask,
}) => {
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
