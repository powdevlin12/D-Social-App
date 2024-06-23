import React, { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

const useGetOrientationHook = () => {
	const [orientation, setOrientation] = useState<number | null>(null);

	useEffect(() => {
		checkOrientation();
		ScreenOrientation.addOrientationChangeListener(handleOrientationChange);
		return () => {
			ScreenOrientation.removeOrientationChangeListeners();
		};
	}, []);
	const checkOrientation = async () => {
		const orientation = await ScreenOrientation.getOrientationAsync();
		setOrientation(orientation);
	};
	const handleOrientationChange = (o: any) => {
		setOrientation(o.orientationInfo.orientation);
	};

	return { orientation };
};

export default useGetOrientationHook;
