"use client";
import { useState } from "react";
import './inventoryTable.css';

export default function InventoryTable() {
  const [users, setUsers] = useState([
    { userID: 1, username: "Alice", password: "pass123" },
    { userID: 2, username: "Bob", password: "secure456" },
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [folders, setFolders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [folderForm, setFolderForm] = useState({ folderID: "", folderName: "" });
  const [itemForm, setItemForm] = useState({ folderID: "", productID: "", quantity: "" });

  const handleFolderChange = (e) => {
    setFolderForm({ ...folderForm, [e.target.name]: e.target.value });
  };

  const handleItemChange = (e) => {
    setItemForm({ ...itemForm, [e.target.name]: e.target.value });
  };

  const handleFolderSubmit = (e) => {
    e.preventDefault();
    if (folderForm.folderID && folderForm.folderName) {
      setFolders([...folders, { ...folderForm, id: Date.now(), userID: currentUser?.userID }]);
      setFolderForm({ folderID: "", folderName: "" });
    }
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    if (itemForm.folderID && itemForm.productID && itemForm.quantity) {
      setInventory([...inventory, { ...itemForm, id: Date.now(), userID: currentUser?.userID }]);
      setItemForm({ folderID: "", productID: "", quantity: "" });
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

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="mainBody"> {/* Added pl-8 for left padding */}
      {!currentUser ? (
        <AuthForm onLogin={handleLogin} onSignup={handleSignup} />
      ) : (
        <>
          <div className="welcome">
            <h2 className="text-xl font-bold border-b-4em">Welcome, {currentUser.username}!</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
              Sign Out
            </button>
          </div>

          <h2 className="createHeader">Create Folder</h2>
          <form onSubmit={handleFolderSubmit} className="mb-4 flex gap-2" id="createFolder">
            <input type="text" name="folderID" placeholder="Folder ID" value={folderForm.folderID} onChange={handleFolderChange} className="border p-2 rounded" id="marginRight" />
            <input type="text" name="folderName" placeholder="Folder Name" value={folderForm.folderName} onChange={handleFolderChange} className="border p-2 rounded" id="marginRight" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Folder</button>
          </form>

          <h2 className="createItem">Add Item to Folder</h2>
          <form onSubmit={handleItemSubmit} className="mb-4 flex gap-2">
            <select name="folderID" value={itemForm.folderID} onChange={handleItemChange} className="border p-2 rounded" id="marginRight">
              <option value="">Select Folder</option>
              {folders.filter((folder) => folder.userID === currentUser.userID).map((folder) => (
                <option key={folder.id} value={folder.folderID}>{folder.folderName}</option>
              ))}
            </select>
            <input type="text" name="productID" placeholder="Product ID" value={itemForm.productID} onChange={handleItemChange} className="border p-2 rounded" id="marginRight"/>
            <input type="number" name="quantity" placeholder="Quantity" value={itemForm.quantity} onChange={handleItemChange} className="border p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded" id="marginTop">Add Item</button>
          </form>

          <h2 className="text-xl font-bold mb-4">Inventory Table</h2>
          {folders.filter((folder) => folder.userID === currentUser.userID).map((folder) => (
            <div key={folder.id} className="mb-4">
              <h3 className="text-lg font-bold" id="marginTop">{folder.folderName}</h3>
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Product ID</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.filter((item) => item.folderID === folder.folderID).map((item) => (
                    <tr key={item.id} className="border">
                      <td className="border p-2">{item.productID}</td>
                      <td className="border p-2">{item.quantity}</td>
                      <td className="border p-2">
                        <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
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