import { Button } from '../ui/buttons'
import styles from './accessInStyle.module.scss';

export default function AccessInStyle() {
	return (
		<section className={styles.section}>
			<video src=''></video>
			<div className={styles.content}>
				<h1 className={styles.header}>Access in Style</h1>
				<p className={styles.text}>Safe - easy - contactless. Ring2Pay with integrated payment function (NFC) is made of high-quality ceramic. Neither water nor dust can harm it. It is scratch resistant and hypoallergenic.</p>
				<Button className='default_button'>Join The Waitlist</Button>
			</div>
		</section>
	);
}
