import jobData from '@/data.json';
import { FilterContextProvider } from '@/context/FilterContext';
import Header from '@/components/Header';
import JobList from '@/components/JobList';

export default function Home() {
  return (
    <FilterContextProvider>
      <Header />
      <main className="max-w-5xl px-6 mx-auto">
        <JobList jobs={jobData} />
      </main>
    </FilterContextProvider>
  );
}
