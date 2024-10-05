export const StorageSDK = {
	local: {
		setItem(key, value) {
			localStorage.setItem(key, JSON.stringify(value));
		},
		getItem(key) {
			return JSON.parse(localStorage.getItem(key));
		},
		removeItem(key) {
			localStorage.removeItem(key);
		},
		clear() {
			localStorage.clear();
		},
	},
	session: {
		setItem(key, value) {
			sessionStorage.setItem(key, JSON.stringify(value));
		},
		getItem(key) {
			return JSON.parse(sessionStorage.getItem(key));
		},
		removeItem(key) {
			sessionStorage.removeItem(key);
		},
		clear() {
			sessionStorage.clear();
		},
	},
};
