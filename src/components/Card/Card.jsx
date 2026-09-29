import './Card.scss';

const Card = (props) => {
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