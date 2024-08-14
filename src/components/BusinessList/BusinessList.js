import { Business, pizza } from "../Business/Business";
import './BusinessList.css';

var list = [];

function BusinessList() {
    for(var i = 0; i < 10; i++)
    {
        list.push(<Business />)
    }
    return (
    <div className="BusinessList">
        { list.map(item => {
            return <div>{item}</div>;
        })}
    </div>
    );
}

export default BusinessList;