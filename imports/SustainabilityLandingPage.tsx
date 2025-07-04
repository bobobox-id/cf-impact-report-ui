import svgPaths from "./svg-72gzzl99py";
import imgLogoBoboboxHorizontalColor from "figma:asset/2434156a655cce205b213c80183cb21735c3cee7.png";
import imgHeroSection from "figma:asset/9692d81aebc6adfdb778f15b509130b1363451bf.png";
import imgImage from "figma:asset/1a34d13a7850ae7ce1a7f0208cb8411ed2b924f3.png";
import imgLogoBobopodHorizontalColor from "figma:asset/42e880a918165d22c5643af6ad23f8897d230eef.png";
import imgImage1 from "figma:asset/763dd6e3d50e1df7a83ff76735d561f1654ead5f.png";
import imgLogoBobocabinHorizontalColor from "figma:asset/97dcf768a92cb461cb8ff7373dd1cbc23e93d036.png";

function PngLogoVertical() {
  return (
    <div
      className="h-10 relative shrink-0 w-[156.635px]"
      data-name="png-logo-vertical"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="Logo_Bobobox_Horizontal_Color"
        style={{ backgroundImage: `url('${imgLogoBoboboxHorizontalColor}')` }}
      />
    </div>
  );
}

function FiRrAngleSmallDown() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="fi-rr-angle-small-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="fi-rr-angle-small-down">
          <path
            d={svgPaths.p2fe6c400}
            fill="var(--fill-0, #1E2525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="dropdown"
    >
      <div className="capitalize font-['Source_Serif_4:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e2525] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Our Products</p>
      </div>
      <FiRrAngleSmallDown />
    </div>
  );
}

function FiRrAngleSmallDown1() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="fi-rr-angle-small-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="fi-rr-angle-small-down">
          <path
            d={svgPaths.p2fe6c400}
            fill="var(--fill-0, #1E2525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Dropdown1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="dropdown"
    >
      <div className="capitalize font-['Source_Serif_4:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e2525] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">About</p>
      </div>
      <FiRrAngleSmallDown1 />
    </div>
  );
}

function FiRrAngleSmallDown2() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="fi-rr-angle-small-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="fi-rr-angle-small-down">
          <path
            d={svgPaths.p2fe6c400}
            fill="var(--fill-0, #1E2525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Dropdown2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="dropdown"
    >
      <div className="capitalize font-['Source_Serif_4:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e2525] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Offer</p>
      </div>
      <FiRrAngleSmallDown2 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="dropdown"
    >
      <div className="capitalize font-['Source_Serif_4:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e2525] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Partnership</p>
      </div>
    </div>
  );
}

function Dropdown4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="dropdown"
    >
      <div className="capitalize font-['Source_Serif_4:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e2525] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Blog</p>
      </div>
    </div>
  );
}

function MenuList() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="menu-list"
    >
      <Dropdown />
      <Dropdown1 />
      <Dropdown2 />
      <Dropdown3 />
      <Dropdown4 />
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-0 relative rounded-lg shrink-0 w-[120px]"
      data-name="base-button"
    >
      <div className="absolute border border-[#edeeee] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#474c4c] text-[16px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="bg-[#eef8f8] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-0 relative rounded-lg shrink-0 w-[120px]"
      data-name="base-button"
    >
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008880] text-[14px] text-left text-nowrap">
        <p className="block leading-[19.6px] whitespace-pre">Register</p>
      </div>
    </div>
  );
}

function NavbarButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[17px] items-start justify-start p-0 relative shrink-0"
      data-name="navbar-button"
    >
      <BaseButton />
      <BaseButton1 />
    </div>
  );
}

function TopNavbarWebsite1440() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-[60px] py-5 relative shadow-[0px_4px_8px_0px_rgba(161,163,163,0.16)] shrink-0 w-[1440px]"
      data-name="top-navbar-website-1440"
    >
      <PngLogoVertical />
      <MenuList />
      <NavbarButton />
    </div>
  );
}

function TitleText() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center w-full"
      data-name="title-text"
    >
      <div className="flex flex-col font-['Source_Serif_4:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[52px] w-full">
        <p className="block leading-[72.8px]">Building a Sustainable Future</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[20px] w-full">
        <p className="block leading-[28px]">{`At Bobobox, we're committed to environmental stewardship, social responsibility, and sustainable innovation that creates positive impact for our communities and planet.`}</p>
      </div>
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="bg-[#00958d] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-0 relative rounded-lg shrink-0"
      data-name="base-button"
    >
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eef8f8] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Download Impact Report
        </p>
      </div>
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-0 relative rounded-lg shrink-0"
      data-name="base-button"
    >
      <div className="absolute border border-[#edeeee] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#474c4c] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Explore Our Journey
        </p>
      </div>
    </div>
  );
}

