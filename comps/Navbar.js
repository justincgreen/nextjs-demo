import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return(
		<nav>
			<div className="logo">
				<Image src="/studio-ghibli.png" width={192} height={108} />
			</div>
			
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/users"><a>User List</a></Link>
		</nav>
	)
}

export default Navbar;