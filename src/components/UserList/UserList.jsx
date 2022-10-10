import { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard/UserCard";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import NetworkError from "./../FailureScreen/NetworkError";

const UserList = ({ src }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(src)
      .then(data => {
        setList(data.data.items);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
      })
  }, [src]);

  if (error) {
    return <NetworkError />
  };

  if (loading) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    )
  };

  return (<>
    {
      list.map(user => {
        return (
          <UserCard
            key={user.id}
            src={user.avatarUrl}
            name={user.firstName + " " + user.lastName}
            nickname={user.userTag}
            specialty={user.position}
            birthday={new Date(user.birthday).toLocaleString("ru", {
              month: 'short',
              day: 'numeric',
              timezone: 'UTC'
            }).slice(0, -1)} />
        );
      }
      )
    }
    < hr />
  </>
  )
}
export default UserList;