import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import productData from '@/data/products.json'

function productPage() {
  return (
    <div className="flex min-h-screen w-auto flex-col justify-center gap-6 bg-black py-12 pt-36">
      <div className="relative z-10 p-4 text-center">
        <h2
          className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl"
          id="getting-started"
        >
          Creators Products ({productData.products.length})
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
          Explore the diverse range of products created by our talented community of creators.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {productData.products.map(product => (
          <Card className="m-4 max-w-[400px]" key={product.title}>
            <CardHeader className="flex gap-3">
              <Image
                alt={product.title}
                height={40}
                radius="sm"
                src={product.thumbnail}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{product.title}</p>
                <p className="text-small text-default-500">{product.creator}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="mb-3">{product.description}</p>
              <Image alt={product.title} height={300} radius="sm" src={product.image} width={500} />
            </CardBody>
            <Divider />
            <CardFooter className="flex items-center justify-between">
              <span className="text-xs font-normal text-neutral-400">
                {product.isAvailable ? 'Available' : 'Unavailable'}
              </span>
              {/* <Chip color="success" variant="flat" size='lg'>$ 9.99</Chip> */}
              <Link
                isExternal
                href={product.link}
                className="text-xs font-bold text-emerald-500 hover:text-emerald-600"
              >
                <Button color="primary" variant="flat">
                  Order Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default productPage
