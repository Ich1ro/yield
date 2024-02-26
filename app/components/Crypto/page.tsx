import { Button } from '../ui/buttons'
import styles from './crypto.module.scss';

export default function Crypto() {
	return (
		<section className={styles.section}>
			<h1 className='section_header'>Crypto</h1>
			<div className={styles.main}>
				<video src=''></video>
				<div className={styles.content}>
					<h1 className={styles.header}>Manage your crypto assets & Perform a Fee-Free Instant Exchange to FIAT.</h1>
					<p className={styles.text}>Yield makes crypto easily spendable, giving the account holder the flexibility to transact anywhere, anytime...</p>
					<div className={styles.item}>
						<img src='/images/check-circle.png' alt='' />
						<p className={styles.details}>View your digital assets/wallet</p>
					</div>
					<div className={styles.item}>
						<img src='' alt='' />
						<p className={styles.details}>
							Instant fee-free exchange crypto to fiat, deposited directly to
							your Yield account and available to spend.
						</p>
					</div>
					<div className={styles.item}>
						<img src='' alt='' />
						<p className={styles.details}>Purchase Crypto</p>
					</div>
					<Button className='default_button'>Join The Waitlist</Button>
				</div>
			</div>
		</section>
	);
}