function CtaButtons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="cta-buttons"
    >
      <BaseButton2 />
      <BaseButton3 />
    </div>
  );
}

function TitleItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-center justify-center p-0 relative shrink-0 w-[1200px]"
      data-name="title-item"
    >
      <TitleText />
      <CtaButtons />
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="[background-size:auto,_129.65%_155.6%] bg-[position:0%_0%,_53.4%_18%] box-border content-stretch flex flex-col h-[812px] items-center justify-center px-[60px] py-0 relative shrink-0 w-[1440px]"
      data-name="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(30, 37, 37, 0.36) 0%, rgba(30, 37, 37, 0.36) 100%), url('${imgHeroSection}')`,
      }}
    >
      <TitleItem />
    </div>
  );
}

function Group10997() {
  return (
    <div className="absolute h-[273.564px] left-0 opacity-10 top-0 w-[82.871px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 83 274"
      >
        <g id="Group 10997">
          <path
            d={svgPaths.p15bf6c00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
          <path
            d={svgPaths.p21d7b7b0}
            fill="var(--fill-0, #EEF8F8)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10999() {
  return (
    <div className="absolute h-[193.683px] left-[158.055px] opacity-10 top-[53px] w-[68.816px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 69 194"
      >
        <g id="Group 10999">
          <path
            d={svgPaths.p3f705800}
            fill="var(--fill-0, #54B8B3)"
            id="Vector"
          />
          <path
            d={svgPaths.p2d38ea00}
            fill="var(--fill-0, #EEF8F8)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10998() {
  return (
    <div className="absolute h-[118.233px] left-[92.664px] opacity-10 top-28 w-[43.206px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 44 119"
      >
        <g id="Group 10998">
          <path
            d={svgPaths.p2525e000}
            fill="var(--fill-0, #006A64)"
            id="Vector"
          />
          <path
            d={svgPaths.pf2b400}
            fill="var(--fill-0, #EEF8F8)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group11000() {
  return (
    <div className="absolute h-[120.741px] left-[252.07px] opacity-10 top-[149px] w-[44.122px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 45 121"
      >
        <g id="Group 11000">
          <path
            d={svgPaths.p31f62400}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
          <path
            d={svgPaths.p315ffbf2}
            fill="var(--fill-0, #EEF8F8)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10995() {
  return (
    <div className="absolute contents css-j7119y left-[3px] top-[457px]">
      <Group10997 />
      <Group10999 />
      <Group10998 />
      <Group11000 />
    </div>
  );
}

function Backgound() {
  return (
    <div
      className="absolute contents css-j7119y left-[-70px] top-[457px]"
      data-name="backgound"
    >
      <Group10995 />
      <div className="absolute bottom-[-85px] h-[150px] left-[-70px] opacity-10 w-[1556px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1556 150"
        >
          <path
            d={svgPaths.p334697b0}
            fill="var(--fill-0, #008880)"
            id="Vector 1589"
          />
        </svg>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center w-full"
      data-name="section-title"
    >
      <div
        className="flex flex-col font-['Source_Serif_4:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[52px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[72.8px]">Why Sustainability Matters</p>
      </div>
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-[678px]">
        <p className="block leading-[28px]">
          At Bobobox, we believe that hospitality can, and should, do more than
          provide a place to sleep.
        </p>
      </div>
    </div>
  );
}

function FiRrFlowerTulip() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-flower-tulip">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_10685)" id="fi-rr-flower-tulip">
          <path
            d={svgPaths.p3a218a00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10685">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UspItem() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[194px] min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="usp-item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[194px] items-start justify-start p-[24px] relative w-full">
          <FiRrFlowerTulip />
          <div
            className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#474747] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22.4px]">
              A stay should benefit the place it happens, not burden it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiRrChartHistogram() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-chart-histogram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_10696)" id="fi-rr-chart-histogram">
          <path
            d={svgPaths.p1d6b2300}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
          <path
            d={svgPaths.p2e8d2170}
            fill="var(--fill-0, #008880)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2805f100}
            fill="var(--fill-0, #008880)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3150fe80}
            fill="var(--fill-0, #008880)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p65e7140}
            fill="var(--fill-0, #008880)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2790ef00}
            fill="var(--fill-0, #008880)"
            id="Vector_6"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10696">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UspItem1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[194px] min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="usp-item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[194px] items-start justify-start p-[24px] relative w-full">
          <FiRrChartHistogram />
          <div
            className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[22.4px] min-w-full relative shrink-0 text-[#474747] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block mb-0">
              Growth should be thoughtful, not extractive
            </p>
            <p className="block">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiRrLayoutFluid() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-layout-fluid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_10679)" id="fi-rr-layout-fluid">
          <path
            d={svgPaths.p13cbe700}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
          <path
            d={svgPaths.p2c3681f0}
            fill="var(--fill-0, #008880)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p111c4c00}
            fill="var(--fill-0, #008880)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a827280}
            fill="var(--fill-0, #008880)"
            id="Vector_4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10679">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UspItem2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="usp-item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <FiRrLayoutFluid />
          <div
            className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#474747] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22.4px]">{`Design should create spaces that respect both human experience and the ecosystems they exist in. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiRrThumbsUp() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-thumbs-up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9689)" id="fi-rr-thumbs-up">
          <path
            d={svgPaths.p1d2b2d00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9689">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UspItem3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[194px] min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="usp-item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[194px] items-start justify-start p-[24px] relative w-full">
          <FiRrThumbsUp />
          <div
            className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#474747] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22.4px]">
              Hospitality should include more people, share more value, and last
              longer than the transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionItems() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-items"
    >
      <UspItem />
      <UspItem1 />
      <UspItem2 />
      <UspItem3 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="content"
    >
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#edeeee] text-[16px] text-left w-full">
        <p className="block mb-0">{`Our commitment to Environmental, Social, and Governance (ESG) principles drives every decision we make, from the design of our pods to the communities we serve. We're not just building accommodations; we're crafting a sustainable future for travel that benefits travelers, communities, and our planet.`}</p>
        <p className="block">{`This strategic approach to sustainability ensures our long-term growth while creating positive impact at every touchpoint of the guest experience. It's how we're redefining what hospitality means in the 21st century.`}</p>
      </div>
    </div>
  );
}

function SustainabilityUspSection() {
  return (
    <div
      className="bg-[#003c33] h-[701px] relative shrink-0 w-full"
      data-name="sustainability-usp-section"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 h-[701px] items-center justify-center pb-20 pt-[120px] px-[60px] relative w-full">
          <Backgound />
          <SectionTitle />
          <SectionItems />
          <Content />
        </div>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center leading-[0] p-0 relative shrink-0 text-center w-full"
      data-name="section-title"
    >
      <div
        className="flex flex-col font-['Source_Serif_4:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#008880] text-[52px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[72.8px]">Sustainability pillars</p>
      </div>
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#474c4c] text-[20px] w-[854px]">
        <p className="block leading-[28px]">
          To make hospitality better for all, our work needs clear structure and
          measurable focus. That’s where sustainability comes into play.
        </p>
      </div>
    </div>
  );
}

function FiRrUsers() {
  return (
    <div className="relative shrink-0 size-10" data-name="fi-rr-users">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9668)" id="fi-rr-users">
          <path
            d={svgPaths.p21c47580}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9668">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block leading-[28px]">Connected Communities</p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block leading-[22.4px]">
          Build meaningful relationships with the places we operate in
        </p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrUsers />
      <Content1 />
    </div>
  );
}

function FiRrRefresh() {
  return (
    <div className="relative shrink-0 size-10" data-name="fi-rr-refresh">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_10692)" id="fi-rr-refresh">
          <path
            d={svgPaths.p25d12800}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
          <path
            d={svgPaths.p26607e20}
            fill="var(--fill-0, #008880)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10692">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block leading-[28px]">{`Sustainably Sourced & Designed Product`}</p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block leading-[22.4px]">
          Reduce material impact and design with accessibility, circularity, and
          efficiency in mind
        </p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrRefresh />
      <Content2 />
    </div>
  );
}

function FiRrBank() {
  return (
    <div className="relative shrink-0 size-10" data-name="fi-rr-bank">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9731)" id="fi-rr-bank">
          <path
            d={svgPaths.p3e947840}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9731">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block leading-[28px]">Good Governance</p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block leading-[22.4px]">
          Operate with transparency, accountability, and integrity
        </p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrBank />
      <Content3 />
    </div>
  );
}

function FiRrMap() {
  return (
    <div className="relative shrink-0 size-10" data-name="fi-rr-map">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9686)" id="fi-rr-map">
          <path
            d={svgPaths.p39327a00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9686">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block leading-[28px]">Responsible Traveler</p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow leading-[22.4px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block mb-0">{`Make responsible choices easy `}</p>
        <p className="block">and intuitive for every guest</p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrMap />
      <Content4 />
    </div>
  );
}

function FiRrHandHoldingHeart() {
  return (
    <div
      className="relative shrink-0 size-10"
      data-name="fi-rr-hand-holding-heart"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9719)" id="fi-rr-hand-holding-heart">
          <path
            d={svgPaths.p21107a00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9719">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block leading-[28px]">
          {`Environmental Stewardship `}
          <br />
          {`& Climate Risk`}
        </p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block leading-[22.4px]">
          Reduce our environmental footprint and prepare for future climate
          realities
        </p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrHandHoldingHeart />
      <Content5 />
    </div>
  );
}

function FiRrVectorAlt() {
  return (
    <div className="relative shrink-0 size-10" data-name="fi-rr-vector-alt">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9716)" id="fi-rr-vector-alt">
          <path
            d={svgPaths.p81e2b00}
            fill="var(--fill-0, #008880)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9716">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="content"
    >
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#474747] text-[20px] w-full">
        <p className="block mb-0">{`Highly Purposeful `}</p>
        <p className="block">{`& Skilled Workforce`}</p>
      </div>
      <div className="basis-0 font-['Work_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] w-full">
        <p className="block leading-[22.4px]">
          Support our team with purposeful work, inclusion, and development
        </p>
      </div>
    </div>
  );
}

function SustainabilityPillarItem5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-6 h-[200px] items-start justify-start p-[32px] relative rounded-3xl shrink-0 w-[424px]"
      data-name="sustainability-pillar-item"
    >
      <div className="absolute border border-[#e2e3e3] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_8px_16px_0px_rgba(161,163,163,0.16)]" />
      <FiRrVectorAlt />
      <Content6 />
    </div>
  );
}

