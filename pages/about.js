import Link from 'next/link';
import styles from '../styles/Home.module.css'

const About = () => {
    return ( 
        <div className="about">
            <h1 className={styles.title}>This is About Page</h1>
            <p className={styles.text}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
            <Link href="/"><a className={styles.btn}> Home </a></Link>
        </div>
     );
}
 
export default About;