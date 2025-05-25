import StatusLabel, { Status } from '../app/componenets/status-label';
import AddCompanyButton from './componenets/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
