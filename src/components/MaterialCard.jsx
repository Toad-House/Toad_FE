const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

export default function MaterialCard() {
  return (
    <div className="max-w-2xl px-4 py-4 mx-auto sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border shadow-md rounded-2xl group"
          >
            <div className="w-full overflow-hidden bg-gray-200 rounded-t-2xl aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center w-full h-full border-b-2 lg:h-full lg:w-full"
              />
            </div>
            <div className="pb-3">
              <div className="flex items-center justify-between mt-4">
                <div className="flex w-1/2 h-full">
                  <h3 className="ml-4 text-base font-semibold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <div className="flex items-center justify-end w-1/2 h-full">
                  <p className="text-xl font-bold text-[#5ED127] mr-2">
                    {product.price}
                  </p>
                  <p className="mr-5 text-gray-900 text-[12px]">/ 1kg</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
