// import images
// import LogoImg from '../src/assets/img/header/logo.svg';
import LogoImg from '../src/assets/img/header/logo.png';
import LogoImg2 from '../src/assets/img/logo.png';

// import HeroImg from '../src/assets/img/hero/image.svg';
// import HeroImg from '../src/assets/img/home.gif';
import HeroImg from '../src/assets/img/hero.mp4';
// import HeroImg from '../src/assets/img/hero/home.mp4';

import OverviewProductImg from '../src/assets/img/overview/product.svg';
// import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
// import GoogleImg from '../src/assets/img/overview/brands/google.svg';
// import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
// import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
// import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
// import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature1Img from '../src/assets/img/features/feature1.jpg';
import Feature2Img from '../src/assets/img/features/startupindia.webp';
// import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/startinup.webp';
// import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import Feature4Img from '../src/assets/img/features/index.webp';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
// import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
// import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';
import InstaIcon from '../src/assets/img/copyright/insta.svg';
import WhatsappIcon from '../src/assets/img/copyright/whatsapp.svg';
// import GmailIcon from '../src/assets/img/copyright/gmail.svg';
import Paytm from '../src/assets/img/overview/brands/paytm.svg';
// import Icici from '../src/assets/img/overview/brands/ICICI_Bank_Logo.svg';
import Shiprocket from '../src/assets/img/overview/brands/shiprocket.svg';
import Delhivery from '../src/assets/img/overview/brands/delhivery.svg';
import Icici from '../src/assets/img/overview/brands/icici2.png';
import Startinup from '../src/assets/img/overview/brands/aboutnogozo1.webp';
import Dpiit from '../src/assets/img/overview/brands/aboutnogozo2.webp';
import Startupindia from '../src/assets/img/overview/brands/aboutnogozo3.webp';
import Sharktank from '../src/assets/img/overview/brands/sti.png';
import Dainik from '../src/assets/img/overview/brands/dainik.png';
import Ecelliitbhu from '../src/assets/img/overview/brands/ecell.webp';



export const header = {
  logo: LogoImg2,
  btnText: ' Download App',
};

export const nav = [
  // { name: 'Blogs', href: 'https://nogozo.com/blog/' },
  // { name: 'Terms & Conditions', href: 'https://nogozo.com/tnc/' },
  { name: 'Careers', href: 'https://www.linkedin.com/company/nogozocare/jobs/' },
  { name: 'Business Queries', href: 'https://api.whatsapp.com/send?text=Hi NOGOZO! I want to become Seller at NOGOZO Buy NOGOZO-Franchise Upgrade my Bookstore&phone=918979497958' },
  { name: 'Contact Us', href: 'https://api.whatsapp.com/send?text=Hello%20NOGOZO!&phone=918979497958' },
];

export const hero = {
  title: "Shop fashion from nearby shops",
  subtitle: "India's first fashion explorer app. Explore online, shop offline. Find exactly what you love, then simply head out to pick it up!",
  btnText: 'Download App',
  compText: '',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brandstext: "Supported & Trusted By",
  brands: [
    {
      image: Startupindia,
      delay: 100,
    },
    {
      image: Dpiit,
      delay: 200,
    },
    {
      image: Startinup,
      delay: 300,
    },
    {
      image: Ecelliitbhu,
      delay: 400,
    },
    {
      image: Dainik,
      delay: 500,
    },
    {
      image: Sharktank,
      delay: 600,
    }
  ],
  patnerstext: "Our Partners",
  partners: [
    {
      image: Icici,
      delay: 300,
    },
    {
      image: Paytm,
      delay: 400,
    },
    {
      image: Shiprocket,
      delay: 500,
    },
    {
      image: Delhivery,
      delay: 600,
    }
  ],
};