function SectionItems1() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-items"
    >
      <SustainabilityPillarItem />
      <SustainabilityPillarItem1 />
      <SustainabilityPillarItem2 />
      <SustainabilityPillarItem3 />
      <SustainabilityPillarItem4 />
      <SustainabilityPillarItem5 />
    </div>
  );
}

function SustainabilityPillarsSection() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="sustainability-pillars-section"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-[60px] py-20 relative w-full">
          <SectionTitle1 />
          <SectionItems1 />
        </div>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div
      className="absolute h-[238.136px] left-[92px] top-[99px] w-[288.86px]"
      data-name="slider"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 289 239"
      >
        <g id="slider" opacity="0.25">
          <path
            d={svgPaths.p300b3a00}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector"
          />
          <path
            d={svgPaths.p1c3f9200}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1d2c2270}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p34b6c880}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Lamp() {
  return (
    <div className="h-[220.626px] relative w-[191.611px]" data-name="lamp">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 192 221"
      >
        <g id="lamp" opacity="0.25">
          <path
            d={svgPaths.p1569b000}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector"
          />
          <path
            d={svgPaths.p9c24000}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p27634c00}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p15d22800}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p259f400}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p37a4200}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function Toothbrush() {
  return (
    <div className="h-[270.774px] relative w-[305.21px]" data-name="toothbrush">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 306 271"
      >
        <g id="toothbrush" opacity="0.2">
          <path
            d={svgPaths.p58f4380}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector"
          />
          <path
            d={svgPaths.p2710e380}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Pod() {
  return (
    <div className="h-[307.854px] relative w-[429.452px]" data-name="pod">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 430 308"
      >
        <g id="pod" opacity="0.2">
          <path
            d={svgPaths.p19cb5a80}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector"
          />
          <path
            d={svgPaths.p5c96500}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p100ed000}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p25ea2c80}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p2c0cf300}
            fill="var(--fill-0, #B0DEDC)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center leading-[0] p-0 relative shrink-0 text-center w-full"
      data-name="section-title"
    >
      <div
        className="flex flex-col font-['Source_Serif_4:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#00958d] text-[52px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[72.8px]">Sustainability by products</p>
      </div>
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#474c4c] text-[20px] w-[678px]">
        <p className="block leading-[28px]">
          How our innovative accommodations contribute to environmental goals
          through design and operations
        </p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="h-1 relative shrink-0 w-[100px]" data-name="Row">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 100 4"
      >
        <g id="Row">
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 72"
            r="2"
          />
          <circle
            cx="18"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 71"
            r="2"
          />
          <circle
            cx="34"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 70"
            r="2"
          />
          <circle
            cx="50"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 69"
            r="2"
          />
          <circle
            cx="66"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 74"
            r="2"
          />
          <circle
            cx="82"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 75"
            r="2"
          />
          <circle
            cx="98"
            cy="2"
            fill="var(--fill-0, #33AAA4)"
            id="Ellipse 73"
            r="2"
          />
        </g>
      </svg>
    </div>
  );
}

