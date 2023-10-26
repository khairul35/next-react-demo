import Image from 'next/image';
import styles from './credit.module.css';
import nextLogo from '../assets/next-logo.png';
import tailwindlogo from '../assets/tailwindcss.png';


const Credit = () => {
    return (
        <div className={styles.mainContainer}>
            <div className="carousel rounded-box">
                <div className="carousel-item w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="bg-white p-2">
                            <Image src={nextLogo} width="300" alt="Next.js by Vercel" />
                        </div>
                        <div className="pl-10 pt-5 text-center">
                            <h2 className="text-4xl">Programming Framework</h2>
                            <div className="divider border-white" />
                            <div>
                                <p>In this project, I&apos;m using Next.js with Typescript Language.</p>
                                <p>
                                    Next.js is an open-source web development framework created by the<br />
                                    private company Vercel providing React-based web applications with<br />
                                    server-side rendering and static website generation.
                                </p>
                                <p className='pt-10'>Find more about Next.js <a href="https://nextjs.org/" className='text-blue-400'>here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="bg-white p-2">
                            <Image src={tailwindlogo} width="300" alt="Next.js by Vercel" />
                        </div>
                        <div className="pl-10 pt-5 text-center">
                            <h2 className="text-4xl">CSS Framework</h2>
                            <div className="divider border-white" />
                            <div>
                                <p>In this project, I&apos;m using Tailwind CSS with daisyui plugin.</p>
                                <p>
                                    Tailwind CSS is an open source CSS framework. The main feature of this library is that,<br />
                                    unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined<br />
                                    classes for elements such as buttons or tables.
                                </p>
                                <p className='pt-10'>Find more about Tailwind CSS <a href="https://tailwindcss.com/" className='text-blue-400'>here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Credit;
