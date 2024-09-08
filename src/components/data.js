import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "",
  image: benefitOneImg,
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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
