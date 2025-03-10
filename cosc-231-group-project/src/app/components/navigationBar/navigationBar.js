import Link from 'next/link';
import './navigationBar.css';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__links">
                <Link href="/" className="navBar__link">Home</Link>
                <Link href="/inventory" className="navBar__link">Inventory</Link>
            </div>
        </div>
    )
}