import NavBar from "../components/navigationBar/navigationBar"
import InventoryTable from "../inventoryTable"
import './inventory.css'

export default function Inventory() {
    return (
        <div className="mainWrapper">
                <NavBar />
                <div className="inventoryTable">
                    <InventoryTable />
                </div>
                {/* TODO: USING MATERIAL UI CREATE A TABLE THAT WILL CONTAIN ALL THE DETAILS */}
            </div>
    )
}