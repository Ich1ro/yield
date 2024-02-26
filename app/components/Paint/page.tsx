import styles from './paint.module.scss';

export default function Paint() {
	return (
		<section className={styles.section}>
			<h1 className={styles.header}>Paint Your Financial Future</h1>
			<p className={styles.text}>{`Earning, Growing, Connecting, Learning - That\'s Living`}</p>
			<div className={styles.line}></div>
			<div className={styles.running_line}></div>
			<div className={styles.content}>
				<div className={styles.left}>
					<p className={styles.content_text}>No more searching for your wallet or mobile phone.</p>
					<p className={styles.content_text_wider}>NFC contactless payment works independently, no batteries, chargers, or phones needed.</p>
				</div>
				<video src='' className={styles.center}></video>
				<div className={styles.right}>
					<p className={styles.content_text}>Contactless payment with YIELD® saves time and is easy.</p>
					<p className={styles.content_text}>Secure, Stylish, Hypoallergenic, and Waterproof.</p>
				</div>
			</div>
		</section>
	);
}
