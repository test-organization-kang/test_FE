import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.yellow};
    color: ${colors.white};
  `,
  reverse: css`
    background-color: ${colors.white};
    color: ${colors.yellow};
    border: 1px solid ${colors.yellow};
  `,
  second: css`
    background-color: ${colors.yellow50};
    color: ${colors.black};
  `,
};

export const buttonActiveMap = {
  primary: css`
    background-color: ${colors.yellowHover};
    color: ${colors.white};
  `,
  reverse: css`
    background-color: ${colors.white};
    color: ${colors.yellow};
  `,
  second: css`
    background-color: ${colors.gray50};
    color: ${colors.white};
  `,
};

export const buttonSizeMap = {
  small: css`
    font-size: 16px;
    padding: 8px 12px;
  `,
  medium: css`
    font-size: 24px;
    padding: 12px 10px;
  `,
  large: css`
    font-size: 36px;
    padding: 15px 24px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
