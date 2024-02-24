'use client';
import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import { Button } from '../ui/buttons';
import Image from 'next/image'

export default function Header() {
	const [showText, setShowText] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Image src='/main-logo.png' alt='main logo' width={114} height={28}/>
				<div className={styles.links}>
					<Link href='' className={styles.nav_item}>
						Banking
					</Link>
					<Link href='' className={styles.nav_item}>
						Spend
					</Link>
					<Link href='' className={styles.nav_item}>
						Wealth
					</Link>
					<Link href='' className={styles.nav_item}>
						Mortgage
					</Link>
					<Link href='' className={styles.nav_item}>
						Crypto
					</Link>
					<Link href='' className={styles.nav_item}>
						Community
					</Link>
					<Link href='' className={styles.nav_item}>
						Security
					</Link>
				</div>
				<Button className='header_button'>Join the Waitlist</Button>
			</nav>
			<video
				className={styles.desktop_video}
				autoPlay
				muted
				playsInline
				onEnded={() => setShowText(true)}
			>
				<source src='/videos/header-desktop.mp4' type='video/mp4' />
			</video>
			<video
				className={styles.mobile_video}
				autoPlay
				muted
				playsInline
				onEnded={() => setShowText(true)}
			>
				<source src='/videos/header-mobile.mp4' type='video/mp4' />
			</video>
			{showText && (
				<div className={styles.header_details}>
					<h1 className={styles.header_title}>
						Your Financial
						<br />
						Renaissance Awaits
					</h1>
					<div className={styles.header_text}></div>
				</div>
			)}
		</header>
	);
}
