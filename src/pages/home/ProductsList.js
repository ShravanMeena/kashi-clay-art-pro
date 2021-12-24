const products = [
  {
    id: 1,
    name: "Product",
    href: "#",
    price: "₹148",
    imageSrc:
      "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG90dGVyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc:
      "https://lh3.googleusercontent.com/proxy/PZLbjmIjyNM_B4pB8nolIu6qFqyKSg-xuzis6hsRyuPJHnMywZ55zYjDoJRK_GlO-WItNV1_bOveXUtwk956aqBda3ma-a7TdIjupJhBJ2CqyvveglWFxhuvMad9a-xqH4LY03kt8Q0d73yr2kLmbC6uxmaX5DlG_Y5LzIjrhuRVxipfXzzPrN9THFHOUOX_tuVP5t3T71WEhIxFhRrbr9m4nzfY7n5ZHY6vvRLlMlXGH09p1Q",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Product",
    href: "#",
    price: "₹189",
    imageSrc: "https://m.media-amazon.com/images/I/31zEKBaRa6L.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc:
      "https://5.imimg.com/data5/RA/GV/MY-21308948/black-clay-cooking-handi-500x500.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 15,
    name: "Product",
    href: "#",
    price: "₹148",
    imageSrc:
      "https://i.pinimg.com/originals/86/ee/d0/86eed0456d12ee0d3c3d2122cfb3e683.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 25,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc: "https://m.media-amazon.com/images/I/41lHLw1ZNNL._AC_SS450_.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 35,
    name: "Product",
    href: "#",
    price: "₹189",
    imageSrc:
      "https://opt.toiimg.com/recuperator/img/toi/m-63430808/63430808.jpg&width=500&resizemode=4",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 45,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc:
      "https://5.imimg.com/data5/SELLER/Default/2021/4/AP/NW/TR/53225275/whatsapp-image-2019-10-13-at-18-46-59-500x500.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 185,
    name: "Product",
    href: "#",
    price: "₹148",
    imageSrc:
      "https://www.jagranimages.com/images/newimg/15092020/15_09_2020-storyphoto_20750921.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 295,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc: "https://images.news18.com/ibnkhabar/uploads/2021/01/pottery.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 375,
    name: "Product",
    href: "#",
    price: "₹189",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAHbPLA73vKeidyheyI_sFqVdXWEo1hJrOk1F4_pI0q_ZeXWTZGJ8dd8aLBbKG3Gjcmg&usqp=CAU",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 145,
    name: "Product",
    href: "#",
    price: "₹135",
    imageSrc:
      "https://images1.livehindustan.com/uploadimage/library/2021/10/27/16_9/16_9_6/vastu_tips_1635313834.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  // More products...
];

export default function ProductsList() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <a key={product.id} href={product.href} className="group" style={{border:"1px solid #d3d3d3",borderRadius:10,padding:10}}>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.name} {index + 1}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
