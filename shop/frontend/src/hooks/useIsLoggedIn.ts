import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';

export const useIsLoggedIn = (): boolean => {
  return useAppSelector((state: RootState) => state.user.isLoggedIn);
};
