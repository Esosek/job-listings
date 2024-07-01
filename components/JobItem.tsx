import Image from 'next/image';
import KeywordLabel from './KeywordLabel';
import Link from 'next/link';
import { type Job } from '@/types/Job';

type JobItemProps = {
  job: Job;
  order: number;
};

export default function JobItem({ job, order }: JobItemProps) {
  const keywords = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <li className="relative bg-white px-6 py-8 my-12 rounded-md shadow-lg shadow-primary/35 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:justify-start lg:gap-4 lg:py-4 lg:my-6">
      {job.featured && (
        <div className="absolute top-0 bottom-0 left-0 w-[0.3rem] bg-primary rounded-l-md"></div>
      )}

      <div className="absolute size-12 -top-6 lg:relative lg:size-20 lg:top-0">
        <Image
          src={job.logo}
          fill={true}
          alt={`Logo of ${job.company}`}
          priority={order < 4}
        />
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold mr-4">{job.company}</h2>
          {job.new && (
            <p className="bg-primary text-cyan-100 px-2 pt-1 rounded-full">
              NEW!
            </p>
          )}

          {job.featured && (
            <p className="bg-cyan-700 text-cyan-100 px-2 pt-1 rounded-full">
              FEATURED
            </p>
          )}
        </div>
        <h3 className="font-bold mt-4">
          <Link href="#" className=" text-cyan-700 hover:text-primary">
            {job.position}
          </Link>
        </h3>
        <p className="mt-2 text-cyan-500">
          {job.postedAt} <span className="mx-1">&#8226;</span> {job.contract}{' '}
          <span className="mx-1">&#8226;</span> {job.location}
        </p>
      </div>
      <hr className="bg-cyan-500 my-4 lg:hidden" />
      <ul className="flex flex-wrap gap-4">
        {keywords.map((keyword) => (
          <KeywordLabel key={`${job.id}-${keyword}`} keyword={keyword} />
        ))}
      </ul>
    </li>
  );
}
