import React from 'react';
import Toolbar from '../../../../componenets/toolbar';
import SearchInput from '../../../../componenets/search-input';
import AddPromotionButton from '../../../../componenets/add-promotion-button';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
