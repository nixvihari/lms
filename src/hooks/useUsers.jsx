import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api/userService";


export default function useUsers() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setLoading(true);

    fetchAllUsers()
      .then((response) => {
        const formatted = response.data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role,
        }));
        
        setUsers(formatted);
      })
      .catch(() => {
        setError("Failed to fetch users");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, loading, error, setUsers };
}
