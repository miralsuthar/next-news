import {useRouter} from 'next/router';

import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/creator')}>Creator</div>
            <div onClick={() => window.location.href = 'https://twitter.com/miral182000'}>Twitter</div>
        </div>
    )
}