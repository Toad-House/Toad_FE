const posts = [
  {
    id: 1,
    title: 'waste leather',
    href: '#',
    image:
      'https://qi-o.qoo10cdn.com/goods_image_big/1/0/3/9/10695981039_l.jpg',
    description: '소가죽입니다',
    date: '2020-03-16',
    category: { title: 'leather', href: '#' },
    author: {
      name: 'seokchan',
      role: 'seller',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

function MaterialCard() {
  return (
    <div className="w-26 m-2 border-2 border-gray rounded-3xl">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <img src={post.image} className="rounded-3xl"></img>
          <div className="group relative">
            <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category.title}
            </a>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {post.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={post.author.imageUrl}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
            <div className="flex items-center gap-x-4 text-xs">
              <time className="text-gray-500">{post.date}</time>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MaterialCard
