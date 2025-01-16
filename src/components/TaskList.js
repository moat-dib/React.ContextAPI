import { useState } from 'react';
import { useRequestGetTasks } from './hooks/use-request-get-tasks';
import { useRequestAddTask } from './hooks/use-request-add-task';
import { useRequestDeleteTask } from './hooks/use-request-delete-task';
import { useRequestUpdateTask } from './hooks/use-request-update-task';
import { Header } from './Header/Header';
import { SortTasks } from './SortTasks/SortTasks';
import { TaskItem } from './Task/TaskItem';
import { Footer } from './Footer/Footer';
import styles from './TaskList.module.css';

export const TaskList = () => {
	const [sortTasks, setSortTasks] = useState(false);
	const [editingTitle, setEditingTitle] = useState('');
	const [editingNum, setEditingNum] = useState('0');
	const [inputValue, setInputValue] = useState();
	const [isEditing, setIsEditing] = useState(false);
	const [refreshTasks, setRefreshTasks] = useState(false);
	const { isLoading, tasks } = useRequestGetTasks(sortTasks, refreshTasks);
	const { isCreating, requestAddTask } = useRequestAddTask(
		tasks,
		inputValue,
		refreshTasks,
		setRefreshTasks,
	);
	const { isDeleting, requestDeleteTask } = useRequestDeleteTask(
		refreshTasks,
		setRefreshTasks,
	);
	const { requestUpdateTask } = useRequestUpdateTask(
		editingNum,
		editingTitle,
		setEditingNum,
		setEditingTitle,
		refreshTasks,
		setRefreshTasks,
	);
	const enableEditor = (target) => {
		setIsEditing(true);
		setEditingNum(Number(target.id));
		setEditingTitle('');
	};
	return (
		<div className={styles.container}>
			<Header
				setInputValue={setInputValue}
				isCreating={isCreating}
				requestAddTask={requestAddTask}
			/>
			<ul className={styles.list} disabled={isEditing}>
				{isLoading ? (
					<div className="loader"></div>
				) : (
					tasks.map((item) => (
						<TaskItem
							item={item}
							isEditing={isEditing}
							enableEditor={enableEditor}
							isDeleting={isDeleting}
							requestDeleteTask={requestDeleteTask}
						/>
					))
				)}
			</ul>
			<Footer
				editingTitle={editingTitle}
				setEditingTitle={setEditingTitle}
				isEditing={isEditing}
				requestUpdateTask={requestUpdateTask}
			/>
			<SortTasks
				sortTasks={sortTasks}
				setSortTasks={setSortTasks}
				refreshTasks={refreshTasks}
				setRefreshTasks={setRefreshTasks}
			/>
		</div>
	);
};
