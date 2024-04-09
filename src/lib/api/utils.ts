import StorageUtil from '@/lib/utils/StorageUtil';

export const getBearer = () => {
  return {
    headers: { Authorization: `Bearer ${StorageUtil.getToken()}` },
  };
};