function DotsAccent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[430px] opacity-40 p-0 top-[430.5px]"
      data-name="Dots Accent"
    >
      {[...Array(7).keys()].map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
}

function ImageContent() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-start pl-0 pr-[34px] py-0 relative shrink-0"
      data-name="image-content"
    >
      <div
        className="absolute left-[-35px] size-[70px] top-[-35px]"
        data-name="ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 70 70"
        >
          <circle
            cx="35"
            cy="35"
            id="ellipse"
            r="29"
            stroke="url(#paint0_linear_1_9592)"
            strokeWidth="12"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_9592"
              x1="1.56462e-06"
              x2="81.4415"
              y1="70"
              y2="17.8774"
            >
              <stop stopColor="#CFE6A6" />
              <stop offset="1" stopColor="#006A64" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat mr-[-34px] rounded-[32px] shrink-0 size-[480px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <DotsAccent />
    </div>
  );
}

function PngLogoVertical1() {
  return (
    <div
      className="h-9 relative shrink-0 w-[143px]"
      data-name="png-logo-vertical"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="Logo_Bobopod_Horizontal_Color"
        style={{ backgroundImage: `url('${imgLogoBobopodHorizontalColor}')` }}
      />
    </div>
  );
}

function LogoLabel() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-6 p-[16px] rounded-[9999px] top-6"
      data-name="logo-label"
    >
      <PngLogoVertical1 />
    </div>
  );
}

