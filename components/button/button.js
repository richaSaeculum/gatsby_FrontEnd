import React from 'react';
import ButtonStyle from './button.style';

const Button = React.forwardRef(({
  type,
  title,
  icon,
  disabled,
  iconPosition,
  onClick,
  loader,
  isLoading,
  className,
  fullwidth,
  style,
  ...props
}, ref) => {
  // Add all classs to an array
  const addAllClasses = ['button'];

  // isLoading prop checking
  if (disabled) {
    addAllClasses.push('disabled');
  }

  if (isLoading) {
    addAllClasses.push('is-loading');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Checking button loading state
  const buttonIcon =
    isLoading == true ? (
      <>{loader ? loader : 'loading....'}</>
    ) : (
      icon && <span className="btn-icon">{icon}</span>
    );

  // set icon position
  const position = iconPosition || 'right';

  const LoadingIcon = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 100 100"
        className="loading-icon"
        style={{ marginLeft: 5 }}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          ng-attr-stroke="{{config.color}}"
          ng-attr-stroke-width="{{config.width}}"
          ng-attr-r="{{config.radius}}"
          ng-attr-stroke-dasharray="{{config.dasharray}}"
          stroke="#ffffff"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(196.993 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
  };

  return (
    <ButtonStyle
      type={type}
      className={addAllClasses.join(' ')}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      fullwidth={fullwidth}
      style={style}
      {...props}
    >
      {position === 'left' && buttonIcon}
      {title && !isLoading && <span className="btn-text">{title}</span>}
      {position === 'right' && buttonIcon}
      {isLoading && <LoadingIcon />}
    </ButtonStyle>
  );
})

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button',
};

Button.displayName = 'Button'

export default Button;
