import { useEffect, useState } from 'react';
import Card from '../components/Card';

function ApiData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  return (
    <Card className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Data</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 border-b dark:border-gray-700">
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ApiData;
