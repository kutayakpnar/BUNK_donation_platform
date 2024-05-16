import "../styles/member_card.css";

const MemberCard = (props) => {
    return (
        <div className="member_card">
            <div className="member_card_image" style={{backgroundImage:`url(${props.member_image_url})`}}></div>
            <h3>{props.member_name}</h3>
            <p>{props.member_info}</p>
        </div>
    );
};

export default MemberCard;