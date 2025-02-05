/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useOutsideClick = (target: React.MutableRefObject<null>, callback: () => void) => {
	useEffect(() => {
		if (!target.current) return;
		const clickListener = (event: MouseEvent) => {
			if (target.current === null) return;
			const withinBoundaries = event.composedPath().includes(target.current);
			if (withinBoundaries == false) callback();
		};
		setTimeout(() => document.addEventListener('click', clickListener), 100);
		return () => {
			document.removeEventListener('click', clickListener);
		};
	}, [target]);
};
