import Card from "../../components/Card/Card";
import "./Bai9.scss";

const Bai9 = () => {
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