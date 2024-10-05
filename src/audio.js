export const AudioSDK = {
	async startRecording() {
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					audio: true,
				});
				return new MediaRecorder(stream);
			} catch (error) {
				console.error("Erro ao acessar o microfone:", error);
			}
		} else {
			console.warn("API de áudio não suportada.");
		}
	},
};
