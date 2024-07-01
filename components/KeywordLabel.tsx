'use client';

import FilterContext from '@/context/FilterContext';
import { useContext } from 'react';

type KeywordLabelProps = {
  keyword: string;
};

export default function KeywordLabel({ keyword }: KeywordLabelProps) {
  const { addFilter } = useContext(FilterContext)!;
  const handleKeywordSelect = (keyword: string) => addFilter(keyword);
  return (
    <li>
      <button
        onClick={() => handleKeywordSelect(keyword)}
        className="font-bold bg-cyan-200 px-2 pt-1 rounded-sm hover:text-cyan-100 hover:bg-primary transition-colors"
      >
        {keyword}
      </button>
    </li>
  );
}
