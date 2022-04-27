import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"main page"}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <A href={`/users/${user.id}`}>{user.name}</A>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
