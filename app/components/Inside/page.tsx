import styles from './inside.module.scss';

export default function Inside() {
	return (
		<section className={styles.section}>
			<div className={styles.left}>
				<h1 className={styles.header}>{`The Platform, It\'s All Inside.`}</h1>
				<div className={styles.slider}></div>
			</div>
			<div className={styles.right}></div>
		</section>
	);
}
