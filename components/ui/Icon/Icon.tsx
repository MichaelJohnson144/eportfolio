import { MouseEventHandler, ReactNode } from 'react';
import IconButton from '@mui/material/IconButton';

interface IconProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export default function Icon({ onClick, children }: IconProps) {
  return <IconButton onClick={onClick}>{children}</IconButton>;
}
