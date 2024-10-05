export const VibrationSDK = {
	vibrate(pattern) {
		if (navigator.vibrate) {
			navigator.vibrate(pattern);
		} else {
			console.warn("Vibração não suportada neste dispositivo.");
		}
	},
};
