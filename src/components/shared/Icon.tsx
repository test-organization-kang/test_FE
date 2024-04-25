type IconValues = 'plus';

interface IconProps {
  value: IconValues;
}

const Icon = ({ value }: IconProps) => {
  return <>{renderIcon(value)}</>;
};

const renderIcon = (value: IconValues) => {
  switch (value) {
    case 'plus':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M28 14H18V4C18 2.896 17.104 2 16 2C14.896 2 14 2.896 14 4V14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H14V28C14 29.104 14.896 30 16 30C17.104 30 18 29.104 18 28V18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14Z"
            fill="#EEB930"
          />
        </svg>
      );
  }
};

export default Icon;