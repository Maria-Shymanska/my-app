'use client';

import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '../../../lib/api';

export default function CompanyTableBody() {
  const { data: companies = [], isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: getCompanies,
  });

  if (isLoading) {
    return (
      <tr>
        <td colSpan={6} className="text-center py-4">
          Loading...
        </td>
      </tr>
    );
  }

  return (
    <>
      {companies.map((company) => (
        <tr key={company.id} className="bg-white rounded-md shadow-sm">
          <td className="p-2">{company.categoryId}</td>
          <td className="p-2">{company.title}</td>
          <td className="p-2">{company.status}</td>
          <td className="p-2">{company.hasPromotions}</td>
          <td className="p-2">{company.countryId}</td>
          <td className="p-2">{company.joinedDate}</td>
        </tr>
      ))}
    </>
  );
}
