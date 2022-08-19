import lockerController from 'src/api/lockerController';
import { useQuery, useQueryClient } from 'react-query';
import { createDummyLockers } from 'src/utils/lockerDummy';

const useLocker = () => {
  const queryClient = useQueryClient();
  const {
    data: lockers,
    isError,
    isLoading,
  } = useQuery(['lockers'], lockerController.getLockers, {
    initialData: createDummyLockers(3),
  });

  return {
    isError,
    isLoading,
    lockers,
  };
};

export default useLocker;
