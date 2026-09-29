import Card from "../../components/Card/Card";
import "./Bai9.scss";

const Bai9 = () => {
    //Khởi tạo mảng gồm 3 phần tử Object đại diện cho mỗi cá nhân
    const arrInfor = [
        {
            image:  "https://unsplash.com",
            name: "Nguyễn Văn A",
            jobTitle: "Backend Development",
            description: "Nothing"
        },
        {
            image: "https://unsplash.com",
            name: "Nguyễn Văn B",
            jobTitle: "Frontend Development",
            description: "Nothing"
        },
        {
            image: "https://unsplash.com",
            name: "Nguyễn Văn C",
            jobTitle: "Data Analyst",
            description: "Nothing"
        }
    ]
    return (
        <div className="bai9">
            {/* Sử dụng render có điều kiện để hiển thị "Không có thông tin" nếu mảng bị trống và
            sử dụng map để render ra giao diện, với mỗi item tương ứng sẽ truyền xuống Components 
            con giá trị để hiển thị dữ liệu lên giao diện */}
            {arrInfor && arrInfor.length > 0
                ? arrInfor.map((item, index) => {
                    return (
                        <div key={`card-${index}`}>
                            <Card
                                image={item.image}
                                name={item.name}
                                jobTitle={item.jobTitle}
                                description={item.description}
                            />
                        </div>
                    )
                })
                : <>Không có thông tin</>}
        </div>
    )
}

export default Bai9;