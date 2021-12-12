export function setClipboard(text: string) {
	const type = "text/plain";
	const blob = new Blob([text], { type });
	const data = [new ClipboardItem({ [type]: blob })];

	navigator.clipboard.write(data).then(
		function () {
			/* success */
		},
		function () {
			/* failure */
		},
	);
}
