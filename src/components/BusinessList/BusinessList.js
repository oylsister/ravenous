import { Business, pizza } from "../Business/Business";
import './BusinessList.css';

var list = [];

function BusinessList() {
    return (
    <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
    </div>
    );
}

export default BusinessList;