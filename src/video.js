export const VideoSDK = {
	async startVideo() {
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				return stream;
			} catch (error) {
				console.error("Erro ao acessar a câmera:", error);
			}
		} else {
			console.warn("API de vídeo não suportada.");
		}
	},
};
