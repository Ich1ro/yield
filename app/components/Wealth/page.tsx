import { Button } from '../ui/buttons'
import styles from './wealth.module.scss';

export default function Wealth() {
	return (
		<section className={styles.section}>
			<h1 className='section_header'>Wealth</h1>
			<div className={styles.main}>
				<div className={styles.left}>
					<h3 className={styles.title}>Financial Strategies for a Fulfilling Life</h3>
					<p className={styles.text}>{`When you have long-term financial goals, you need a plan. The right plan helps you feel good about the future today. That\'s what you get with Yield`}<sup>®</sup></p>
					<div className={styles.img_block}>
						<div className={styles.img_left}>
							<div className={styles.first}>
								<div className={styles.img}></div>
								<p className={styles.details}>Protect Your Life</p>
							</div>
							<div className={styles.second}>
								<div className={styles.img}></div>
								<p className={styles.details}>Manage Your Wealth</p>
							</div>
						</div>
						<div className={styles.img_right}>
						<div className={styles.first}>
								<div className={styles.img}></div>
								<p className={styles.details}>Invest In Your Health</p>
							</div>
							<div className={styles.second}>
								<div className={styles.img}></div>
								<p className={styles.details}>Grow Your Business</p>
							</div>
						</div>
					</div>
				</div>
				<img src='' alt='' />
			</div>
			<Button className='default_button'>Join The Waitlist</Button>
		</section>
	);
}
