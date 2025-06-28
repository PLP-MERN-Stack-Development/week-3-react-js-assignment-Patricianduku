import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Card className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Task Manager</h2>
      <div className="flex items-center justify-center gap-6 my-6">
        <Button variant="danger" onClick={() => setCount(count - 1)}>-</Button>
        <span className="text-3xl font-bold min-w-[40px]">{count}</span>
        <Button variant="primary" onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </Card>
  );
}

export default Home;
