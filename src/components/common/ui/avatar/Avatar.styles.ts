import { SxProps, Theme } from '@mui/material/styles';

import { AvatarSize } from '@/components/common/ui/avatar/types';

export const avatar = (size: AvatarSize): SxProps<Theme> => ({
  ...(size === AvatarSize.REGULAR && {
    width: '40px',
    height: '40px',
  }),
  ...(size === AvatarSize.SMALL && {
    width: '32px',
    height: '32px',
  }),
});

export const emptyAvatar = (size: AvatarSize): SxProps<Theme> => ({
  ...(size === AvatarSize.REGULAR && {
    width: '40px',
    height: '40px',
    svg: {
      transform: 'scale(1.2)',
    },
  }),
  ...(size === AvatarSize.SMALL && {
    width: '32px',
    height: '32px',
    svg: {
      transform: 'scale(1.2)',
    },
  }),
  color: 'green.500',
  backgroundColor: 'transparent',
});
