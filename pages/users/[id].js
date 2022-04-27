import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь c id {user.id}</h1>
        <div>Имя пользователя {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
