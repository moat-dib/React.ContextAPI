export const useRequestUpdateTask = (
	editingNum,
	editingTitle,
	setEditingNum,
	setEditingTitle,
	refreshTasks,
	setRefreshTasks,
) => {
	const requestUpdateTask = () => {
		fetch(`http://localhost:3004/tasks/${editingNum}/`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: '1',
				id: editingNum,
				title: editingTitle,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {})
			.finally(() => {
				setEditingNum('0');
				setEditingTitle('');
				//setIsEditing(false);
				setRefreshTasks(!refreshTasks);
			});
	};
	return {
		requestUpdateTask,
	};
};
