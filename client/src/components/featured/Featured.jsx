import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("http://localhost:8388/api/hotels/countByCity?cities=tphcm,hanoi,danang")
  return (
    <div className="featured">
      {loading ? ("Loading please wait") : (<><div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.JGCYoIviXmt-B-A4KbqxyAHaEo?w=1570&h=982&rs=1&pid=ImgDetMain"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tp Hồ Chí Minh</h1>
          <h2>{data[0]} Khách sạn</h2>
        </div>
      </div>

        <div className="featuredItem">
          <img
            src="https://icdn.dantri.com.vn/2020/10/09/ha-noi-hien-dai-1010-nam-8-1602262537586.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Hà Nội</h1>
            <h2>{data[1]} Khách sạn</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://hellotrip.vn/wp-content/uploads/2021/01/novotel-da-nang-premier-han-river-5-uu-dai-dac-biet-giam-50-37484.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Đà Nẵng</h1>
            <h2>{data[2]} Khách sạn</h2>
          </div>
        </div></>)}
    </div>
  );
};

export default Featured;
