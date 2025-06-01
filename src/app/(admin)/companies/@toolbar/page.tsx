import React from 'react';
import Toolbar from '../../../componenets/toolbar';
import SearchInput from '../../../componenets/search-input';
import AddCompanyButton from '../../../componenets/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
