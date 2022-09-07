import React from "react";

export const SingleView = () => {
  return (
    <svg className="icon icon-1" role="presentation" viewBox="0 0 36 36">
      <rect fill="currentColor" width="36" height="36"></rect>
    </svg>
  );
};

export const DualView = () => {
  return (
    <svg className="icon icon-2" role="presentation" viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z"
      ></path>
    </svg>
  );
};

export const MultiView = () => {
  return (
    <svg className="icon icon-4" role="presentation" viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M28 36v-8h8v8h-8zm0-22h8v8h-8v-8zm0-14h8v8h-8V0zM14 28h8v8h-8v-8zm0-14h8v8h-8v-8zm0-14h8v8h-8V0zM0 28h8v8H0v-8zm0-14h8v8H0v-8zM0 0h8v8H0V0z"
      ></path>
    </svg>
  );
};

interface IClose {
  classname?: string;
}

export const CloseIcon = (props: IClose) => {
  return (
    <svg
      className={props.classname ? props.classname : "icon-close"}
      role="presentation"
      viewBox="0 0 16 14"
    >
      <path
        d="M15 0L1 14m14 0L1 0"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

interface IQtyProps {
  stroke?: string;
}

export const MinusIcon = (props: IQtyProps) => {
  return (
    <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
      <path
        d="M1,1 L15,1"
        stroke={props.stroke ? props.stroke : "currentColor"}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      ></path>
    </svg>
  );
};
export const PlusIcon = (props: IQtyProps) => {
  return (
    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
      <g
        stroke={props.stroke ? props.stroke : "currentColor"}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <path d="M8,1 L8,15"></path>
        <path d="M1,8 L15,8"></path>
      </g>
    </svg>
  );
};

export const Facebook = () => {
  return (
    <span className="icon-wrapper">
      <svg className="icon icon--facebook" viewBox="0 0 9 17">
        <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
      </svg>
    </span>
  );
};

export const Instagram = () => {
  return (
    <span className="icon-wrapper">
      <svg
        className="icon icon--instagram"
        role="presentation"
        viewBox="0 0 32 32"
      >
        <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
      </svg>
    </span>
  );
};

export const Twitter = () => {
  return (
    <span className="icon-wrapper">
      <svg
        className="icon icon--twitter"
        role="presentation"
        viewBox="0 0 32 26"
      >
        <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path>
      </svg>
    </span>
  );
};

interface IAddIcon {
  name: string;
}

export const AddressIcon = (props: IAddIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={props.name}
    >
      <g fillRule="evenodd">
        <path d="M8 14.933A6.941 6.941 0 0 1 1.067 8 6.941 6.941 0 0 1 8 1.067 6.941 6.941 0 0 1 14.933 8 6.941 6.941 0 0 1 8 14.933M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path>
        <path d="M8 3.429a4.571 4.571 0 1 0 0 9.143 4.571 4.571 0 0 0 0-9.143"></path>
      </g>
    </svg>
  );
};

interface IShowMore {
  classname?: string;
  transform?: string;
}

export const ShowMore: React.FC<IShowMore> = (props: IShowMore) => {
  const { classname, transform } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      viewBox="0 0 7 12"
      className={classname}
      style={{ transform: transform }}
    >
      <path
        fillRule="evenodd"
        d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"
      ></path>
    </svg>
  );
};

interface ICheck {
  classname?: string;
}

export const CheckBox = (props: ICheck) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={props.classname}
      id="saveCard-icon"
      data-value="true"
    >
      <path
        fillRule="evenodd"
        d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
      ></path>
    </svg>
  );
};

export const WishList = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.name}
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      viewBox="0 0 20 16"
    >
      <path
        d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
        fill={props.fill ? "#e41b22" : "white"}
        stroke={props.fill ? "#e41b22" : "#939393"}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const FlashSaleIcon = (props: any) => {
  return (
    <svg className="svgicon-flashsale" role="img">
      <use xlinkHref="#flashsale">
        <svg id="flashsale" viewBox="0 0 20 20">
          <path
            d="M15.7432968,0.982350918 L16.7256477,3.90798505e-14 L20,3.27447565 L19.0176491,4.25682657 L15.7432968,0.982350918 Z M15.6538391,2.43398668 C14.0856987,1.22367697 12.1281543,0.508015578 10.002219,0.508015578 C4.88734489,0.508015578 0.740718586,4.65464189 0.740718586,9.76951596 C0.740718586,14.88439 4.88734489,19.0310163 10.002219,19.0310163 C15.117093,19.0310163 19.2637194,14.88439 19.2637194,9.76951596 C19.2637194,7.70672724 18.5901557,5.801805 17.4429926,4.26523789 C16.9378198,3.57062536 16.3274028,2.96020829 15.6538391,2.43398668 L15.6538391,2.43398668 Z M10.002219,17.6417913 C5.65562845,17.6417913 2.12994364,14.1161065 2.12994364,9.76951596 C2.12994364,5.42292544 5.65562845,1.89724064 10.002219,1.89724064 C11.7703236,1.89724064 13.4331839,2.47608441 14.8013601,3.52852764 C15.3802039,3.97055379 15.895901,4.4967754 16.3274028,5.08614361 C17.3272238,6.43327094 17.8744943,8.0540335 17.8744943,9.76951596 C17.8744943,14.1161065 14.3488095,17.6417913 10.002219,17.6417913 Z M0,3.27698959 L3.27435232,0.00274005238 L4.25670324,0.98509097 L0.982227584,4.25944329 L0,3.27698959 Z M11.4440662,4.4020514 L7.0764268,9.9484272 L9.76015703,10.6640886 L8.56037175,15.1369723 L12.9280111,9.5905965 L10.2442809,8.87493511 L11.4440662,4.4020514 Z"
            fill="#FFF"
            fillRule="nonzero"
          ></path>
        </svg>
      </use>
    </svg>
  );
};

