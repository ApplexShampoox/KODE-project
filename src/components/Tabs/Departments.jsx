import UserList from "../UserList/UserList";

const Departments = ({ id }) => {
  let path = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=" + id;
  return (<UserList src={path} />);
}

export default Departments;