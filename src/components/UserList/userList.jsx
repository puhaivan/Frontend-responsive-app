import UserCard from './cardList.jsx';
import styles from './cardList.module.css';

const users = [
  {
    avatar: 'link-to-img.jpg',
    name: 'Cameron Williamson',
    email: 'c@company.com',
    birthDate: '5/6/1992',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    phone: '(889) 907-1960',
    password: 'Myspace1',
  },
];

export default function UserList() {
  return (
    <div className={styles.userList}>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}
