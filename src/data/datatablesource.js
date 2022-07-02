export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Miskat",
    img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "miskat@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "Helli chao",
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "inactive",
    email: "helli.chao@gmail.com",
    age: 27,
  },
  {
    id: 4,
    username: "Bela Bosh",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "bosh@gmail.com",
    age: 25,
  },
  {
    id: 5,
    username: "Suri barma",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "inactive",
    email: "barma784@gmail.com",
    age: 42,
  },
  {
    id: 6,
    username: "Chris Jonson",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "inactive",
    email: "chrisjonson@gmail.com",
    age: 27,
  },
  {
    id: 7,
    username: "pixbay",
    img: "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "pixbay@gmail.com",
    age: 29,
  },
  {
    id: 8,
    username: "Hilary Han",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "inactive",
    email: "hilary@gmail.com",
    age: 43,
  },
  {
    id: 9,
    username: "Sam zone",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "sam@gmail.com",
    age: 19,
  },
  {
    id: 10,
    username: "Bekkol sharma",
    img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "sharma35@gmail.com",
    age: 26,
  },
  {
    id: 11,
    username: "M.A Zilani",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "active",
    email: "zilani987@gmail.com",
    age: 35,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={params.row.img}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
            alt="Avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 250 },
  { field: "age", headerName: "Age", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return <div className={`${params.row.status}`}>{params.row.status}</div>;
    },
  },
];
