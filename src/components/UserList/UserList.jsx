import { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard/UserCard";
import SkeletonCard from "./SkeletonCard/SkeletonCard";

const src = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all";

const UserList = () => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios
      .get(src)
      .then(data => setList(data.data.items))
      .then(setLoading(false))
  }, []);

  if (loading) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    )
  }

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