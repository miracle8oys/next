import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/sm.png" width={112} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/myfiles"><a>MyFiles</a></Link>
        </nav>
     );
}
 
export default Navbar;