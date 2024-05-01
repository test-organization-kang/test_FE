import * as S from './styles';

type IconValues = 
  | 'logo' 
  | 'plus' 
  | 'arrow' 
  | 'cancel'  
  | 'trophy'
  | 'file'
  | 'home'
  | 'profile'
  | 'threedot'
  | 'check'
  | 'comment'
  | 'nolike'
  | 'search'
  | 'user'
  | 'yeslike'
  | 'kakao'
  | 'google';

interface IconProps {
  value: IconValues;
  rotate?: boolean;
  onClick?: () => void;
  size?: number;
}

const Icon = ({ value, rotate, onClick, size, ...props }: IconProps) => {
  return (
    <S.Container rotate={rotate} onClick={onClick} size={size} {...props}>
      {renderIcon(value)}
    </S.Container>
  );
};

const renderIcon = (value: IconValues) => {
  switch (value) {
    case 'logo':
      return (
        <svg
          width="265"
          height="39"
          viewBox="0 0 265 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.3384 6.696H21.3224L14.6584 38H2.56238L9.22638 6.696H0.322375L1.33038 2.44H31.2904L30.3384 6.696ZM42.5289 17.504H42.9209C43.6302 16.7947 44.4515 16.1413 45.3849 15.544C46.1689 15.0213 47.1022 14.5547 48.1849 14.144C49.2675 13.7333 50.4809 13.528 51.8249 13.528C53.7662 13.528 55.3715 14.032 56.6409 15.04C57.9102 16.0107 58.5449 17.3547 58.5449 19.072C58.5449 19.5947 58.4889 20.192 58.3769 20.864C58.2649 21.4987 58.1342 22.1893 57.9849 22.936C57.8355 23.6453 57.6675 24.3733 57.4809 25.12C57.3315 25.8293 57.2009 26.4827 57.0889 27.08L54.7369 38H43.3689L46.4489 23.384C46.5235 22.8987 46.6169 22.4133 46.7289 21.928C46.8409 21.4053 46.8969 20.9387 46.8969 20.528C46.8969 19.968 46.7475 19.52 46.4489 19.184C46.1875 18.8107 45.7769 18.624 45.2169 18.624C44.5449 18.624 43.8915 18.8667 43.2569 19.352C42.6595 19.8373 42.1929 20.2667 41.8569 20.64L38.1609 38H26.7369L34.6889 0.367997H46.1689L42.5289 17.504ZM70.9174 38H59.5494L64.6454 13.92H76.1254L70.9174 38ZM77.5814 6.584C77.5814 7.44266 77.3947 8.18933 77.0214 8.824C76.6854 9.45867 76.2187 10 75.6214 10.448C75.0614 10.896 74.408 11.232 73.6614 11.456C72.9147 11.68 72.1494 11.792 71.3654 11.792C69.872 11.792 68.6214 11.4373 67.6134 10.728C66.6054 10.0187 66.1014 8.89866 66.1014 7.368C66.1014 6.54667 66.2694 5.81867 66.6054 5.184C66.9414 4.512 67.3894 3.97067 67.9494 3.56C68.5467 3.112 69.2187 2.776 69.9654 2.552C70.7494 2.328 71.552 2.216 72.3734 2.216C73.8294 2.216 75.0614 2.57066 76.0694 3.28C77.0774 3.98933 77.5814 5.09067 77.5814 6.584ZM91.5236 17.504C92.3076 16.7573 93.185 16.0667 94.1556 15.432C95.0143 14.9093 96.0223 14.424 97.1796 13.976C98.337 13.528 99.625 13.304 101.044 13.304C102.985 13.304 104.59 13.808 105.86 14.816C107.129 15.7867 107.764 17.1307 107.764 18.848C107.764 19.3333 107.708 19.9307 107.596 20.64C107.484 21.312 107.353 22.0213 107.204 22.768C107.054 23.5147 106.886 24.28 106.7 25.064C106.55 25.8107 106.42 26.4827 106.308 27.08L103.956 38H92.5876L95.6676 23.384C95.7423 22.8987 95.8356 22.4133 95.9476 21.928C96.0596 21.4053 96.1156 20.9387 96.1156 20.528C96.1156 19.968 95.9663 19.52 95.6676 19.184C95.4063 18.8107 94.9956 18.624 94.4356 18.624C93.7636 18.624 93.1103 18.8667 92.4756 19.352C91.8783 19.8373 91.4116 20.248 91.0756 20.584L87.3796 38H75.9556L81.0516 13.92H90.1796L91.1876 17.504H91.5236ZM123.16 24.112L136.208 13.92H143.6L132.456 23.048L140.8 38H128.256L122.544 26.744L120.192 38H108.768L116.72 0.367997H128.2L123.16 24.112ZM173.182 6.696H164.166L157.502 38H145.406L152.07 6.696H143.166L144.174 2.44H174.134L173.182 6.696ZM170.563 15.992C172.467 15.0587 174.409 14.3867 176.387 13.976C178.403 13.528 180.643 13.304 183.107 13.304C185.497 13.304 187.475 13.4907 189.043 13.864C190.611 14.2373 191.862 14.7787 192.795 15.488C193.729 16.1973 194.382 17.0373 194.755 18.008C195.129 18.9787 195.315 20.08 195.315 21.312C195.315 22.0213 195.259 22.7867 195.147 23.608C195.073 24.4293 194.979 25.12 194.867 25.68L192.235 38H183.219L182.211 34.416H181.875C180.681 35.7227 179.281 36.7307 177.675 37.44C176.107 38.112 174.539 38.448 172.971 38.448C172.075 38.448 171.198 38.3173 170.339 38.056C169.481 37.7947 168.715 37.4027 168.043 36.88C167.371 36.32 166.83 35.6293 166.419 34.808C166.009 33.9493 165.803 32.9227 165.803 31.728C165.803 29.7867 166.326 28.256 167.371 27.136C168.454 25.9787 169.854 25.12 171.571 24.56C173.326 23.9627 175.286 23.5893 177.451 23.44C179.654 23.2907 181.857 23.216 184.059 23.216C184.134 22.8427 184.227 22.32 184.339 21.648C184.451 20.9387 184.507 20.3227 184.507 19.8C184.507 19.128 184.321 18.512 183.947 17.952C183.611 17.3547 182.883 17.056 181.763 17.056C180.457 17.056 179.486 17.448 178.851 18.232C178.254 18.9787 177.862 19.8933 177.675 20.976H169.499L170.563 15.992ZM183.443 25.848H182.435C181.353 25.848 180.419 25.9973 179.635 26.296C178.889 26.5573 178.273 26.912 177.787 27.36C177.339 27.808 177.003 28.312 176.779 28.872C176.555 29.432 176.443 29.992 176.443 30.552C176.443 31.448 176.667 32.12 177.115 32.568C177.601 33.016 178.161 33.24 178.795 33.24C179.579 33.24 180.345 32.96 181.091 32.4C181.875 31.84 182.361 31.0933 182.547 30.16L183.443 25.848ZM212.438 17.504C213.222 16.7573 214.099 16.0667 215.07 15.432C215.928 14.9093 216.936 14.424 218.094 13.976C219.251 13.528 220.539 13.304 221.958 13.304C223.899 13.304 225.504 13.808 226.774 14.816C228.043 15.7867 228.678 17.1307 228.678 18.848C228.678 19.3333 228.622 19.9307 228.51 20.64C228.398 21.312 228.267 22.0213 228.118 22.768C227.968 23.5147 227.8 24.28 227.614 25.064C227.464 25.8107 227.334 26.4827 227.222 27.08L224.87 38H213.502L216.582 23.384C216.656 22.8987 216.75 22.4133 216.862 21.928C216.974 21.4053 217.03 20.9387 217.03 20.528C217.03 19.968 216.88 19.52 216.582 19.184C216.32 18.8107 215.91 18.624 215.35 18.624C214.678 18.624 214.024 18.8667 213.39 19.352C212.792 19.8373 212.326 20.248 211.99 20.584L208.294 38H196.87L201.966 13.92H211.094L212.102 17.504H212.438ZM244.074 24.112L257.122 13.92H264.514L253.37 23.048L261.714 38H249.17L243.458 26.744L241.106 38H229.682L237.634 0.367997H249.114L244.074 24.112Z"
            fill="#EFB628"
          />
        </svg>
      );

    case 'plus':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M28 14H18V4C18 2.896 17.104 2 16 2C14.896 2 14 2.896 14 4V14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H14V28C14 29.104 14.896 30 16 30C17.104 30 18 29.104 18 28V18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14Z"
            fill="#EEB930"
          />
        </svg>
      );
    case 'arrow':
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M40.3418 31.9629L40.166 31.7578L26.8848 16.4746C26.4355 15.957 25.7617 15.6348 25.0098 15.6348C24.2578 15.6348 23.584 15.9668 23.1348 16.4746L9.86328 31.7285L9.63867 31.9824C9.47266 32.2266 9.375 32.5195 9.375 32.832C9.375 33.6816 10.0977 34.375 10.9961 34.375L39.0039 34.375C39.9023 34.375 40.625 33.6816 40.625 32.832C40.625 32.5098 40.5176 32.207 40.3418 31.9629Z"
            fill="#EEB930"
          />
        </svg>
      );
    case 'cancel':
      return (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <path
            d="M39.0918 35.908C39.5145 36.3307 39.7519 36.9039 39.7519 37.5017C39.7519 38.0995 39.5145 38.6728 39.0918 39.0955C38.6691 39.5182 38.0958 39.7556 37.498 39.7556C36.9003 39.7556 36.327 39.5182 35.9043 39.0955L23.9999 27.1873L12.0918 39.0917C11.6691 39.5144 11.0958 39.7519 10.498 39.7519C9.90027 39.7519 9.32698 39.5144 8.90429 39.0917C8.4816 38.669 8.24414 38.0957 8.24414 37.498C8.24414 36.9002 8.4816 36.3269 8.90429 35.9042L20.8124 23.9998L8.90804 12.0917C8.48535 11.669 8.24789 11.0957 8.24789 10.498C8.24789 9.90019 8.48535 9.3269 8.90804 8.90422C9.33073 8.48153 9.90402 8.24406 10.5018 8.24406C11.0996 8.24406 11.6729 8.48153 12.0955 8.90422L23.9999 20.8123L35.908 8.90234C36.3307 8.47965 36.904 8.24219 37.5018 8.24219C38.0996 8.24219 38.6729 8.47965 39.0955 8.90234C39.5182 9.32503 39.7557 9.89832 39.7557 10.4961C39.7557 11.0939 39.5182 11.6672 39.0955 12.0898L27.1874 23.9998L39.0918 35.908Z"
            fill="#444444"
          />
        </svg>
      );
      case 'trophy':
        return (
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_7_204)">
              <path
                d="M4.55417 4.94401H9.8875C10.8688 4.94401 11.5559 4.85157 11.5559 5.8329V4.05512C11.5559 3.07379 10.8688 2.27734 9.8875 2.27734H2.77639C0.998616 2.27734 -0.408495 4.16623 0.109727 6.72179C0.109727 6.72179 1.70173 15.0551 1.81373 15.5733C2.10973 16.944 3.70173 18.2773 5.40573 18.2773H11.5906C12.5728 18.2773 11.5559 16.592 11.5559 15.6107V13.8329C11.5559 14.8142 10.8688 15.6107 9.8875 15.6107H6.33195C5.35062 15.6107 4.70262 14.6845 4.55417 13.8329C4.40573 12.9813 3.14617 7.31468 3.14617 7.31468C2.85017 5.61068 3.57195 4.94401 4.55417 4.94401ZM27.4982 4.94401H22.1648C21.1835 4.94401 19.5559 4.85157 19.5559 5.8329V4.05512C19.5559 3.07379 21.1835 2.27734 22.1648 2.27734H29.2759C31.0537 2.27734 32.4617 4.16623 31.9426 6.72179C31.9426 6.72179 30.4911 15.0942 30.3684 15.6107C30.0537 16.944 28.5533 18.2773 26.8128 18.2773H20.4608C19.4795 18.2773 19.5559 16.592 19.5559 15.6107V13.8329C19.5559 14.8142 21.1835 15.6107 22.1648 15.6107H25.7204C26.7017 15.6107 27.3506 14.6845 27.4982 13.8329C27.6457 12.9813 28.9062 7.31468 28.9062 7.31468C29.2013 5.61068 28.4804 4.94401 27.4982 4.94401ZM18.5177 20.0551C18.5177 13.8702 16.1097 20.0551 16.1097 20.0551C16.1097 20.0551 13.4431 13.8702 13.4431 20.0551C13.4431 26.24 10.5177 28.944 10.5177 28.944H21.4439C21.4431 28.944 18.5177 26.24 18.5177 20.0551Z"
                fill="#FFAC33"
              />
              <path
                d="M25.8871 6.34588C25.8871 12.3681 19.8693 22.5165 16.1093 22.5165C12.3484 22.5165 6.33154 12.3681 6.33154 6.34588C6.33154 1.7281 7.22043 0.728991 8.99821 0.728991C10.2195 0.728991 14.3538 0.704991 16.1093 0.704991L22.3315 0.704103C24.9244 0.703214 25.8871 1.3121 25.8871 6.34588Z"
                fill="#FFCC4D"
              />
              <path
                d="M24 29.8337C24 30.815 24.2018 31.6114 23.2204 31.6114H8.99822C8.016 31.6114 8 30.815 8 29.8337V28.9448C8 27.9634 9.03467 27.167 9.96089 27.167H22.3316C23.2578 27.167 24 27.9634 24 28.9448V29.8337Z"
                fill="#C1694F"
              />
              <path
                d="M25.7777 31.2775C25.7777 31.953 25.9244 32.4997 24.6648 32.4997H7.55372C6.40528 32.4997 6.22217 31.953 6.22217 31.2775V31.0552C6.22217 30.3797 6.87817 29.833 7.55372 29.833H24.6648C25.3395 29.833 25.7777 30.3797 25.7777 31.0552V31.2775Z"
                fill="#C1694F"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_204">
                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'file':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 42.5001H20V45.5001H28V42.5001ZM5.5 28.0001V20.0001H2.5V28.0001H5.5ZM42.5 27.1261V28.0001H45.5V27.1261H42.5ZM29.782 9.22211L37.7 16.3481L39.706 14.1161L31.79 6.99011L29.782 9.22211ZM45.5 27.1261C45.5 23.7481 45.53 21.6081 44.68 19.6961L41.938 20.9181C42.47 22.1141 42.5 23.4841 42.5 27.1261H45.5ZM37.7 16.3481C40.406 18.7841 41.406 19.7241 41.938 20.9181L44.68 19.6961C43.828 17.7821 42.218 16.3761 39.706 14.1161L37.7 16.3481ZM20.06 5.50011C23.224 5.50011 24.418 5.52411 25.48 5.93211L26.556 3.13211C24.852 2.47611 22.996 2.50011 20.06 2.50011V5.50011ZM31.79 6.99211C29.618 5.03811 28.26 3.78411 26.556 3.13211L25.482 5.93211C26.546 6.34011 27.442 7.11611 29.782 9.22211L31.79 6.99211ZM20 42.5001C16.186 42.5001 13.478 42.4961 11.42 42.2201C9.41 41.9501 8.25 41.4421 7.404 40.5961L5.284 42.7161C6.78 44.2161 8.678 44.8781 11.022 45.1941C13.322 45.5041 16.272 45.5001 20 45.5001V42.5001ZM2.5 28.0001C2.5 31.7281 2.496 34.6761 2.806 36.9781C3.122 39.3221 3.786 41.2201 5.282 42.7181L7.402 40.5981C6.558 39.7501 6.05 38.5901 5.78 36.5781C5.504 34.5241 5.5 31.8141 5.5 28.0001H2.5ZM28 45.5001C31.728 45.5001 34.676 45.5041 36.978 45.1941C39.322 44.8781 41.22 44.2141 42.718 42.7181L40.598 40.5981C39.75 41.4421 38.59 41.9501 36.578 42.2201C34.524 42.4961 31.814 42.5001 28 42.5001V45.5001ZM42.5 28.0001C42.5 31.8141 42.496 34.5241 42.22 36.5801C41.95 38.5901 41.442 39.7501 40.596 40.5961L42.716 42.7161C44.216 41.2201 44.878 39.3221 45.194 36.9781C45.504 34.6781 45.5 31.7281 45.5 28.0001H42.5ZM5.5 20.0001C5.5 16.1861 5.504 13.4781 5.78 11.4201C6.05 9.41011 6.558 8.25011 7.404 7.40411L5.284 5.28411C3.784 6.78011 3.122 8.67811 2.806 11.0221C2.496 13.3221 2.5 16.2721 2.5 20.0001H5.5ZM20.06 2.50011C16.31 2.50011 13.348 2.49611 11.038 2.80611C8.684 3.12211 6.78 3.78611 5.282 5.28211L7.402 7.40211C8.25 6.55811 9.412 6.05011 11.436 5.78011C13.502 5.50411 16.226 5.50011 20.06 5.50011V2.50011Z"
              fill="black"
            />
            <path
              d="M26 5V10C26 14.714 26 17.072 27.464 18.536C28.928 20 31.286 20 36 20H44"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        );
      case 'home':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0002 38.0004V28.0004H28.0002V38.0004C28.0002 39.1004 28.9002 40.0004 30.0002 40.0004H36.0002C37.1002 40.0004 38.0002 39.1004 38.0002 38.0004V24.0004H41.4002C42.3202 24.0004 42.7602 22.8604 42.0602 22.2604L25.3402 7.20043C24.5802 6.52043 23.4202 6.52043 22.6602 7.20043L5.9402 22.2604C5.2602 22.8604 5.6802 24.0004 6.6002 24.0004H10.0002V38.0004C10.0002 39.1004 10.9002 40.0004 12.0002 40.0004H18.0002C19.1002 40.0004 20.0002 39.1004 20.0002 38.0004Z"
              fill="black"
            />
          </svg>
        );
      case 'profile':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32 18C32 20.1217 31.1571 22.1566 29.6569 23.6569C28.1566 25.1571 26.1217 26 24 26C21.8783 26 19.8434 25.1571 18.3431 23.6569C16.8429 22.1566 16 20.1217 16 18C16 15.8783 16.8429 13.8434 18.3431 12.3431C19.8434 10.8429 21.8783 10 24 10C26.1217 10 28.1566 10.8429 29.6569 12.3431C31.1571 13.8434 32 15.8783 32 18ZM28 18C28 19.0609 27.5786 20.0783 26.8284 20.8284C26.0783 21.5786 25.0609 22 24 22C22.9391 22 21.9217 21.5786 21.1716 20.8284C20.4214 20.0783 20 19.0609 20 18C20 16.9391 20.4214 15.9217 21.1716 15.1716C21.9217 14.4214 22.9391 14 24 14C25.0609 14 26.0783 14.4214 26.8284 15.1716C27.5786 15.9217 28 16.9391 28 18Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM6 24C6 28.18 7.426 32.028 9.816 35.084C11.4945 32.8798 13.6598 31.0935 16.1429 29.8646C18.6259 28.6358 21.3595 27.9976 24.13 28C26.8647 27.9974 29.5638 28.619 32.0219 29.8176C34.4799 31.0161 36.6319 32.7598 38.314 34.916C40.0469 32.6432 41.2137 29.9904 41.7178 27.1772C42.2219 24.3639 42.0489 21.4711 41.213 18.738C40.3771 16.0049 38.9024 13.5101 36.911 11.4601C34.9195 9.41005 32.4685 7.86372 29.7608 6.94902C27.053 6.03432 24.1664 5.77754 21.3397 6.19995C18.513 6.62235 15.8276 7.71178 13.5055 9.37811C11.1835 11.0444 9.29162 13.2397 7.98646 15.7824C6.68129 18.325 6.00036 21.1419 6 24ZM24 42C19.8679 42.0062 15.8605 40.5847 12.656 37.976C13.9459 36.1295 15.6627 34.6218 17.6604 33.5814C19.6581 32.5409 21.8776 31.9984 24.13 32C26.3543 31.9982 28.547 32.5271 30.5259 33.5428C32.5047 34.5585 34.2127 36.0317 35.508 37.84C32.2786 40.5334 28.2052 42.0059 24 42Z"
              fill="black"
            />
          </svg>
        );
      case 'threedot':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C7.8 20 6 21.8 6 24C6 26.2 7.8 28 10 28C12.2 28 14 26.2 14 24C14 21.8 12.2 20 10 20ZM38 20C35.8 20 34 21.8 34 24C34 26.2 35.8 28 38 28C40.2 28 42 26.2 42 24C42 21.8 40.2 20 38 20ZM24 20C21.8 20 20 21.8 20 24C20 26.2 21.8 28 24 28C26.2 28 28 26.2 28 24C28 21.8 26.2 20 24 20Z"
              fill="black"
            />
          </svg>
        );
      case 'check':
        return (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 24.2547L8.29497 19.0497C8.01451 18.7693 7.63411 18.6117 7.23747 18.6117C6.84083 18.6117 6.46044 18.7693 6.17997 19.0497C5.89951 19.3302 5.74194 19.7106 5.74194 20.1072C5.74194 20.3036 5.78063 20.4981 5.85578 20.6796C5.93094 20.861 6.0411 21.0259 6.17997 21.1647L12.45 27.4348C13.035 28.0198 13.98 28.0198 14.565 27.4348L30.435 11.5647C30.7154 11.2843 30.873 10.9039 30.873 10.5072C30.873 10.1106 30.7154 9.73022 30.435 9.44975C30.1545 9.16928 29.7741 9.01172 29.3775 9.01172C28.9808 9.01172 28.6004 9.16928 28.32 9.44975L13.5 24.2547Z"
              fill="black"
            />
          </svg>
        );
      case 'comment':
        return (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 31.5C20.67 31.5 23.2801 30.7082 25.5002 29.2248C27.7203 27.7414 29.4506 25.633 30.4724 23.1662C31.4942 20.6994 31.7615 17.985 31.2406 15.3663C30.7197 12.7475 29.4339 10.3421 27.5459 8.45406C25.6579 6.56606 23.2525 5.28031 20.6337 4.7594C18.015 4.2385 15.3006 4.50585 12.8338 5.52763C10.367 6.54942 8.25856 8.27974 6.77516 10.4998C5.29176 12.7199 4.5 15.33 4.5 18C4.5 20.232 5.04 22.3365 6 24.1905L4.5 31.5L11.8095 30C13.6635 30.96 15.7695 31.5 18 31.5Z"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
        case 'nolike':
          return (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.375 6.75C29.6081 6.75 26.265 8.23688 24 10.7925C21.735 8.23688 18.3919 6.75 14.625 6.75C11.3442 6.75397 8.19884 8.05904 5.87894 10.3789C3.55904 12.6988 2.25397 15.8442 2.25 19.125C2.25 32.6887 22.0894 43.5263 22.9331 43.9819C23.261 44.1585 23.6276 44.2509 24 44.2509C24.3724 44.2509 24.739 44.1585 25.0669 43.9819C25.9106 43.5263 45.75 32.6887 45.75 19.125C45.746 15.8442 44.441 12.6988 42.1211 10.3789C39.8012 8.05904 36.6558 6.75397 33.375 6.75ZM32.3456 33.4425C29.7343 35.6584 26.9427 37.6528 24 39.405C21.0573 37.6528 18.2657 35.6584 15.6544 33.4425C11.5912 29.9569 6.75 24.6413 6.75 19.125C6.75 17.0364 7.57968 15.0334 9.05653 13.5565C10.5334 12.0797 12.5364 11.25 14.625 11.25C17.9625 11.25 20.7562 13.0125 21.9169 15.8513C22.0858 16.2651 22.3742 16.6192 22.7452 16.8685C23.1162 17.1178 23.553 17.2509 24 17.2509C24.447 17.2509 24.8838 17.1178 25.2548 16.8685C25.6258 16.6192 25.9142 16.2651 26.0831 15.8513C27.2438 13.0125 30.0375 11.25 33.375 11.25C35.4636 11.25 37.4666 12.0797 38.9435 13.5565C40.4203 15.0334 41.25 17.0364 41.25 19.125C41.25 24.6413 36.4087 29.9569 32.3456 33.4425Z"
                fill="black"
              />
            </svg>
          );
        case 'yeslike':
          return (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 19.125C45 32.25 25.5394 42.8738 24.7106 43.3125C24.4922 43.43 24.248 43.4915 24 43.4915C23.752 43.4915 23.5078 43.43 23.2894 43.3125C22.4606 42.8738 3 32.25 3 19.125C3.00347 16.0429 4.22936 13.0881 6.40872 10.9087C8.58808 8.72936 11.5429 7.50347 14.625 7.5C18.4969 7.5 21.8869 9.165 24 11.9794C26.1131 9.165 29.5031 7.5 33.375 7.5C36.4571 7.50347 39.4119 8.72936 41.5913 10.9087C43.7706 13.0881 44.9965 16.0429 45 19.125Z"
                fill="#FF0000"
              />
            </svg>
          );
        case 'search':
          return (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.292 30.7413 9.776 28.224C7.26 25.7067 6.00133 22.632 6 19C5.99867 15.368 7.25733 12.2933 9.776 9.776C12.2947 7.25867 15.3693 6 19 6C22.6307 6 25.706 7.25867 28.226 9.776C30.746 12.2933 32.004 15.368 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.6253 27.1253 25.376 25.376C27.1267 23.6267 28.0013 21.5013 28 19C27.9987 16.4987 27.124 14.374 25.376 12.626C23.628 10.878 21.5027 10.0027 19 10C16.4973 9.99733 14.3727 10.8727 12.626 12.626C10.8793 14.3793 10.004 16.504 10 19C9.996 21.496 10.8713 23.6213 12.626 25.376C14.3807 27.1307 16.5053 28.0053 19 28Z"
                fill="black"
              />
            </svg>
          );
        case 'user':
          return (
            <svg
              width="92"
              height="92"
              viewBox="0 0 92 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.0148 74.749C79.1412 66.1953 71.5311 59.5305 62.4095 55.8273C66.9455 52.4253 70.2962 47.6822 71.9869 42.27C73.6775 36.8578 73.6224 31.0509 71.8293 25.6718C70.0363 20.2926 66.5962 15.614 61.9964 12.2986C57.3966 8.98326 51.8702 7.19922 46.2001 7.19922C40.53 7.19922 35.0036 8.98326 30.4038 12.2986C25.8039 15.614 22.3638 20.2926 20.5708 25.6718C18.7778 31.0509 18.7226 36.8578 20.4133 42.27C22.1039 47.6822 25.4546 52.4253 29.9907 55.8273C20.8691 59.5305 13.2589 66.1953 8.3853 74.749C8.08332 75.2345 7.88204 75.7759 7.79345 76.3408C7.70486 76.9057 7.73075 77.4827 7.86959 78.0374C8.00844 78.5921 8.2574 79.1133 8.60167 79.5698C8.94594 80.0264 9.3785 80.4091 9.87363 80.6952C10.3688 80.9812 10.9164 81.1648 11.4839 81.235C12.0514 81.3052 12.6272 81.2606 13.1771 81.1038C13.727 80.9471 14.2398 80.6813 14.6849 80.3224C15.1301 79.9635 15.4986 79.5187 15.7684 79.0146C22.2095 67.8813 33.5845 61.2411 46.2001 61.2411C58.8157 61.2411 70.1907 67.8848 76.6318 79.0146C77.2166 79.9549 78.1441 80.631 79.2183 80.8998C80.2925 81.1687 81.4291 81.0093 82.388 80.4553C83.3468 79.9014 84.0526 78.9963 84.3562 77.9314C84.6598 76.8665 84.5374 75.7252 84.0148 74.749ZM27.7157 34.2255C27.7157 30.5696 28.7998 26.9959 30.8309 23.9561C32.862 20.9164 35.7488 18.5472 39.1264 17.1482C42.504 15.7491 46.2206 15.3831 49.8062 16.0963C53.3918 16.8095 56.6854 18.57 59.2705 21.1551C61.8556 23.7402 63.6161 27.0338 64.3293 30.6194C65.0425 34.205 64.6764 37.9216 63.2774 41.2992C61.8784 44.6768 59.5092 47.5636 56.4694 49.5947C53.4297 51.6258 49.8559 52.7099 46.2001 52.7099C41.2994 52.7042 36.6011 50.755 33.1359 47.2897C29.6706 43.8244 27.7213 39.1261 27.7157 34.2255Z"
                fill="#AAAAAA"
              />
            </svg>
          );
        case 'kakao':
          return (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20.1707C18.6274 20.1707 24 15.6553 24 10.0854C24 4.51537 18.6274 0 12 0C5.37258 0 0 4.51537 0 10.0854C0 13.5297 2.0544 16.5707 5.18953 18.3902L3.63174 23.2202C3.46323 23.7427 3.98934 24.2381 4.33893 23.8861L8.46937 19.7271C9.58562 20.0155 10.7712 20.1707 12 20.1707Z"
                fill="black"
              />
            </svg>
          );
        case 'google':
          return (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
                fill="#FFC107"
              />
              <path
                d="M4.72949 11.0182L9.65774 14.6325C10.9912 11.331 14.2207 9 18 9C20.2942 9 22.3815 9.8655 23.9707 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C12.2385 3 7.24199 6.25275 4.72949 11.0182Z"
                fill="#FF3D00"
              />
              <path
                d="M18 33C21.8745 33 25.395 31.5173 28.0567 29.106L23.4142 25.1775C21.8576 26.3613 19.9556 27.0016 18 27C14.0985 27 10.7857 24.5123 9.53774 21.0405L4.64624 24.8093C7.12874 29.667 12.1702 33 18 33Z"
                fill="#4CAF50"
              />
              <path
                d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8857 22.6623 24.82 24.1149 23.412 25.1782L23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
                fill="#1976D2"
              />
            </svg>
          );
  }
};

export default Icon;
