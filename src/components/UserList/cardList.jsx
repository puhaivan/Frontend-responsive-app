import styles from './cardList.module.css';

export default function UserCard({ avatar, name, email, birthDate, address, phone, password }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <p>{name}</p>
        <p className={styles.placeholderStyle}>{email}</p>
      </div>
      <div className={styles.info}>
        <p>{birthDate}</p>
        <p className={styles.placeholderStyle}>Birth date</p>
      </div>
      <div className={`${styles.info} ${styles.address}`}>
        <p>{address}</p>
        <p className={styles.placeholderStyle}>Address</p>
      </div>
      <div className={styles.info}>
        <p>{phone}</p>
        <p className={styles.placeholderStyle}>Phone number</p>
      </div>
      <div className={styles.info}>
        <p>{password}</p>
        <p className={styles.placeholderStyle}>Password</p>
      </div>
    </div>
  );
}
