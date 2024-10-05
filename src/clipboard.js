export const ClipboardSDK = {
	async copyToClipboard(text) {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(text);
				console.log("Texto copiado para a área de transferência.");
			} catch (error) {
				console.error("Falha ao copiar para a área de transferência.", error);
			}
		} else {
			console.warn("API Clipboard não suportada.");
		}
	},
	async readFromClipboard() {
		if (navigator.clipboard) {
			try {
				const text = await navigator.clipboard.readText();
				console.log("Texto copiado da área de transferência:", text);
				return text;
			} catch (error) {
				console.error("Falha ao ler da área de transferência.", error);
			}
		} else {
			console.warn("API Clipboard não suportada.");
		}
	},
};
