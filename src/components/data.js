import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";



const benefitOne = {
  title: "Our benefits",
  desc: "",
  image: "/img/benefit-one.png",
  bullets: [
    {
      title: "Understand your customers",
      desc: "We prioritize personalized recommendations by understanding each user's demographic, economic background, and unique needs. Our system matches individuals with relevant schemes and ensures timely and accurate guidance for empowering your personal growth.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "We offer optimized search tools, clear guidance on eligibility, and a simplified application process. This ensures users to easily discover and apply for relevant schemes thereby increasing participation and engagement while making access to opportunities more seamless and efficient.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "We drive customer retention by offering personalized recommendations, regular notifications on new schemes and continuous support. By keeping users informed and engaged, we ensure they receive ongoing value and remain connected to the platform for the long term.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Additional benefits",
  desc: "",
  image: "/img/benefit-two.png",
  bullets: [
    {
      title: "Reward Engagement",
      desc: "InfoSaathi motivates users by offering rewards for continuous participation and engagement in financial and insurance services, fostering long-term loyalty and satisfaction.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Personalized Mentorship",
      desc: "InfoSaathi provides one-on-one mentorship, helping users navigate complex schemes, improve financial literacy, and achieve personal growth through tailored guidance.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Community Support and Growth",
      desc: "InfoSaathi connects users with self-help groups and like-minded individuals, creating a supportive community that promotes shared learning, resource sharing, and collective progress.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
