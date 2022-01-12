// A landing page for switching from Photop to Photopcopy and all the additional features that (will) exist in the future
// Currently not done
import Link from "next/link";

export default function SwitchPage() {
	return (
		<div>
			<h2>Photopcopy is better.</h2>
			<ul>
				<li>Open source. Fully transparent and no crossed fingers.</li>
				<li>Code is professional and uses frameworks like next.js (react, typescript, webpack)</li>
				<li>No annoying legal shenanigans and no unironic corporate slogans</li>
				<li>Clean and detailed user interface that brings you a refreshing experience</li>
			</ul>
			<Link href="/">Go to photopcopy</Link>
		</div>
	);
}