export const features = {
  feature1: {
    pretitle: "Klawth's Sony Shark Tank India Experience",
    title: 'Klawth Founders Pitching at Shark Tank India',
    subtitle:
      "Imagine two young student founders taking the Shark Tank India stage by storm, armed with an innovative product that addresses the needs of students all across India. As they confidently presented their vision, the judges were blown away by their game-changing concept. Though they didn't walk away with a deal, these rising stars proved that age is just a number when it comes to building something truly impactful.",
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Recognised by Startup India',
    title: 'Startup India Certified - Klawth!',
    subtitle:
      "The Government of India Recognised the Klawth Startup under its initiative of StartupIndia in 2021 for it's groundbreaking impact in lives of students & Readers of India.",
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Backed & Funded by UP Government',
    title: 'Up Govt Funded Startup',
    subtitle:
     "Backed by the Uttar Pradesh Government and recognized as one of the top student startups, Klawth is revolutionizing book shopping experience of students with funding from the StartinUp initiative led by the state.",
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
  feature4: {
    pretitle: 'How Klawth became a saviour during Covid-19?',
    title: "Klawth's Platform Saved Covid-19 Spread",
    subtitle:
      "During the COVID-19 pandemic, Klawth Team generously provided their technology for free to prevent the spread of the virus in their city. As Featured in Dainik Jagran, over 1k+ citizens utilized the Klawth app to schedule essential shopping pickups and deliveries, reducing crowding at nearby stores as well as smoothing the fulfillment of their daily needs.",
    btnIcon: ArrowRightImg,
    image: Feature4Img,
  },
};

export const product = {
  title: 'Trusted by more than 10k+ Customers',
  subtitle:
    // "With 50000+ Products of 100+ Brands, Klawth is India's No. 1 innovative fashion explorer, emerging as the best choice of indians for all type of fashion.",
    "Imagine effortlessly discovering the latest fashion trends in your neighborhood, all from the comfort of your couch. With our platform, you can browse a curated selection of apparel from nearby shops, bringing the local shopping experience right to your fingertips. Say goodbye to long delivery waits and hactic returns; with us, you’ll discover what’s hot, just around the corner.",
  cards: [
    {
      icon: CardIconImg1,
      title: 'Buy',
      subtitle: 'Buy New & Used books at guaranteed best price',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Rent',
      subtitle: 'Rent your favourite novel, starting @ Rs.10 only',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Sell',
      subtitle: 'Sell your Old books & Get money within 24 hours',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: "Reviews from our lovely users",
  clients: [
    {
      message:
        'Platform with variety of clothes and that too at affordable price. I would definitely suggest to give it a try.',
      image: AvatarImg2,
      name: 'Rupali Verma',
      position: '',
      borderColor: '#FF7235',
    },
    {
      message:
        "Fantastic App for the local one's of Agra... Great Customer Service. Clothes quality is superb. Loved it!",
      image: AvatarImg5,
      name: 'Rubal Singh',
      position: '',
      borderColor: '#FFBE21',
    },
    {
      message:
        "Loved the Cute UI of the app and amazing discounts on all of the products. Gonna order more :D",
      image: AvatarImg1,
      name: 'Kukum Chouhan',
      position: '',
      borderColor: '#4756DF',
    },
    {
      message:
        "Very innovative idea, this application is very helpful for the people of agra. Thanks Klawth !!",
      image: AvatarImg3,
      name: 'Devanshi Jain',
      position: '',
      borderColor: '#3EC1F3',
    },
    {
      message:
        "Best app in this category. Really beneficial for people to find clothes while sitting at home only.",
      image: AvatarImg4,
      name: 'Kumar Gaurav',
      position: '',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '10K+ happy customers from 24 different states of India',
  subtitle: 'Try NOGOZO for all your education needs now!',
  btnText: 'Download App',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    // { name: 'Blog', href: 'https://nogozo.com/blog/' },
    // { name: 'Terms of use', href: 'https://nogozo.com/tnc/' },
  ],
  legal: [
    // { name: 'Terms of use', href: 'https://nogozo.com/tnc/' },
    // { name: 'Terms of conditions', href: 'https://nogozo.com/tnc/' },
    // { name: 'Privacy policy', href: 'https://nogozo.com/tnc/' }
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: '',
    href: '/',
  },
  link2: {
    name: '',
    href: 'https://api.whatsapp.com/send?text=Hi%20Klawth!&phone=918979497958',
  },
  copyText: 'Copyright @ 2024 Klawth',
  social: [
    // { icon: WhatsappIcon, href: 'https://api.whatsapp.com/send?text=Hi%20Klawth!&phone=918979497958'},
    // { icon: InstaIcon, href: 'https://www.instagram.com/nogozocare/' },
    // { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/nogozocare/' },
    // { icon: GmailIcon, href: 'mailto:contact@nogozo.com' },
  ],
};
