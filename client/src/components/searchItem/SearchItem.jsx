import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m từ trung tâm thành phố</span>
        <span className="siTaxiOp">Miễn phí taxi sân bay</span>
        <span className="siSubtitle">
          Đầy đủ tiện nghi, wifi miễn phí
        </span>
        <span className="siFeatures">
          {item.description}
        </span>
        <span className="siCancelOp">Hủy miễn phí </span>
        <span className="siCancelOpSubtitle">
          Bạn có thể hủy sau, vì vậy hãy chốt mức giá tuyệt vời này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Tốt</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice}</span>
          <span className="siTaxOp">Đã bao gồm thuế</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Xem phòng trống</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
