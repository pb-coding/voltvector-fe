"use client";

import { useState, useEffect } from "react";
import useAxiosPrivate from "@/global/auth/useAxiosPrivate";
import { USER_PATH } from "@/global/auth/constants";

interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  creationDate: Array<number>;
  fullName: string;
}

const Users = () => {
  const [users, setUsers] = useState<Array<User> | []>([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(USER_PATH, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Users
      </h3>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.userName}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </article>
  );
};

export default Users;
