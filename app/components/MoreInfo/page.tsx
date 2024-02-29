import Image from 'next/image';
import styles from './moreInfo.module.scss';

export default function MoreInfo() {
	return (
		<section className={styles.section}>
			<Image
				className={styles.background}
				src='/images/form-background.png'
				alt='background'
				width={0}
				height={0}
				sizes='100%'
			/>
			<div className={styles.elipse}></div>
			<div className={styles.main}>
				<h1 className='section_header'>More Info</h1>
				<h2 className={styles.header}>Join The Yield Waitlist</h2>
				<form action='' className={styles.form}>
					<h3 className={styles.form_header}>Get More Info</h3>
					<div className={styles.button_block}></div>
					<div className={styles.input_container}>
						<div className={styles.title}>Full Name</div>
						<input type='text' />
						<div className={styles.title}>Email ID</div>
						<input type='email' />
						<div className={styles.title}>Phone Number</div>
						<input type='phone' />
					</div>
				</form>
			</div>
		</section>
	);
}
