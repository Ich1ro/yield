'use client';
import Image from 'next/image';
import styles from './mobile-app.module.scss';
import { Button } from '../ui/buttons';

export default function MobileApp() {
	return (
		<section className={styles.section}>
			<div className={styles.main}>
				<h1 className='section_header'>Mobile App</h1>
				<div className={styles.info}>
					<Image
						className={styles.logo}
						src='/icons/logo.svg'
						alt='logo'
						width={0}
						height={0}
						sizes='100%'
					/>
					<div className={styles.buttons}>
						<Button className='social_button'>
							<Image
								className={styles.social}
								src='/icons/apple.svg'
								alt='social'
								width={15}
								height={18}
							/>
							<p>Apple Store</p>
						</Button>
						<Button className='social_button'>
							<Image
								className={styles.social}
								src='/icons/playstore.svg'
								alt='social'
								width={15}
								height={16}
							/>
							<p>Playstore</p>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
