import styles from './cardList.module.css';

export default function UserCard({ avatar, name, email, birthDate, address, phone, password }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <p><strong>{name}</strong></p>
        <p>{email}</p>
      </div>
      <div className={styles.info}>
        <p><strong>{birthDate}</strong></p>
        <p>Birth date</p>
      </div>
      <div className={styles.info}>
        <p><strong>{address}</strong></p>
        <p>Address</p>
      </div>
      <div className={styles.info}>
        <p><strong>{phone}</strong></p>
        <p>Phone number</p>
      </div>
      <div className={styles.info}>
        <p><strong>{password}</strong></p>
        <p>Password</p>
      </div>
    </div>
  );
}
