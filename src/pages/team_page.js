import MemberCard from "../components/member_card";
import "../styles/team_page.css";
import default_member_image from "../assets/profile-user.png";

const TeamPage = () => {
    return (
    <div className="member_card_cover">
        <h2>Meet with BUNK Team!</h2>
        <MemberCard member_image_url={default_member_image} member_name="Ünal Dalkılıç" member_info="Ünal Dalkılıç info will goes here"/>
        <MemberCard member_image_url={default_member_image} member_name="Mehmet Kutay Akpınar" member_info="Kutay Akpınar info will goes here"/>
        <MemberCard member_image_url={default_member_image} member_name="Hasan Basri Erdoğan" member_info="Hasan Basri Erdoğan info will goes here"/>
        <MemberCard member_image_url={default_member_image} member_name="Niyazi Alperen Tuğan" member_info="Niyazi Alperen Tuğan info will goes here"/>
    </div>
    );
};

export default TeamPage;