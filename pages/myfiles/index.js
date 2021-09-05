import Link from 'next/link';
import styles from '../../styles/files.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {files: data}
    }
}

const MyFile = ({files}) => {
    return ( 
        <div className="myfiles">
            <h1>My File Page</h1>
            {files.map(file => (
                <Link href={'/myfiles/' + file.id} key={file.id}>
                    <a className={styles.single}>
                        <h3>{file.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default MyFile;