"use client";

import { FC, useState, useEffect } from "react";

import { useFetch } from "@/global/hooks/useFetch";
import { USER_PATH } from "@/global/routes";

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const Users: FC = () => {
  const [users, setUsers] = useState<Array<User> | []>([]);
  const { loading, data } = useFetch(USER_PATH);

  useEffect(() => {
    if (loading) return;
    // TODO: think about error handling
    // if (error) return
    if (!data) return;
    console.log(data);
    setUsers(data);
  }, [loading, data]);

  return (
    <section>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Users
      </h3>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </section>
  );
};

export default Users;
