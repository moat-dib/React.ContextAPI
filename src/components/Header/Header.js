import styles from './Header.module.css';
export const Header = ({ setInputValue, isCreating, requestAddTask }) => {
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
