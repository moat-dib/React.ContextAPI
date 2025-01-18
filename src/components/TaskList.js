import { useState } from 'react';
import { TaskListContext } from './TaskListContext.js';
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
	const ContextObject = {
		isEditing,
		isLoading,
		isCreating,
		isDeleting,
	};
	return (
		<TaskListContext.Provider value={ContextObject}>
			<div className={styles.container}>
				<Header setInputValue={setInputValue} requestAddTask={requestAddTask} />

				<ul className={styles.list} disabled={isEditing}>
					{isLoading ? (
						<div className="loader"></div>
					) : (
						tasks.map((item) => (
							<TaskItem
								item={item}
								enableEditor={enableEditor}
								requestDeleteTask={requestDeleteTask}
							/>
						))
					)}
				</ul>
				<Footer
					editingTitle={editingTitle}
					setEditingTitle={setEditingTitle}
					requestUpdateTask={requestUpdateTask}
				/>
				<SortTasks
					sortTasks={sortTasks}
					setSortTasks={setSortTasks}
					refreshTasks={refreshTasks}
					setRefreshTasks={setRefreshTasks}
				/>
			</div>
		</TaskListContext.Provider>
	);
};
