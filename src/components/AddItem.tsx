import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
  name: string;
  description: string;
}

export const AddItem = () => {
  const [newItem, setNewItem] = useState<Item>({ name: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newItem);
    setNewItem({ name: '', description: '' });
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newItem.description} onChange={handleChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      {}
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};
