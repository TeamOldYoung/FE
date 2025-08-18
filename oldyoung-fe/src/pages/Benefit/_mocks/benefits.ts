import type { Benefit } from "../_components/BenefitList";

export const dummyBenefits: Benefit[] = [
  {
    id: 1,
    title: "노인맞춤돌봄서비스",
    description:
      "65세 이상 국민기초생활수급자, 차상위계층 또는 기초연금수급자에게 제공되는 돌봄서비스",
    reception: "상시 신청",
    organization: [
      "고용노동부 각 지역 관할 고용센터",
      "고객상담센터",
    ],
    inquiry: "서울주택도시공사",
    phone: "1600-3456",
    target: "65세 이상 기초생활수급자·차상위계층",
  },
  {
    id: 2,
    title: "노인 일자리 및 사회활동 지원사업",
    description:
      "노인의 사회참여 기회를 제공하고 소득을 지원하는 일자리 및 사회활동 사업",
    reception: "각 지자체 주민센터",
    organization: ["보건복지부", "지자체 주민센터"],
    inquiry: "보건복지상담센터",
    phone: "129",
    target: "만 65세 이상 어르신",
  },
];
