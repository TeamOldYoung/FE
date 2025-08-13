import { Link } from "react-router-dom";
import Oldyoung from "../../assets/icons/Oldyoung.svg?react";
import OldyoungCharater from "../../assets/icons/OldyoungCharacter.svg?react";
import Radial from "../../assets/icons/Radial.svg?react"; 

const LoginPage = () => {
  const handleKakaoLogin = () => {
    const server = import.meta.env.VITE_SERVER_API_URL;
    window.location.href = `${server}/api/v1/auth/kakao/authorize`;
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="w-full flex-1 flex flex-col items-center justify-center gap-8">
        <Oldyoung className="w-[10rem] h-[2.5rem] text-[#1C9183]"/>

        <div className="relative w-full flex items-center justify-center">
          <Radial
            className="absolute z-1 w-full"
            aria-hidden
          />
          <div className="w-full w-full aspect-square flex items-center justify-center">
            <OldyoungCharater className="w-[11.25rem] h-[11.25rem]] z-10" />
          </div>
        </div>

        <div className="w-full text-center">
          <p className="text-[#4F4F4F] font-semibold text-[1.25rem] leading-7 pb-[3rem]">
            울영과 함께, <br />
            더 쉬운 복지 생활을 시작해요!
          </p>
        </div>

        <button
            onClick={handleKakaoLogin}
            className="relative w-full max-w-[320px] h-12 rounded-lg bg-[#FEE500] shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:translate-y-[1px] flex items-center justify-center"
            aria-label="카카오로 로그인"
        >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        >
            <path
            d="M12 3C6.477 3 2 6.53 2 10.882c0 2.654 1.77 4.983 4.44 6.364L6 22l4.072-2.448c.623.092 1.268.14 1.928.14 5.523 0 10-3.53 10-7.81C22 6.53 17.523 3 12 3z"
            fill="black"
            />
        </svg>

        <span className="text-[15px] font-semibold text-black">카카오로 로그인</span>
        </button>

      </main>

      <footer className="w-full px-6 pb-6">
        <p className="text-center text-[13px] text-[#4F4F4F]">
          가입 시{" "}
          <Link to="/terms" className="text-[#1BA19A]">이용약관</Link>{" "}
          및{" "}
          <Link to="/privacy" className="text-[#1BA19A]">개인정보처리방침</Link>
          에 동의하게 됩니다.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
