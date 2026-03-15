import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { MaterialItem } from '@/type/material';

interface ProductsCarouselSectionProps {
  products: MaterialItem[];
}

const ProductsCarouselSection = ({ products }: ProductsCarouselSectionProps) => {
  if (!products.length) return null;

  return (
    <section className="mb-12 w-full overflow-x-hidden bg-white p-10 py-16 text-center dark:bg-gray-600">
      <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400">
        Навчальний простір
      </h3>
      <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
        Навчальні кабінети, лабораторії та інші ресурси, які ми пропонуємо для забезпечення якісної
        освіти
      </p>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map(product => (
              <CarouselItem
                key={`${product.id}-${product.name}`}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="transition-shadow hover:shadow-lg">
                    <CardContent className="p-4 dark:bg-gray-700 dark:text-gray-400">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="mb-4 h-48 w-full rounded-md object-cover"
                      />
                      <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                      <p className="text-xl font-bold text-primary">{product.price}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsCarouselSection;
