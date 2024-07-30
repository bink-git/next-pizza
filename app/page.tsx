import { Categories, Container, Title } from '@/components/shared';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}
