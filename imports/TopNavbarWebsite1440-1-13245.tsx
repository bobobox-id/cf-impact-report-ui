import svgPaths from "./svg-riluy3nmsa";
import imgLogoBoboboxHorizontalColor from "figma:asset/2434156a655cce205b213c80183cb21735c3cee7.png";

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

function BaseButton1() {
  return (
    <div
      className="bg-[#eef8f8] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-0 relative rounded-lg shrink-0 w-[120px]"
      data-name="base-button"
    >
      <div className="flex flex-col font-['Work_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008880] text-[14px] text-left text-nowrap">
        <p className="block leading-[19.6px] whitespace-pre">Book now!</p>
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
      <BaseButton1 />
    </div>
  );
}

export default function TopNavbarWebsite1440() {
  return (
    <div
      className="bg-[#ffffff] relative shadow-[0px_4px_8px_0px_rgba(161,163,163,0.16)] size-full"
      data-name="top-navbar-website-1440"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-[60px] py-5 relative size-full">
          <PngLogoVertical />
          <MenuList />
          <NavbarButton />
        </div>
      </div>
    </div>
  );
}