function Image() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="image"
    >
      <ImageContent />
      <LogoLabel />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="title"
    >
      <div className="font-['Source_Serif_4:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1e2525] text-[32px] text-left w-[480px]">
        <p className="block leading-[44.8px]">Bobopod</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="content"
    >
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#474c4c] text-[18px] text-left w-full">
        <p className="block leading-[25.2px]">
          Compact, efficient accommodation pods designed for minimal
          environmental impact
        </p>
      </div>
    </div>
  );
}

function Frame13061() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Title />
      <Content7 />
    </div>
  );
}

function Badge() {
  return (
    <div
      className="bg-[#eef8f8] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#00958d] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Energy Efficient
          </p>
        </div>
      </div>
      <div className="absolute border border-[#00958d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div
      className="bg-[#eef8f8] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#00958d] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Space Optimized
          </p>
        </div>
      </div>
      <div className="absolute border border-[#00958d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div
      className="bg-[#eef8f8] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#00958d] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Eco-friendly Materials
          </p>
        </div>
      </div>
      <div className="absolute border border-[#00958d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function BadgeList() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="badge-list"
    >
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function FiRrBolt() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-bolt">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9407)" id="fi-rr-bolt">
          <path
            d={svgPaths.p96c95a0}
            fill="var(--fill-0, #00958D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9407">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="esg-label"
    >
      <FiRrBolt />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Energy Efficiency
        </p>
      </div>
    </div>
  );
}

function EsgPoints() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative rounded-3xl shrink-0 w-[337.5px]"
      data-name="esg-points"
    >
      <div className="absolute border-[#00958d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <EsgLabel />
      <div
        className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#00958d] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[44.8px]">85%</p>
      </div>
    </div>
  );
}

function FiRrFaucet() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-faucet">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9416)" id="fi-rr-faucet">
          <path
            d={svgPaths.p25e53700}
            fill="var(--fill-0, #00958D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9416">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="esg-label"
    >
      <FiRrFaucet />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Water Savings</p>
      </div>
    </div>
  );
}

function EsgPoints1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative rounded-3xl shrink-0 w-[337.5px]"
      data-name="esg-points"
    >
      <div className="absolute border-[#00958d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <EsgLabel1 />
      <div className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#00958d] text-[32px] text-left w-full">
        <p className="block leading-[44.8px]">60%</p>
      </div>
    </div>
  );
}

