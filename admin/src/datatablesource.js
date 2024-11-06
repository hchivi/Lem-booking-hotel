export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Tên người dùng",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Quốc gia",
    width: 100,
  },
  {
    field: "city",
    headerName: "Thành phố",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Tên khách sạn",
    width: 150,
  },
  {
    field: "type",
    headerName: "Loại hình",
    width: 100,
  },
  {
    field: "title",
    headerName: "Tiêu đề",
    width: 230,
  },
  {
    field: "city",
    headerName: "Thành phố",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Tiêu đề",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Mô tả",
    width: 200,
  },
  {
    field: "price",
    headerName: "Giá phòng",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Số người tối đa",
    width: 100,
  },
];