export const CheckBoxIcon = (props: any) => {
  return (
    <svg
      className="Icon Icon--checkmark"
      role="presentation"
      viewBox="0 0 24 24"
    >
      <polygon
        fill="currentColor"
        points="9,20 2,13 5,10 9,14 19,4 22,7 "
      ></polygon>
    </svg>
  );
};

export const DeliveryBusIcon = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M1.45455 0C0.650909 0 0 0.650909 0 1.45455V9.45455H1.45455C1.45455 10.6596 2.43127 11.6364 3.63636 11.6364C4.84145 11.6364 5.81818 10.6596 5.81818 9.45455H9.45455H10.1818C10.1818 10.6596 11.1585 11.6364 12.3636 11.6364C13.5687 11.6364 14.5455 10.6596 14.5455 9.45455H15.2727H16V5.81818L14.0185 1.85653C13.8956 1.60999 13.645 1.45455 13.3693 1.45455H10.9091V0H1.45455ZM1.45455 1.45455H9.45455V4.36364V5.81818V8H5.25142C4.85209 7.55685 4.27994 7.27273 3.63636 7.27273C2.99279 7.27273 2.42063 7.55685 2.02131 8H1.45455V1.45455ZM10.9091 2.90909H12.919L13.6463 4.36364H10.9091V2.90909ZM10.9091 5.81818H14.3736L14.5455 6.16193V6.54546V7.53267V8H13.9787C13.5794 7.55685 13.0072 7.27273 12.3636 7.27273C11.8021 7.27273 11.2957 7.49108 10.9091 7.83949V6.93608V6.54546V5.81818ZM3.63636 8.54546C4.13745 8.54546 4.54545 8.95346 4.54545 9.45455C4.54545 9.95564 4.13745 10.3636 3.63636 10.3636C3.13527 10.3636 2.72727 9.95564 2.72727 9.45455C2.72727 8.95346 3.13527 8.54546 3.63636 8.54546ZM12.3636 8.54546C12.8647 8.54546 13.2727 8.95346 13.2727 9.45455C13.2727 9.95564 12.8647 10.3636 12.3636 10.3636C11.8625 10.3636 11.4545 9.95564 11.4545 9.45455C11.4545 8.95346 11.8625 8.54546 12.3636 8.54546Z"
        fill="#001325"
        fillOpacity="0.64"
      ></path>
    </svg>
  );
};

export const ViewMoreIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M5.1 14.1C6.2598 14.1 7.2 13.1598 7.2 12C7.2 10.8402 6.2598 9.90002 5.1 9.90002C3.9402 9.90002 3 10.8402 3 12C3 13.1598 3.9402 14.1 5.1 14.1Z"
        fill="#000"
      ></path>
      <path
        d="M18.9 14.1C20.0598 14.1 21 13.1598 21 12C21 10.8402 20.0598 9.90002 18.9 9.90002C17.7403 9.90002 16.8 10.8402 16.8 12C16.8 13.1598 17.7403 14.1 18.9 14.1Z"
        fill="#000"
      ></path>
      <path
        d="M12 14.1C13.1598 14.1 14.1 13.1598 14.1 12C14.1 10.8402 13.1598 9.90002 12 9.90002C10.8402 9.90002 9.90002 10.8402 9.90002 12C9.90002 13.1598 10.8402 14.1 12 14.1Z"
        fill="#000"
      ></path>
    </svg>
  );
};

export const ArrowIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Arrow__Icon"
    >
      <path
        d="M10 5L11.5 6.5L6.92969 11.0703H21V13.0703H6.92969L11.5 17.6406L10 19.1406L2.92969 12.0703L10 5Z"
        fill="#001325"
      ></path>
    </svg>
  );
};

