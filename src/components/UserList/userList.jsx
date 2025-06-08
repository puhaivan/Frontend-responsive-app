import UserCard from './cardList.jsx';
import styles from './cardList.module.css';

const users = [
  {
    avatar: '/images/1.jpg',
    name: 'Cameron Williamson',
    email: 'c@company.com',
    birthDate: '5/6/1992',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    phone: '(889) 907-1960',
    password: 'Myspace1',
  },
  {
    avatar: '/images/2.jpg',
    name: 'Leslie Alexander',
    email: 'leslie.alex@domain.com',
    birthDate: '3/12/1987',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    phone: '(912) 444-1221',
    password: 'Sunshine88',
  },
  {
    avatar: '/images/3.jpg',
    name: 'Savannah Nguyen',
    email: 'sav.nguyen@coolmail.com',
    birthDate: '11/21/1990',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    phone: '(682) 310-1665',
    password: 'Coffee123',
  },
  {
    avatar: '/images/4.jpg',
    name: 'Jenny Wilson',
    email: 'jennywilson@mail.com',
    birthDate: '7/8/1989',
    address: '6391 Elgin St. Celina, Delaware 10299',
    phone: '(205) 555-0121',
    password: 'Jenny@2023',
  },
  {
    avatar: '/images/5.jpg',
    name: 'Darlene Robertson',
    email: 'darlene.rob@safe.com',
    birthDate: '9/30/1985',
    address: '1234 Main St. Springfield, Illinois 62704',
    phone: '(725) 422-1994',
    password: 'HelloWorld1',
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