function FiRrRecycle() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-recycle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9683)" id="fi-rr-recycle">
          <path
            d={svgPaths.peeef00}
            fill="var(--fill-0, #00958D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9683">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="esg-label"
    >
      <FiRrRecycle />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Waste Reduction</p>
      </div>
    </div>
  );
}

function EsgPoints2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="esg-points"
    >
      <div className="absolute border-[#00958d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative w-full">
          <EsgLabel2 />
          <div className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#00958d] text-[32px] text-left w-full">
            <p className="block leading-[44.8px]">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiRrLandLayers() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-land-layers">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9676)" id="fi-rr-land-layers">
          <path
            d={svgPaths.p3016ce00}
            fill="var(--fill-0, #00958D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9676">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="esg-label"
    >
      <FiRrLandLayers />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Land Use Optimization
        </p>
      </div>
    </div>
  );
}

function EsgPoints3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="esg-points"
    >
      <div className="absolute border-[#00958d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative w-full">
          <EsgLabel3 />
          <div
            className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#00958d] text-[32px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[44.8px]">90%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EsgList() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="esg-list"
    >
      <EsgPoints />
      <EsgPoints1 />
      <EsgPoints2 />
      <EsgPoints3 />
    </div>
  );
}

function EsgParameters() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[699px]"
      data-name="esg-parameters"
    >
      <BadgeList />
      <EsgList />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',_sans-serif] font-normal gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#474c4c] text-[16px] text-left w-full"
      data-name="content"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22.4px]">
          Compact, efficient accommodation pods designed for minimal
          environmental impact
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22.4px] mb-0">Key Achievements</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              LED lighting systems reduce energy consumption by 85%
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Smart water management cuts usage by 60% compared to traditional
              hotels
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Modular design allows for 90% material reusability
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Compact footprint minimizes land disruption
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Locally sourced materials reduce transportation emissions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProductContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="product-content"
    >
      <Frame13061 />
      <EsgParameters />
      <Content8 />
    </div>
  );
}

function Bobopod() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[60px] items-start justify-end px-0 py-10 relative shrink-0 w-full"
      data-name="bobopod"
    >
      <Image />
      <ProductContent />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="title"
    >
      <div className="font-['Source_Serif_4:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1e2525] text-[32px] text-left w-[480px]">
        <p className="block leading-[44.8px]">Bobocabin</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="content"
    >
      <div className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#474c4c] text-[18px] text-left w-full">
        <p className="block leading-[25.2px]">
          Sustainable cabin experiences that blend comfort with environmental
          responsibility
        </p>
      </div>
    </div>
  );
}

function Frame13062() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Title1 />
      <Content9 />
    </div>
  );
}

function Badge3() {
  return (
    <div
      className="bg-[#eef4f3] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#005548] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Carbon Negative
          </p>
        </div>
      </div>
      <div className="absolute border border-[#005548] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div
      className="bg-[#eef4f3] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#005548] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Renewable Energy
          </p>
        </div>
      </div>
      <div className="absolute border border-[#005548] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div
      className="bg-[#eef4f3] relative rounded-[9999px] shrink-0"
      data-name="badge"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-4 py-2 relative">
        <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#005548] text-[16px] text-left text-nowrap">
          <p className="block leading-[22.4px] whitespace-pre">
            Nature Conversion
          </p>
        </div>
      </div>
      <div className="absolute border border-[#005548] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function BadgeList1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="badge-list"
    >
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function FiRrBolt1() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-bolt">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9829)" id="fi-rr-bolt">
          <path
            d={svgPaths.p96c95a0}
            fill="var(--fill-0, #33776D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9829">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="esg-label"
    >
      <FiRrBolt1 />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">Renewal Energy</p>
      </div>
    </div>
  );
}

function EsgPoints4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative rounded-3xl shrink-0 w-[337.5px]"
      data-name="esg-points"
    >
      <div className="absolute border-[#33776d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <EsgLabel4 />
      <div
        className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#33776d] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[44.8px]">85%</p>
      </div>
    </div>
  );
}

function FiRrFaucet1() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-faucet">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9648)" id="fi-rr-faucet">
          <path
            d={svgPaths.p25e53700}
            fill="var(--fill-0, #33776D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9648">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="esg-label"
    >
      <FiRrFaucet1 />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Rainwater Harvesting
        </p>
      </div>
    </div>
  );
}

