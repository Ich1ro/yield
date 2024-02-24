import React, { useMemo, useState } from 'react';
import styles from './banking.module.scss';
import 'rsuite/Toggle/styles/index.css';
import { Toggle } from 'rsuite';
import { cards } from '@/app/utils/data';
import { Button } from '../ui/buttons';
import Image from 'next/image';
import Calculator from '../Calculator/page';

export default function Banking() {
	return (
		<section id='banking' className={styles.section}>
			<h1 className='section_header'>Banking</h1>
			<div className={styles.title}>
				A Paradigm Shift For Your Financial Portfolio
			</div>
			<div className={styles.subtitle}>
				Your YIELD® Account Offers You More Than Just The Highest Interest Rates
				Available
			</div>
			<div className={styles.sub}>Subscriptions</div>
			<div className={styles.plan}>
				<p>Monthly</p>
				<Toggle arial-label='Switch' size={'lg'} className={styles.toggle} />
				<p>Annually</p>
			</div>
			<div className={styles.cards}>
				{cards.map(card => (
					<div className={styles.card} key={card.accName}>
						<div className={styles.left}>
							<div className={styles.card_header}>
								<h2 className={styles.name}>{card.accName}</h2>
								<h5 className={styles.type}>{card.accType}</h5>
							</div>
							<div className={styles.cost_block}>
								<div className={styles.price_block}>
									<h5 className={styles.cost}>{card.costMonth}</h5>
									<div className={styles.bill}>{card?.billMonth}</div>
								</div>
								<Button className='default_button'>Get Started</Button>
							</div>
						</div>
						<div className={styles.line}></div>
						<div className={styles.right}>
							<div className={styles.details_first}>
								{card.detailsFirst.map(detail => (
									<React.Fragment key={detail}>
										<div className={styles.details}>
											<Image
												src='/images/check-circle.png'
												alt='check'
												width={20}
												height={20}
												className={styles.check_circle}
											/>
											<p className={styles.detail}>{detail}</p>
										</div>
									</React.Fragment>
								))}
							</div>
							<div className={styles.details_second}>
								{card.detailsSecond.map(detail => (
									<React.Fragment key={detail}>
										<div className={styles.details}>
											<Image
												src='/images/check-circle.png'
												alt='check'
												width={20}
												height={20}
												className={styles.check_circle}
											/>
											<p className={styles.detail}>{detail}</p>
										</div>
									</React.Fragment>
								))}
								<div className={styles.addon}>{card?.addon}</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className={styles.header}>Calculate Your Yield</h2>
			<p className={styles.subtitle}>
				Select your account type, enter the amount you will deposit, select the
				term length to see your APY, choose your interest distribution schedule,
				and calculate your yield!
				<br />
				<br />
				You get to decide when you receive your interest payment! Monthly,
				Quarterly, or Annually!
			</p>
			<Calculator />
		</section>
	);
}
