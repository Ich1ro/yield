'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './moreInfo.module.scss';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './input.css'
import { Button } from '../ui/buttons'

export default function MoreInfo() {
	const [phone, setPhone] = useState('');

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
					<div className={styles.checkbox_block}>
						<div className={styles.top}>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Nexus</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Reserve</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Horizon</span>
								</label>
							</div>
						</div>
						<div className={styles.center}>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Orbit</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Odyssey</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Wealth</span>
								</label>
							</div>
						</div>
						<div className={styles.bottom}>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Mortage</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Crypto</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input type='checkbox' name='' id='' />
									<span>Wearables</span>
								</label>
							</div>
						</div>
					</div>
					<div className={styles.input_container}>
						<div className={styles.title}>Full Name</div>
						<input type='text' placeholder='EX: John Doe'/>
						<div className={styles.title} >Email ID</div>
						<input type='email' placeholder='example123@gmai.com'/>
						<div className={styles.title}>Phone Number</div>
						<PhoneInput
							defaultCountry='us'
							value={phone}
							onChange={phone => setPhone(phone)}
						/>
					</div>
					<div className={styles.details}>By submitting, you will be agreeing to our <b>privacy policy</b> and <b>terms & conditions</b></div>
					<Button className='default_button'>Submit Now</Button>
				</form>
			</div>
		</section>
	);
}
