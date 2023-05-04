import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../store/usersSlice';

const UsersList = (props) => {
  const { isFetching, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers({ res: 2 }));
  }, [dispatch]);
  return (
    <>
      {isFetching && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {!isFetching && !error && (
        <section>
          <h2>users list</h2>
          <ol>
            {users.map((user) => (
              <li key={user.login.uuid}>{JSON.stringify(user)}</li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
};

export default UsersList;
