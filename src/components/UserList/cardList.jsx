import styles from './cardList.module.css';

export default function UserCard({ avatar, name, email, birthDate, address, phone, password }) {
  return (
   <div className={styles.card}>
  <div className={styles.userInfo}>
    <img src={avatar} alt={name} className={styles.avatar} />
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.placeholderStyle}>{email}</p>
    </div>
  </div>
  <div className={`${styles.info} ${styles.birthDate}`}>
    <p className={styles.value}>{birthDate}</p>
    <p className={styles.placeholderStyle}>Birth date</p>
  </div>
  <div className={`${styles.info} ${styles.adress}`}>
    <p className={styles.value}>{address}</p>
    <p className={styles.placeholderStyle}>Address</p>
  </div>
  <div className={`${styles.info} ${styles.number}`}>
    <p className={styles.value}>{phone}</p>
    <p className={styles.placeholderStyle}>Phone number</p>
  </div>
  <div className={`${styles.info} ${styles.password}`}>
    <p className={styles.value}>{password}</p>
    <p className={styles.placeholderStyle}>Password</p>
  </div>
</div>

  );
}