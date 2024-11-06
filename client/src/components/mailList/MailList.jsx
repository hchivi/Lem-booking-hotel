import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm tiền!</h1>
      <span className="mailDesc">Hãy đăng ký để có được những ưu đãi tốt nhất</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button>Đăng ký</button>
      </div>
    </div>
  )
}

export default MailList