'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import FilterContext from '@/context/FilterContext';
import iconRemove from '@/public/images/icon-remove.svg';
import Image from 'next/image';

export default function Header() {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const { filters, removeFilter, clearFilters } = useContext(FilterContext)!;
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(contentWrapperRef.current!.clientHeight);
  }, [contentWrapperRef, contentHeight, filters]);

  return (
    <header
      style={{ marginBottom: `${contentHeight / 2 + 50}px` }}
      className={`${styles.header} relative bg-primary h-[156px] w-auto px-6`}
    >
      <div
        ref={contentWrapperRef}
        style={{
          bottom: `-${contentHeight / 2}px`,
          display: filters.length > 0 ? 'flex' : 'none',
        }}
        className="absolute left-6 right-6 flex justify-between items-center bg-white max-w-[61rem] px-4 py-4 mx-auto rounded-md shadow-lg shadow-primary/35 md:px-6"
      >
        <ul className="flex flex-wrap gap-4 rounded-md">
          {filters.map((filter) => (
            <li
              key={filter}
              className="flex bg-cyan-200 rounded-md overflow-clip"
            >
              <p className="font-bold px-2 pt-1">{filter}</p>
              <button
                onClick={() => removeFilter(filter)}
                className="bg-primary p-2 hover:bg-cyan-700 transition-colors"
              >
                <Image src={iconRemove} alt="Delete icon" />
              </button>
            </li>
          ))}
        </ul>
        <button onClick={clearFilters} className="hover:underline">
          Clear
        </button>
      </div>
    </header>
  );
}
