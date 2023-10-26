import styles from './page.module.css';
import Image from 'next/image';
import logo from './assets/highrul-logo.png';
import Link from 'next/link';

export default function Home() {
  return (
      <main className="flex flex-col h-screen">
        <div className={styles.mainContainer}>
          <div className="grid place-content-center">
            <div>
              <Image
                src={logo}
                alt="Highrul.dev"
                width="200"
                className="mx-auto" // Add mx-auto class for centering
              />
            </div>
            <div className="divider bg-violet"></div>
            <h1 className="text-5xl text-violet-500">
              <i>Developer Membership System</i>
            </h1>
            <h2 className="text-xl text-violet-300">
              By Highrul.dev | next.js
            </h2>
          </div>
          <div className="flex justify-end">
            <Link href="/login">
              <button className={styles.login}>
                Login &rarr;
              </button>
            </Link>
          </div>
        </div>
      </main>
  )
};
