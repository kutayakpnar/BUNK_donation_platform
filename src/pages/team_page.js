import MemberCard from "../components/member_card";
import "../styles/team_page.css";
import default_member_image from "../assets/profile-user.png";
import basri from "../assets/basri.jpeg";
import ünal from "../assets/ünal.jpeg"
import niyazi from "../assets/niyazi.jpeg"
import kutay from "../assets/kutay.jpg"
const TeamPage = () => {
    return (
        <div className="page_div">
            <div className="member_card_cover">
                <h2>Meet with BUNK Team!</h2>
                <MemberCard member_image_url={ünal} member_name="Ünal Dalkılıç" member_info="Unal DALKILIC is a third-year Computer Engineering student at İzmir Institute of High Technology. He is responsible for frontend development on the BUNK donation platform." />

                <MemberCard member_image_url={kutay} member_name="Mehmet Kutay Akpınar" member_info="Mehmet Kutay AKPINAR is a fourth-year Computer Engineering student at İzmir Institute of High Technology. He is responsible for frontend development on the BUNK donation platform." />

                <MemberCard member_image_url={basri} member_name="Hasan Basri Erdoğan" member_info="Hasan Basri ERDOGAN is a third-year Computer Engineering student at İzmir Institute of High Technology. He is involved in backend development for the BUNK donation platform." />
                
                <MemberCard member_image_url={niyazi} member_name="Niyazi Alperen Tuğan" member_info="Niyazi Alperen TUGAN is a fourth-year Computer Engineering student at İzmir Institute of High Technology. He is involved in backend development for the BUNK donation platform." />

            </div>
        </div>
    );
};

export default TeamPage;