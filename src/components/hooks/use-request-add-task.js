import { useState } from 'react';

export const useRequestAddTask = (tasks, inputValue, refreshTasks, setRefreshTasks) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTask = () => {
		setIsCreating(true);
		const nextId = Number(tasks[tasks.length - 1].id) + 1;
		fetch('http://localhost:3004/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: '1',
				id: String(nextId),
				title: inputValue,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Task addded, responce:', response);
				setRefreshTasks(!refreshTasks);
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddTask,
	};
};
