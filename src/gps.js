export const GpsSDK = {
	getCurrentPosition(successCallback, errorCallback) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
		} else {
			console.warn("Geolocalização não suportada.");
		}
	},
};
