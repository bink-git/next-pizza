import {
  Categories,
  Container,
  Title,
  TopBar,
  Filters,
} from '@/components/shared';
import { PrpoductCard } from '@/components/shared/prpoduct-card';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* pizzas */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <PrpoductCard
                name="Quadro"
                id={2}
                price={234}
                imageUrl="https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
