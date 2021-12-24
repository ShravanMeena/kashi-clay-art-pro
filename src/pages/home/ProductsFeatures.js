/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: 'Slow cooking', description: 'Cooking in clay utensils facilitate in slow cooking.' },
    { name: 'Nutritious values', description: 'The setup of earthenware is so accurate that it allows the steam and vapor to stay at a place.' },
    { name: 'Less oil requirement', description: 'Clay utensils have natural non-stick property in them by the virtue of which they ensure less usage of oil as well as less usage of salt.' },
    { name: 'pH balance of the food', description: 'The reactions related to acidity and alkalinity are well known.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Heat retention property', description: 'Clay is a bad conductor of heat.' },
  ]
  
  export default function ProductsFeatures() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://img1.wsimg.com/isteam/ip/95ea493e-1e64-4320-8751-4f9c0e6d1f8b/551ed128-9481-4ad2-9951-e9d90586ddc3.jpg/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.99%25/rs=w:1240,h:620,cg:true"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://i.ytimg.com/vi/MJ4S6do6ccc/maxresdefault.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://i.ytimg.com/vi/6HCppWEjaoY/maxresdefault.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://images1.livehindustan.com/uploadimage/library/2020/06/12/16_9/16_9_6/_1591911281.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Why MITTI wares</h2>
            <p className="mt-4 text-gray-500">
            Kashi Prajapati, a traditional clay craftsman, has developed an entire range of earthen products for daily use in the kitchen. These products include water filters, refrigerators, hot plates, cooker and other such items of daily use.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  