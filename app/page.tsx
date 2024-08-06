import {
  Categories,
  Container,
  Title,
  TopBar,
  Filters,
} from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

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
        <div className="flex gap-[80px]">
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* pizzas */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Burgers"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Margherita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
