import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.back();
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h3>Page Cannot Be Found</h3>
            <p>Go back to the <Link href="/" ><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound;