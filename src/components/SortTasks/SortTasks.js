import styles from './SortTasks.module.css';
export const SortTasks = ({ sortTasks, setSortTasks, refreshTasks, setRefreshTasks }) => {
	const changeCheckbox = () => {
		setSortTasks(!sortTasks);
		setRefreshTasks(!refreshTasks);
	};
	return (
		<div className={styles.sortDiv}>
			{' '}
			<input
				type="checkbox"
				checked={sortTasks}
				onChange={changeCheckbox}
				placeholder="SortTasks"
			/>
			<span>{sortTasks ? 'Sorting ON' : 'Sorting OFF'}</span>
		</div>
	);
};
