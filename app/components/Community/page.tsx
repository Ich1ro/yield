import { Button } from '../ui/buttons'
import styles from './community.module.scss'

export default function Community() {
	return (
		<section className={styles.section}>
			<h1 className='section_header'>Community</h1>
			<img src="" alt="" />
			<div className={styles.cards}>
				<div className={styles.card}>
					<img src="" alt="" />
					<h3 className={styles.header}>The Rundown</h3>
					<p className={styles.text}>Join to become a founding member of THE YIELD 100®! Tailored experiences for those who choose a road less traveled. From bespoke investment strategies to exclusive private banking each service is a testament to our commitment to financial excellence.</p>
				</div>
				<div className={styles.card}>
					<img src="" alt="" />
					<h3 className={styles.header}>Membership</h3>
					<p className={styles.text}>{`As a member of THE YIELD 100®, you\'re not only part of an intentional community; you're a pioneer in a movement that is redefining capitalism.`}</p>
					<Button>Join The YIELD 100 Now!</Button>
				</div>
				<div className={styles.card}>
					<img src="" alt="" />
					<h3 className={styles.header}>Legacy Redefined</h3>
					<p className={styles.text}>Join to become a founding member of THE YIELD 100®! Tailored experiences for those who choose a road less traveled. From bespoke investment strategies to exclusive private banking each service is a testament to our commitment to financial excellence.</p>
				</div>
			</div>
		</section>
	)
}