function EsgPoints5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative rounded-3xl shrink-0 w-[337.5px]"
      data-name="esg-points"
    >
      <div className="absolute border-[#33776d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <EsgLabel5 />
      <div className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#33776d] text-[32px] text-left w-full">
        <p className="block leading-[44.8px]">60%</p>
      </div>
    </div>
  );
}

function FiRrRecycle1() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-recycle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9692)" id="fi-rr-recycle">
          <path
            d={svgPaths.peeef00}
            fill="var(--fill-0, #33776D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9692">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsgLabel6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="esg-label"
    >
      <FiRrRecycle1 />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Recycled Materials
        </p>
      </div>
    </div>
  );
}

function EsgPoints6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="esg-points"
    >
      <div className="absolute border-[#33776d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative w-full">
          <EsgLabel6 />
          <div className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#33776d] text-[32px] text-left w-full">
            <p className="block leading-[44.8px]">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiRrTree() {
  return (
    <div className="relative shrink-0 size-8" data-name="fi-rr-tree">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="fi-rr-tree">
          <path
            d={svgPaths.p3230dd00}
            fill="var(--fill-0, #33776D)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function EsgLabel7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="esg-label"
    >
      <FiRrTree />
      <div className="font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#5f6464] text-[18px] text-left text-nowrap">
        <p className="block leading-[25.2px] whitespace-pre">
          Nature Integration
        </p>
      </div>
    </div>
  );
}

function EsgPoints7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="esg-points"
    >
      <div className="absolute border-[#33776d] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative w-full">
          <EsgLabel7 />
          <div
            className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#33776d] text-[32px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[44.8px]">90%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EsgList1() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="esg-list"
    >
      <EsgPoints4 />
      <EsgPoints5 />
      <EsgPoints6 />
      <EsgPoints7 />
    </div>
  );
}

function EsgParameters1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[699px]"
      data-name="esg-parameters"
    >
      <BadgeList1 />
      <EsgList1 />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',_sans-serif] font-normal gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#474c4c] text-[16px] text-left w-full"
      data-name="content"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22.4px]">
          Sustainable cabin experiences that blend comfort with environmental
          responsibility
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22.4px] mb-0">Key Achievements</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              100% renewable energy through solar and wind systems
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Rainwater harvesting provides 80% of water needs
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              75% of construction materials are recycled or sustainably sourced
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Design integrates with natural forest ecosystems
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[22.4px]">
              Carbon-negative operations through forest preservation
              partnerships
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProductContent1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="product-content"
    >
      <Frame13062 />
      <EsgParameters1 />
      <Content10 />
    </div>
  );
}

function Row7() {
  return (
    <div className="h-1 relative shrink-0 w-[100px]" data-name="Row">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 100 4"
      >
        <g id="Row">
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 72"
            r="2"
          />
          <circle
            cx="18"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 71"
            r="2"
          />
          <circle
            cx="34"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 70"
            r="2"
          />
          <circle
            cx="50"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 69"
            r="2"
          />
          <circle
            cx="66"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 74"
            r="2"
          />
          <circle
            cx="82"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 75"
            r="2"
          />
          <circle
            cx="98"
            cy="2"
            fill="var(--fill-0, #33776D)"
            id="Ellipse 73"
            r="2"
          />
        </g>
      </svg>
    </div>
  );
}

function DotsAccent1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[-35px] opacity-40 p-0 top-[411px]"
      data-name="Dots Accent"
    >
      {[...Array(7).keys()].map((_, i) => (
        <Row7 key={i} />
      ))}
    </div>
  );
}

function ImageContent1() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-start pl-0 pr-[34px] py-0 relative shrink-0"
      data-name="image-content"
    >
      <div
        className="absolute left-[445px] size-[70px] top-[-35px]"
        data-name="ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 70 70"
        >
          <circle
            cx="35"
            cy="35"
            id="ellipse"
            r="29"
            stroke="url(#paint0_linear_1_9666)"
            strokeWidth="12"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_9666"
              x1="1.56462e-06"
              x2="81.4415"
              y1="70"
              y2="17.8774"
            >
              <stop stopColor="#548D84" />
              <stop offset="1" stopColor="#00241E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="[background-size:160.21%_100%] bg-[65.34%_0%] bg-no-repeat mr-[-34px] rounded-[32px] shrink-0 size-[480px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <DotsAccent1 />
    </div>
  );
}

function PngLogoVertical2() {
  return (
    <div className="h-9 relative shrink-0 w-40" data-name="png-logo-vertical">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="Logo_Bobocabin_Horizontal_Color"
        style={{ backgroundImage: `url('${imgLogoBobocabinHorizontalColor}')` }}
      />
    </div>
  );
}

