import React from 'react';
import Header from '../../../componenets/header';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({params.id})</Header>
      console.log(params.id)
    </>
  );
}
