import Image from 'next/image';
import KeywordLabel from './KeywordLabel';

type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type JobItemProps = {
  job: Job;
};

export default function JobItem({ job }: JobItemProps) {
  const keywords = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <li className="relative bg-white px-6 py-8 my-8 rounded-md shadow-lg shadow-primary/50">
      <div className="absolute size-12 -top-6">
        <Image src={job.logo} fill={true} alt={`Logo of ${job.company}`} />
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="font-bold mr-4">{job.company}</h2>
        <p className="bg-primary text-cyan-100 px-2 pt-1 rounded-full">NEW!</p>
        <p className="bg-cyan-700 text-cyan-100 px-2 pt-1 rounded-full">
          FEATURED
        </p>
      </div>
      <h3 className="font-bold text-cyan-700 mt-2">{job.position}</h3>
      <p className="mt-2 text-cyan-500">
        {job.postedAt} <span>&#8226;</span> {job.contract} <span>&#8226;</span>{' '}
        {job.location}
      </p>
      <hr className="bg-cyan-500 my-4" />
      <ul className="flex flex-wrap gap-4">
        {keywords.map((keyword) => (
          <KeywordLabel key={`${job.id}-${keyword}`} keyword={keyword} />
        ))}
      </ul>
    </li>
  );
}
