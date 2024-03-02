import Image from 'next/image';
import styles from './burger.module.scss';
import { Button } from '../ui/buttons';

export default function Burger() {
	return (
		<div className={styles.popup}>
			<div className={styles.empty}></div>
			<div className={styles.center}>
				<a>YIELD</a>
				<a>Banking</a>
				<a>Spend</a>
				<a>Wealth</a>
				<a>Mortgage</a>
				<a>Crypto</a>
				<a>Community</a>
				<a>Security</a>
				<Button className='default_button'>Join the Waitlist</Button>
			</div>
			<div className={styles.social}>
				<div className={styles.icons}>
					<div className={styles.icon}>
						<Image src='/icons/x.svg' alt='apple' width={30} height={27} />
					</div>
					<div className={styles.icon}>
						<Image
							src='/icons/linkedin.svg'
							alt='apple'
							width={40}
							height={40}
						/>
					</div>
					<div className={styles.icon}>
						<Image
							src='/icons/youtube.svg'
							alt='apple'
							width={40}
							height={40}
						/>
					</div>
					<div className={styles.icon}>
						<Image
							src='/icons/facebook.svg'
							alt='apple'
							width={40}
							height={40}
						/>
					</div>
					<div className={styles.icon}>
						<Image
							src='/icons/instagram.svg'
							alt='apple'
							width={40}
							height={40}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
