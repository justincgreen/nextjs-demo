import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Users.module.css'

export const getStaticProps = async () => {
	const response = await fetch('http://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	
	return {
		props: { users: data }
	}
}

const Users = ({ users }) => {
	return(
		<>
			<Head>
				<title>User List | Users</title>
				<meta  name="keywords" content="users" />
			</Head>		
			<div>
				<h1>All Users</h1>
				{users.map((user) => (
					<Link href={'/users/' + user.id} key={user.id}>
						<a className={styles.single}>
							<h3>{user.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	)
}

export default Users;