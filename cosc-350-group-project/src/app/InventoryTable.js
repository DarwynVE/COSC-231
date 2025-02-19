"use client";
import { useState } from "react";

export default function InventoryTable() {
  const [users, setUsers] = useState([
    { userID: 1, username: "Alice", password: "pass123" },
    { userID: 2, username: "Bob", password: "secure456" },
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [form, setForm] = useState({ folderID: "", productID: "", quantity: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.folderID && form.productID && form.quantity) {
      setInventory([...inventory, { ...form, id: Date.now(), userID: currentUser?.userID }]);
      setForm({ folderID: "", productID: "", quantity: "" });
    }
  };

  const handleLogin = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) setCurrentUser(user);
  };

  const handleSignup = (username, password) => {
    if (!users.some((u) => u.username === username)) {
      const newUser = { userID: Date.now(), username, password };
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="p-4">
      {!currentUser ? (
        <AuthForm onLogin={handleLogin} onSignup={handleSignup} />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Welcome, {currentUser.username}!</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
              Sign Out
            </button>
          </div>
          
          <h2 className="text-xl font-bold mb-4">Inventory Table</h2>
          <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input type="text" name="folderID" placeholder="Folder ID" value={form.folderID} onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="productID" placeholder="Product ID" value={form.productID} onChange={handleChange} className="border p-2 rounded" />
            <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Item</button>
          </form>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Folder ID</th>
                <th className="border p-2">Product ID</th>
                <th className="border p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.filter((item) => item.userID === currentUser.userID).map((item) => (
                <tr key={item.id} className="border">
                  <td className="border p-2">{item.folderID}</td>
                  <td className="border p-2">{item.productID}</td>
                  <td className="border p-2">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

function AuthForm({ onLogin, onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    onSignup(username, password);
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit} className="mb-4 flex gap-2">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
      </form>
      <form onSubmit={handleSignupSubmit} className="flex gap-2">
        <input type="text" placeholder="New Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 rounded" />
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
