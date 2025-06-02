'use client';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import CompanyTable from '../../componenets/company-table';
import CompanyTableBody from '../companies/CompanyTableBody';

export default function ClientWrapper({
  dehydratedState,
}: {
  dehydratedState: unknown;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <CompanyTable>
          <CompanyTableBody />
        </CompanyTable>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
