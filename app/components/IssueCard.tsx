import React from "react";
import Image from "next/image";

interface IssueCardProps {
  issue?: string;
  className?: string;
  background?: string;
  title?: string;
  size?: string;
  uniformSize?: boolean;
}

interface IssueData {
  title: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
}

interface SizeData {
  card: string;
  cardPadding: string;
  text: string;
  cardSize: {
    width: string;
    height: string;
  };
  blobSize: {
    width: string;
    height: string;
  };
  iconSize: {
    width: number;
    height: number;
  };
  iconOffset: string;
}

const IssueCard = ({
  issue,
  className,
  background,
  title,
  size = "normal",
  uniformSize = false,
}: IssueCardProps) => {
  let data: IssueData = {
    title: "",
    icon: "",
    alt: "",
    width: 0,
    height: 0,
  };
  switch (issue) {
    case "depression":
      data = {
        title: "Depression and low mood",
        icon: "/icons/depression.png",
        alt: "Depression icon",
        width: 67,
        height: 66,
      };
      break;
    case "anxiety":
      data = {
        title: "Anxiety and overwhelm",
        icon: "/icons/anxiety.png",
        alt: "Anxiety and overwhelm icon",
        width: 77,
        height: 76,
      };
      break;
    case "confidence":
      data = {
        title: "Low confidence and self esteem",
        icon: "/icons/confidence.png",
        alt: "Low confidence and self esteem icon",
        width: 76,
        height: 75,
      };
      break;
    case "trauma":
      data = {
        title: "Trauma",
        icon: "/icons/trauma.png",
        alt: "Trauma icon",
        width: 68,
        height: 67,
      };
      break;
    case "family":
      data = {
        title: "Family and relationship issues",
        icon: "/icons/family.png",
        alt: "Family and relationship issues icon",
        width: 68,
        height: 67,
      };
      break;
    case "grief":
      data = {
        title: "Grief and loss",
        icon: "/icons/grief.png",
        alt: "Grief and loss icon",
        width: 76,
        height: 75,
      };
      break;
    case "identity":
      data = {
        title: "Identity issues",
        icon: "/icons/identity.png",
        alt: "Identity issues icon",
        width: 67,
        height: 66,
      };
      break;
    case "work":
      data = {
        title: "Issues relating to work or study",
        icon: "/icons/work.png",
        alt: "Work or study issues icon",
        width: 61,
        height: 60,
      };
      break;
    case "phone":
      data = {
        title: title || "",
        icon: "/icons/contact-phone.png",
        alt: "Phone icon",
        width: 65,
        height: 65,
      };
      break;
    case "email":
      data = {
        title: title || "",
        icon: "/icons/contact-email.png",
        alt: "Email icon",
        width: 54,
        height: 54,
      };
      break;
    default:
      data = data;
  }
  let currentSize: SizeData = {
    card: "sm",
    text: "lg",
    cardSize: {
      width: "40",
      height: "50",
    },
    cardPadding: "pt-2",
    blobSize: {
      width: "98",
      height: "100",
    },
    iconSize: {
      width: 66,
      height: 66,
    },
    iconOffset: "left-4 top-4",
  };

  switch (size) {
    case "normal":
      currentSize = {
        card: "md",
        cardPadding: "pt-2",
        cardSize: {
          width: "40",
          height: "60",
        },
        text: "lg",
        blobSize: {
          width: "98",
          height: "100",
        },
        iconSize: {
          width: 66,
          height: 66,
        },
        iconOffset: "left-4 top-4",
      };
      break;
    case "small":
      currentSize = {
        card: "xs",
        cardPadding: "pt-0",
        cardSize: {
          width: "40",
          height: "50",
        },
        text: "base",
        blobSize: {
          width: "79.8",
          height: "82",
        },
        iconSize: {
          width: 50,
          height: 50,
        },
        iconOffset: "left-4 top-4",
      };
  }

  return (
    <div
      className={`card card-${currentSize.card} ${background || `bg-peach-cream-200/80`} w-40 ${uniformSize ? "h-50" : "h-max"} shadow-lg ${className}`}
    >
      <figure className={`px-10 ${currentSize.cardPadding} pt-4`}>
        <div
          className={`${size === "normal" ? "w-[120px] h-[120px]" : "w-[100px] h-[100px]"} relative`}
        >
          <svg
            width={currentSize.blobSize.width}
            height={currentSize.blobSize.height}
            viewBox="0 0 98 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            preserveAspectRatio="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M88.9314 77.5349C88.3672 78.3128 87.7762 79.0907 87.1582 79.8686C86.5403 80.6196 85.8955 81.3573 85.2239 82.0815C84.5522 82.779 83.8537 83.4764 83.1283 84.1738C82.4298 84.8444 81.691 85.5016 80.9119 86.1454C80.1328 86.7892 79.3402 87.4195 78.5342 88.0365C77.7282 88.6266 76.8954 89.2033 76.0357 89.7666C75.176 90.3299 74.3028 90.8798 73.4162 91.4163C72.5296 91.9528 71.6162 92.4624 70.6759 92.9453C69.7624 93.4281 68.8221 93.8841 67.8549 94.3133C66.8878 94.7693 65.9206 95.1985 64.9534 95.6009C63.9594 96.0032 62.9519 96.3787 61.931 96.7275C60.9101 97.0762 59.8892 97.3981 58.8682 97.6931C57.8205 98.015 56.7727 98.2967 55.7249 98.5381C54.6771 98.7795 53.6159 98.9941 52.5413 99.1819C51.4666 99.3696 50.392 99.5306 49.3174 99.6647C48.2427 99.7988 47.1681 99.8927 46.0934 99.9463C44.9919 100 43.9038 100.013 42.8292 99.9866C41.7277 99.9598 40.6396 99.9061 39.565 99.8256C38.4635 99.7452 37.3754 99.6111 36.3007 99.4233C35.2261 99.2355 34.1514 99.0209 33.0768 98.7795C32.0022 98.5113 30.9409 98.2028 29.8932 97.8541C28.8454 97.5322 27.7976 97.1566 26.7498 96.7275C25.7289 96.2983 24.7214 95.8289 23.7274 95.3192C22.7065 94.8364 21.7124 94.3133 20.7453 93.75C19.805 93.1599 18.8781 92.5429 17.9646 91.8991C17.0243 91.2822 16.1243 90.6116 15.2646 89.8873C14.4049 89.1899 13.572 88.4522 12.766 87.6743C11.9869 86.8965 11.2212 86.1051 10.469 85.3004C9.74361 84.4689 9.05852 83.6105 8.41373 82.7253C7.74208 81.8133 7.12416 80.8879 6.55997 79.949C5.96892 79.0102 5.4316 78.0579 4.94801 77.0923C4.46442 76.0998 4.02113 75.0939 3.61814 74.0746C3.21515 73.0553 2.85245 72.0225 2.53006 70.9764C2.1808 69.9303 1.88528 68.8707 1.64348 67.7977C1.40169 66.7248 1.20019 65.6518 1.03899 64.5789C0.877797 63.4791 0.770333 62.3927 0.716601 61.3197C0.636002 60.22 0.595703 59.1336 0.595703 58.0606C0.595703 56.9877 0.636002 55.9147 0.716601 54.8417C0.797199 53.7688 0.931529 52.7092 1.11959 51.6631C1.28079 50.6438 1.48228 49.6245 1.72408 48.6051C1.96587 47.5858 2.24797 46.5799 2.57036 45.5874C2.89275 44.595 3.25545 43.6293 3.65844 42.6904C4.03456 41.7248 4.45099 40.7859 4.90771 39.8739C5.36443 38.9351 5.84802 38.0231 6.35848 37.1379C6.84207 36.2527 7.36596 35.3809 7.93014 34.5225C8.49433 33.6642 9.07195 32.8192 9.66301 31.9877C10.2541 31.1561 10.8585 30.3514 11.4765 29.5735C12.0944 28.7688 12.7392 27.9775 13.4108 27.1996C14.0556 26.4485 14.7138 25.7108 15.3855 24.9866C16.0571 24.2623 16.7422 23.5515 17.4407 22.8541C18.1124 22.1567 18.7975 21.4726 19.496 20.802C20.2214 20.1314 20.9333 19.4742 21.6318 18.8305C22.3572 18.1867 23.0961 17.5697 23.8483 16.9796C24.5737 16.3627 25.3125 15.7725 26.0648 15.2092C26.8439 14.6191 27.623 14.0424 28.4021 13.4791C29.1812 12.9426 29.9738 12.4061 30.7798 11.8696C31.5589 11.3332 32.3649 10.8101 33.1977 10.3004C34.0305 9.79077 34.8768 9.29453 35.7365 8.8117C36.5963 8.32886 37.4694 7.85944 38.356 7.40343C39.2157 6.94742 40.1023 6.49142 41.0157 6.03541C41.9292 5.5794 42.8561 5.15021 43.7964 4.74785C44.7367 4.31867 45.6904 3.91631 46.6576 3.54077C47.5979 3.16524 48.5517 2.80311 49.5188 2.4544C50.486 2.13251 51.4666 1.83745 52.4607 1.56921C53.4279 1.27414 54.4085 1.03273 55.4025 0.844957C56.3697 0.630365 57.3503 0.456009 58.3444 0.321888C59.3115 0.187768 60.2787 0.0938841 61.2459 0.0402361C62.2399 -0.013412 63.2071 -0.013412 64.1474 0.0402361C65.1146 0.0938841 66.0684 0.187768 67.0087 0.321888C67.949 0.482833 68.8759 0.697425 69.7893 0.965665C70.7028 1.23391 71.6028 1.54238 72.4893 1.89109C73.4028 2.26663 74.2894 2.6824 75.1491 3.13841C76.0088 3.62124 76.8417 4.1309 77.6476 4.66738C78.4805 5.23069 79.2865 5.82082 80.0656 6.43777C80.8447 7.08154 81.6104 7.75215 82.3626 8.44957C83.1149 9.147 83.8403 9.87124 84.5388 10.6223C85.2373 11.3734 85.909 12.1647 86.5537 12.9962C87.1985 13.801 87.8165 14.6191 88.4075 15.4506C88.9986 16.309 89.5493 17.1808 90.0598 18.066C90.5971 18.9512 91.1076 19.8498 91.5911 20.7618C92.0479 21.6738 92.4912 22.5858 92.921 23.4979C93.324 24.4367 93.7001 25.3755 94.0494 26.3144C94.3986 27.2532 94.721 28.2055 95.0166 29.1711C95.3121 30.1368 95.5807 31.1025 95.8225 32.0681C96.0643 33.0606 96.2793 34.0397 96.4673 35.0054C96.6823 35.9979 96.8569 36.9903 96.9912 37.9828C97.1255 38.9753 97.233 39.9678 97.3136 40.9603C97.4211 41.9528 97.5017 42.9587 97.5554 43.978C97.5823 44.9705 97.5957 45.963 97.5957 46.9555C97.5957 47.948 97.5823 48.9404 97.5554 49.9329C97.5017 50.9523 97.4345 51.9447 97.3539 52.9104C97.2733 53.9029 97.1659 54.8954 97.0315 55.8879C96.8972 56.8535 96.736 57.8326 96.5479 58.8251C96.3867 59.7908 96.1852 60.743 95.9434 61.6819C95.7285 62.6475 95.4733 63.5864 95.1778 64.4984C94.9091 65.4372 94.6001 66.3627 94.2509 67.2747C93.9285 68.1867 93.5792 69.0853 93.2031 69.9705C92.8001 70.8557 92.3837 71.7275 91.9538 72.5858C91.4971 73.4442 91.0135 74.2892 90.5031 75.1207C90.0195 75.9522 89.4956 76.757 88.9314 77.5349Z"
              fill="#3F7B66"
            ></path>
          </svg>
          <Image
            src={data.icon}
            alt={data.alt}
            width={currentSize.iconSize.width}
            height={currentSize.iconSize.height}
            className={`absolute ${currentSize.iconOffset} object-contain`}
            sizes="auto"
            loading="lazy"
          />
        </div>
      </figure>
      <div className="items-center text-center p-2 pt-0">
        {data.title.includes("oxford") ? (
          <>
            <h2
              className={`font-noto-sans font-normal text-${currentSize.text} leading-none`}
            >
              {data.title.split("oxford")[0]}oxford
            </h2>
            <h2
              className={`font-noto-sans font-normal text-${currentSize.text} leading-none`}
            >
              {data.title.split("oxford")[1]}
            </h2>
          </>
        ) : (
          <h2 className={`font-noto-sans font-normal text-${currentSize.text}`}>
            {data.title}
          </h2>
        )}
      </div>
    </div>
  );
};

export default IssueCard;
