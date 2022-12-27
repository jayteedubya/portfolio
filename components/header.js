import styles from '../styles/Header.module.css';
import Link from 'next/link';
export default function Header() {
    return (
        <div className={styles.header}>
            <h1> Jake's Portfolio </h1>
            <ul>
                <li className={styles['header-list']}><Link href='/'> home </Link></li>
                <li className={styles['header-list']}><Link href='/aboutme'> about me </Link></li>
                <li className={styles['header-list']}><Link href='/resume'>resume & contact info </Link></li>
                <li className={styles['header-list']}><Link href='/'> blog (under construction) </Link></li>
            </ul>
        </div>
    )
}