function LogoLabel1() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-6 p-[16px] rounded-[9999px] top-6"
      data-name="logo-label"
    >
      <PngLogoVertical2 />
    </div>
  );
}

function Image1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="image"
    >
      <ImageContent1 />
      <LogoLabel1 />
    </div>
  );
}

function Bobocabin() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[60px] items-start justify-start px-0 py-10 relative shrink-0 w-full"
      data-name="bobocabin"
    >
      <ProductContent1 />
      <Image1 />
    </div>
  );
}

function ProductContentList() {
  return (
    <div className="relative shrink-0 w-full" data-name="product-content-list">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-10 py-0 relative w-full">
          <Bobopod />
          <Bobocabin />
        </div>
      </div>
    </div>
  );
}

function WhySustainabilityMatters() {
  return (
    <div
      className="bg-[#fafcf7] box-border content-stretch flex flex-col gap-8 items-start justify-start overflow-clip px-[60px] py-20 relative shrink-0 w-[1440px]"
      data-name="Why Sustainability Matters"
    >
      <Slider />
      <div className="absolute flex h-[291.494px] items-center justify-center left-[1156px] top-8 w-[291.494px]">
        <div className="flex-none rotate-[45deg]">
          <Lamp />
        </div>
      </div>
      <div className="absolute flex h-[270.774px] items-center justify-center left-[381.001px] top-[1137px] w-[305.21px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Toothbrush />
        </div>
      </div>
      <div className="absolute flex h-[481.319px] items-center justify-center left-[880px] top-[529px] w-[525.826px]">
        <div className="flex-none rotate-[330deg]">
          <Pod />
        </div>
      </div>
      <SectionTitle2 />
      <ProductContentList />
    </div>
  );
}

function ImpactItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div
        className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#474c4c] text-[28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[39.2px]">{`6.6 `}</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-[124px]">
        <p className="block leading-[19.6px]">Kg CO2 eq Emission/night</p>
      </div>
    </div>
  );
}

function ImpactItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div
        className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#474c4c] text-[28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[39.2px]">32</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-[164px]">
        <p className="block leading-[19.6px]">Branches across indonesia</p>
      </div>
    </div>
  );
}

function ImpactItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#474c4c] text-[28px] w-full">
        <p className="block leading-[39.2px]">39%</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-full">
        <p className="block leading-[19.6px]">
          Local talents onboarded across Indonesia
        </p>
      </div>
    </div>
  );
}

function ImpactItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div
        className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#474c4c] text-[28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[39.2px]">83k+</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-[132px]">
        <p className="block leading-[19.6px]">Plastic Bottles reduced</p>
      </div>
    </div>
  );
}

function ImpactItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#474c4c] text-[28px] w-full">
        <p className="block leading-[39.2px]">2.8%</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-full">
        <p className="block leading-[19.6px]">
          Manufacture waste reduced in average
        </p>
      </div>
    </div>
  );
}

function ImpactItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-[184px]"
      data-name="impact-item"
    >
      <div
        className="flex flex-col font-['Work_Sans:Bold',_sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#474c4c] text-[28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[39.2px]">89+</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#5f6464] text-[14px] w-[150px]">
        <p className="block leading-[19.6px]">
          Improved live quality of Families
        </p>
      </div>
    </div>
  );
}

function ImpactList() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="impact-list"
    >
      <ImpactItem />
      <ImpactItem1 />
      <ImpactItem2 />
      <ImpactItem3 />
      <ImpactItem4 />
      <ImpactItem5 />
    </div>
  );
}

function ImpactSummary() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-center justify-start left-1/2 p-[24px] rounded-lg shadow-[0px_16px_32px_0px_rgba(161,163,163,0.16)] top-[748px] translate-x-[-50%] w-[1320px]"
      data-name="impact-summary"
    >
      <ImpactList />
    </div>
  );
}

function BodySection() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-1/2 p-0 top-0 translate-x-[-50%] w-[1440px]"
      data-name="body-section"
    >
      <TopNavbarWebsite1440 />
      <HeroSection />
      <SustainabilityUspSection />
      <SustainabilityPillarsSection />
      <WhySustainabilityMatters />
      <ImpactSummary />
    </div>
  );
}

export default function SustainabilityLandingPage() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="sustainability-landing-page"
    >
      <BodySection />
    </div>
  );
}