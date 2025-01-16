import { useState } from 'react';
export const useRequestDeleteTask = (refreshTasks, setRefreshTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteTask = (target) => {
		setIsDeleting(true);
		fetch(`http://localhost:3004/tasks/${target.id}/`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setRefreshTasks(!refreshTasks);
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requestDeleteTask,
	};
};
