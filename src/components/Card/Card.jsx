import './Card.scss';

//Truyền vào props là dữ liệu nhận được từ components cha
const Card = (props) => {
    //Lấy giá các trường dữ liệu tương ứng trong props
    const { image, name, jobTitle, description } = props;
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="avatar-img">
                    <img src={image} alt="random"/>
                </div>
                <div className="information">
                    <div>Name: {name}</div>
                    <div>Job title: {jobTitle}</div>
                    <div>Description: {description}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;