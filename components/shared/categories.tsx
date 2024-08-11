'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Pizzas' },
  { id: 2, name: 'Sets' },
  { id: 3, name: 'Combo' },
  { id: 4, name: 'Drinks' },
  { id: 5, name: 'Deserts' },
  { id: 6, name: 'Coffee' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white text-primary shadow-md shadow-gray-200'
          )}
          key={index}
          href={`/#${name}`}
        >
          <button>
            <span>{name}</span>
          </button>
        </a>
      ))}
    </div>
  );
};
