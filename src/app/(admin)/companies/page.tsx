import { dehydrate } from '@tanstack/react-query';
import getQueryClient from '../../../lib/utils/getQueryClient';
import { getCompanies } from '../../../lib/api';
import ClientWrapper from './ClientWrapper';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: getCompanies,
  });

  const dehydratedState = dehydrate(queryClient);

  return <ClientWrapper dehydratedState={dehydratedState} />;
}
