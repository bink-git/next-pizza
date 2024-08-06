'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '@/components/shared';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="let combine" value="1" />
        <FilterCheckbox text="new" value="2" />
      </div>

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            // value={String(filters.prices.priceFrom)}
            // onChange={(e) =>
            //   filters.setPrices('priceFrom', Number(e.target.value))
            // }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            // value={String(filters.prices.priceTo)}
            // onChange={(e) =>
            //   filters.setPrices('priceTo', Number(e.target.value))
            // }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[0, 1000]}
          // value={[
          //   filters.prices.priceFrom || 0,
          //   filters.prices.priceTo || 1000,
          // ]}
          // onValueChange={updatePrices}
        />
      </div>

      {/* ingredients */}
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Cheese sous', value: '1' },
          { text: 'Tomato sous', value: '2' },
          { text: 'China sous', value: '3' },
          { text: 'Tartar sous', value: '4' },
          { text: 'Garlic sous', value: '5' },
        ]}
        items={[
          { text: 'Cheese sous', value: '1' },
          { text: 'Tomato sous', value: '2' },
          { text: 'China sous', value: '3' },
          { text: 'Tartar sous', value: '4' },
          { text: 'Garlic sous', value: '5' },
          { text: 'Cheese sous', value: '1' },
          { text: 'Tomato sous', value: '2' },
          { text: 'China sous', value: '3' },
          { text: 'Tartar sous', value: '4' },
          { text: 'Garlic sous', value: '5' },
          { text: 'Cheese sous', value: '1' },
          { text: 'Tomato sous', value: '2' },
          { text: 'China sous', value: '3' },
          { text: 'Tartar sous', value: '4' },
          { text: 'Garlic sous', value: '5' },
        ]}
      />
    </div>
  );
};
