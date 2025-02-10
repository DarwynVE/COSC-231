import { useState } from "react";

export default function InventoryTable() {
  const [inventory, setInventory] = useState([]);
  const [form, setForm] = useState({ folderID: "", productID: "", quantity: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.folderID && form.productID && form.quantity) {
      setInventory([...inventory, { ...form, id: Date.now() }]);
      setForm({ folderID: "", productID: "", quantity: "" });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inventory Table</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          name="folderID"
          placeholder="Folder ID"
          value={form.folderID}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="productID"
          placeholder="Product ID"
          value={form.productID}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Item
        </button>
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
          {inventory.map((item) => (
            <tr key={item.id} className="border">
              <td className="border p-2">{item.folderID}</td>
              <td className="border p-2">{item.productID}</td>
              <td className="border p-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