export const QuantityChangeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Quantity__ChangeIcon"
    >
      <rect opacity="0.01" width="24" height="24" fill="#fff"></rect>
      <path
        d="M16 2.25C16.3797 2.25 16.6935 2.53215 16.7432 2.89823L16.75 3V5.66625C16.75 6.08046 16.4142 6.41625 16 6.41625C15.6203 6.41625 15.3065 6.1341 15.2568 5.76802L15.25 5.66625V3.75H5.75V17.25H8.00037C8.38006 17.25 8.69386 17.5322 8.74352 17.8982L8.75037 18C8.75037 18.3797 8.46821 18.6935 8.10214 18.7432L8.00037 18.75H5C4.6203 18.75 4.30651 18.4678 4.25685 18.1018L4.25 18V3C4.25 2.6203 4.53215 2.30651 4.89823 2.25685L5 2.25H16Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6V21C19.75 21.4142 19.4142 21.75 19 21.75H8C7.58579 21.75 7.25 21.4142 7.25 21V6C7.25 5.58579 7.58579 5.25 8 5.25ZM18.25 20.25V6.75H8.75V20.25H18.25Z"
        fill="#fff"
      ></path>
    </svg>
  );
};

export const DeleteAllIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="RemoveIcon"
    >
      <path
        d="M9.29999 16.23C9.10188 16.2274 8.91262 16.1475 8.77252 16.0074C8.63243 15.8674 8.55258 15.6781 8.54999 15.48V11.48C8.54999 11.2811 8.629 11.0903 8.76966 10.9497C8.91031 10.809 9.10108 10.73 9.29999 10.73C9.4989 10.73 9.68967 10.809 9.83032 10.9497C9.97097 11.0903 10.05 11.2811 10.05 11.48V15.48C10.0474 15.6781 9.96755 15.8674 9.82745 16.0074C9.68736 16.1475 9.49809 16.2274 9.29999 16.23Z"
        fill="#fff"
      ></path>
      <path
        d="M12 16.23C11.8019 16.2274 11.6126 16.1475 11.4725 16.0074C11.3324 15.8674 11.2526 15.6781 11.25 15.48V11.48C11.25 11.2811 11.329 11.0903 11.4697 10.9497C11.6103 10.809 11.8011 10.73 12 10.73C12.1989 10.73 12.3897 10.809 12.5303 10.9497C12.671 11.0903 12.75 11.2811 12.75 11.48V15.48C12.7474 15.6781 12.6676 15.8674 12.5275 16.0074C12.3874 16.1475 12.1981 16.2274 12 16.23Z"
        fill="#fff"
      ></path>
      <path
        d="M14.7 16.23C14.5019 16.2274 14.3126 16.1475 14.1725 16.0074C14.0325 15.8674 13.9526 15.6781 13.95 15.48V11.48C13.95 11.2811 14.029 11.0903 14.1697 10.9497C14.3103 10.809 14.5011 10.73 14.7 10.73C14.8989 10.73 15.0897 10.809 15.2303 10.9497C15.371 11.0903 15.45 11.2811 15.45 11.48V15.48C15.4474 15.6781 15.3676 15.8674 15.2275 16.0074C15.0874 16.1475 14.8981 16.2274 14.7 16.23Z"
        fill="#fff"
      ></path>
      <path
        d="M19.5 6H15.79V4C15.79 3.73478 15.6846 3.48043 15.4971 3.29289C15.3096 3.10536 15.0552 3 14.79 3H9.21C8.94478 3 8.69043 3.10536 8.50289 3.29289C8.31536 3.48043 8.21 3.73478 8.21 4V6H4.5C4.30109 6 4.11032 6.07902 3.96967 6.21967C3.82902 6.36032 3.75 6.55109 3.75 6.75C3.75 6.94891 3.82902 7.13968 3.96967 7.28033C4.11032 7.42098 4.30109 7.5 4.5 7.5H5.5V20C5.5 20.2652 5.60536 20.5196 5.79289 20.7071C5.98043 20.8946 6.23478 21 6.5 21H17.5C17.7652 21 18.0196 20.8946 18.2071 20.7071C18.3946 20.5196 18.5 20.2652 18.5 20V7.49H19.5C19.6989 7.49 19.8897 7.41098 20.0303 7.27033C20.171 7.12968 20.25 6.93891 20.25 6.74C20.25 6.54109 20.171 6.35032 20.0303 6.20967C19.8897 6.06902 19.6989 5.99 19.5 5.99V6ZM9.71 4.5H14.29V6H9.71V4.5ZM17 19.5H7V7.5H17V19.5Z"
        fill="#fff"
      ></path>
    </svg>
  );
};

export const OrderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M19.173 7.059l-7.232-4a.469.469 0 0 0-.454 0l-7.232 4A.503.503 0 0 0 4 7.5v9c0 .185.098.355.255.441l7.232 4a.469.469 0 0 0 .454 0l7.232-4a.503.503 0 0 0 .256-.441v-9a.503.503 0 0 0-.256-.441zm-7.459-2.992L17.922 7.5 15.33 8.933 9.123 5.5l2.591-1.433zm-.482 15.6L4.964 16.2V8.334l6.268 3.466v7.866zm.482-8.734L5.507 7.5l2.591-1.433L14.305 9.5l-2.59 1.433zm6.75 5.267l-6.268 3.466V11.8l6.268-3.466V16.2z"
      ></path>
    </svg>
  );
};

export const LeftArrowIcon = () => {
  return (
    <svg
      data-bbox="13.05 2.55 33.878 54.8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <g>
        <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"></path>
      </g>
    </svg>
  );
};
