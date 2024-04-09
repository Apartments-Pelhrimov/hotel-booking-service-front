import React, { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Avatar as AvatarMUI } from '@mui/material';

import { AvatarSize } from '@/components/common/ui/avatar/types';
import { User } from '@/types/user';

import * as styles from './Avatar.styles';

interface AvatarProps {
  user?: User;
  size?: AvatarSize;
}
const Avatar: FC<AvatarProps> = ({ user, size = AvatarSize.REGULAR }) => {
  const hasAvatar = !!user?.photo;
  return hasAvatar ? (
    <AvatarMUI src={user?.photo} sx={styles.avatar(size)} />
  ) : (
    <AvatarMUI sx={styles.emptyAvatar(size)}>
      <UserCircleIcon />
    </AvatarMUI>
  );
};

export default Avatar;
