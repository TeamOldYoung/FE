import UserProfileCard from "./UserProfileCard";
import EmailInfo from "./EmailInfo";

interface UserInfoSectionProps {
  user: {
    name: string;
    rank: string;
    birth: string;
    email: string;
    profileImg: string | null;
  };
}

const UserInfoSection = ({ user }: UserInfoSectionProps) => {
  return (
    <div className="px-5 py-10">
      <UserProfileCard user={user} />
      <EmailInfo email={user.email} />
    </div>
  );
};

export default UserInfoSection;
