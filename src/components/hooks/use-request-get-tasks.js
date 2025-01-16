import { useEffect, useState } from 'react';

export const useRequestGetTasks = (sortTasks, refreshTasks) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3004/tasks')
			.then((loadedData) => loadedData.json())
			.then((loadedTasks) => {
				if (sortTasks) {
					const sortedTasks = loadedTasks.sort(function (a, b) {
						if (a.title < b.title) {
							return -1;
						}
						if (a.title > b.title) {
							return 1;
						}
						return 0;
					});
					setTasks(sortedTasks);
				} else {
					setTasks(loadedTasks);
				}
			})
			.finally(() => setIsLoading(false));
	}, [refreshTasks]);
	return {
		isLoading,
		tasks,
	};
};
