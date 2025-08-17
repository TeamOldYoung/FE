import CommonProfileIcon from "../../../assets/icons/CommonProfile.svg?react";

interface UserProfileCardProps {
  user: {
    name: string;
    rank: string;
    birth: string;
    profileImg: string | null;
  };
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <div className="bg-white rounded-t-[0.75rem] p-5 pt-9 flex items-center space-x-8">
      {user.profileImg ? (
        <img
          src={user.profileImg}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <div className="w-25 h-25 rounded-full flex items-center justify-center">
          <CommonProfileIcon />
        </div>
      )}

      <div className="flex flex-col">
        <span className="font-semibold text-[1.75rem] mb-1">{user.name}</span>

        <div className="flex items-center space-x-8 font-semibold">
          <span className="text-[1rem] text-[#777575]">소득분위</span>
          <span className="text-[1.25rem] text-[#1BA19A]">{user.rank}</span>
        </div>
        <div className="flex items-center space-x-8 font-semibold">
          <span className="text-[1rem] text-[#777575]">생년월일</span>
          <span className="text-black font-medium text-[1rem]">{user.birth}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
