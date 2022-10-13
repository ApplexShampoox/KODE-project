import UserList from "../UserList/UserList";

const Departments = ({ id, favorite }) => {
  let path = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=" + id;
  return (<UserList src={path} favorite={favorite} />);
}

export default Departments;