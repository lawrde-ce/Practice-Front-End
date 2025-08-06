import card from "./Components/card.module.css";
import profile from "./assets/profile.jpg";

function ProfileCard() {
  return (
    <div className={card.cardContainer}>
      <div className={card.profileCard}>
        <img
          src={profile}
          alt="profile picture"
          className={card.profileImage}
        />
      </div>
      <h1>Lawrde Darryle Amancio</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={card.socialButtons}>
        <button className={card.contactButton}>Contact</button>
        <button className={card.messageButton}>Message</button>
      </div>
    </div>
  );
}

export default ProfileCard;
