import { useEffect, useState } from "react";
import { getUserProfile } from "../api/userService";

export default function useAdminProfile() {
  const [admin, setAdmin] = useState({
    id: "",
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getUserProfile()
      .then((response) => {
        setAdmin({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
      })
      .catch(() => {
        setError("Failed to fetch admin profile");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { admin, loading, error };
}
