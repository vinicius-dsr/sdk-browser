export const NotificationSDK = {
	async requestPermission() {
		if ("Notification" in window) {
			return await Notification.requestPermission();
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			console.warn("Notificações não suportadas neste navegador.");
			return null;
		}
	},
	showNotification(title, options) {
		if (Notification.permission === "granted") {
			return new Notification(title, options);
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			console.warn("Permissão para notificações não concedida.");
		}
	},
};
