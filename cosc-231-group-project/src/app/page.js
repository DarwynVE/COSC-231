import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./homePage/homePage";
import InventoryTable from "./inventoryTable";
// This link extension is what we will use to navigate to other pages

export default function Home() {
  return (
    <div className="Main">
      <HomePage />
    </div>
  );
}
