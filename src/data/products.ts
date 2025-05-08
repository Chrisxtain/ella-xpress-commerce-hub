import { Product, Category, BlogPost } from './types';

export const categories: Category[] = [
  {
    id: 1,
    name: "Female Hair",
    slug: "female-hair",
    description: "All female hair accessories and styling products",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    name: "Home Improvement",
    slug: "home-improvement",
    description: "Products to enhance and improve your home",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    name: "Fashion",
    slug: "fashion",
    description: "Trendy clothes and fashion accessories",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Laundry",
    slug: "laundry",
    description: "Everything you need for effective laundry care",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    name: "Travel",
    slug: "travel",
    description: "Essential gear and accessories for travelers",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwZ2VhcnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

export const products: Product[] = [
  // Female Hair Category Products
  {
    id: 1,
    name: "Professional Hair Dryer",
    price: 79.99,
    discountPrice: 59.99,
    category: "Female Hair",
    categorySlug: "female-hair",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGRyeWVyfGVufDB8fDB8fHww",
    description: "Powerful 2000W hair dryer with ionic technology for fast drying and reduced frizz. Multiple heat and speed settings for customized styling.",
    rating: 4.7,
    reviewCount: 123,
    isFeatured: true,
    features: ["2000W power", "Ionic technology", "3 heat settings", "2 speed settings", "Cool shot button", "Removable filter", "Concentrator nozzle"],
    reviews: [
      {
        id: 1,
        user: "Jessica K.",
        rating: 5,
        date: "2025-04-15",
        comment: "This hair dryer changed my morning routine completely! It dries my thick hair in half the time of my old one, and leaves it looking so smooth."
      },
      {
        id: 2,
        user: "Michelle T.",
        rating: 4,
        date: "2025-04-02",
        comment: "Great hair dryer, very powerful. I knocked off one star because it's a bit heavy for long styling sessions."
      }
    ]
  },
  {
    id: 2,
    name: "Ceramic Hair Straightener",
    price: 129.99,
    discountPrice: 89.99,
    category: "Female Hair",
    categorySlug: "female-hair",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMHN0cmFpZ2h0ZW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Professional ceramic hair straightener with adjustable temperature control. The floating plates provide even pressure for smooth, shiny results.",
    rating: 4.8,
    reviewCount: 95,
    isHot: true,
    features: ["Ceramic plates", "Adjustable temperature up to 450°F", "30-second heat up", "Auto shut-off", "Dual voltage", "Swivel cord", "LCD display"],
    reviews: [
      {
        id: 1,
        user: "Amanda L.",
        rating: 5,
        date: "2025-03-28",
        comment: "This straightener glides through my curly hair like butter. I'm getting salon-quality results at home!"
      },
      {
        id: 2,
        user: "Sarah W.",
        rating: 5,
        date: "2025-03-15",
        comment: "I love that I can adjust the temperature for different hair types. Works great on my daughter's fine hair and my thicker hair."
      }
    ]
  },
  {
    id: 3,
    name: "Volumizing Hair Clips Set",
    price: 24.99,
    category: "Female Hair",
    categorySlug: "female-hair",
    image: "https://images.unsplash.com/photo-1632169486919-f8d8c446e911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMGNsaXBzfGVufDB8fDB8fHww",
    description: "Set of 12 professional volumizing hair clips. Perfect for sectioning hair during styling and for creating volume at the roots.",
    rating: 4.5,
    reviewCount: 78,
    features: ["Set of 12 clips", "Durable construction", "Non-slip grip", "Heat resistant", "Professional quality", "Suitable for all hair types"],
    reviews: [
      {
        id: 1,
        user: "Jennifer R.",
        rating: 5,
        date: "2025-04-10",
        comment: "These clips hold even my thick, heavy hair in place while styling. Great quality!"
      },
      {
        id: 2,
        user: "Tina M.",
        rating: 4,
        date: "2025-03-22",
        comment: "Good sturdy clips, they don't slide out like cheaper ones I've tried."
      }
    ]
  },
  {
    id: 4,
    name: "Natural Bristle Hair Brush",
    price: 34.99,
    category: "Female Hair",
    categorySlug: "female-hair",
    image: "https://unsplash.com/photos/a-woman-brushing-her-long-hair-with-a-brush-HHmad7ePZ-w",
    description: "Premium natural bristle hair brush that distributes scalp oils through hair for added shine. Ergonomic handle for comfortable styling.",
    rating: 4.6,
    reviewCount: 62,
    features: ["100% natural boar bristles", "Wooden handle", "Cushioned base", "Stimulates scalp", "Reduces frizz", "Suitable for all hair lengths"],
    reviews: [
      {
        id: 1,
        user: "Rebecca T.",
        rating: 5,
        date: "2025-04-05",
        comment: "My hair has never looked better since I started using this brush. The natural bristles really make a difference."
      },
      {
        id: 2,
        user: "Emma S.",
        rating: 4,
        date: "2025-03-18",
        comment: "Quality brush that feels great on the scalp. It's a bit pricey but worth it for the results."
      }
    ]
  },
  {
    id: 5,
    name: "Blonde Human Hair",
    price: 18.99,
    category: "Female Hair",
    categorySlug: "female-hair",
    image: "https://unsplash.com/photos/a-group-of-mannequins-in-a-store-window-yfggDzL626A",
    description: "Set of 6 premium silk scrunchies that prevent hair breakage and creasing. Perfect for overnight wear or stylish everyday use.",
    rating: 4.9,
    reviewCount: 147,
    isLimited: true,
    features: ["100% mulberry silk", "Set of 6 colors", "Gentle on hair", "Prevents breakage", "No crease", "Suitable for all hair types"],
    reviews: [
      {
        id: 1,
        user: "Lisa K.",
        rating: 5,
        date: "2025-04-20",
        comment: "These are the ONLY hair ties I use now. They don't pull or damage my fine hair at all."
      },
      {
        id: 2,
        user: "Patricia M.",
        rating: 5,
        date: "2025-04-12",
        comment: "Worth every penny! I no longer wake up with creases in my hair or broken strands."
      }
    ]
  },
  // Home Improvement Category Products
  {
    id: 6,
    name: "Cordless Power Drill",
    price: 159.99,
    discountPrice: 129.99,
    category: "Home Improvement",
    categorySlug: "home-improvement",
    image: "https://images.unsplash.com/photo-1581147036324-c71f53eec1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBkcmlsbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "20V lithium-ion cordless drill with 2-speed settings and LED work light. Includes 2 batteries, charger, and 10-piece drill bit set.",
    rating: 4.7,
    reviewCount: 218,
    isFeatured: true,
    features: ["20V lithium-ion battery", "2-speed settings", "LED work light", "Keyless chuck", "Battery indicator", "Ergonomic grip", "Includes storage case"],
    reviews: [
      {
        id: 1,
        user: "Robert J.",
        rating: 5,
        date: "2025-04-08",
        comment: "This drill has enough power for all my home projects. The battery life is impressive and I love the included bit set."
      },
      {
        id: 2,
        user: "Daniel T.",
        rating: 4,
        date: "2025-03-25",
        comment: "Great value for the price. Lightweight yet powerful enough for most household tasks."
      }
    ]
  },
  {
    id: 7,
    name: "Smart Thermostat",
    price: 249.99,
    discountPrice: 199.99,
    category: "Home Improvement",
    categorySlug: "home-improvement",
    image: "https://images.unsplash.com/photo-1567096148453-29d24c227607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB0aGVybW9zdGF0fGVufDB8fDB8fHww",
    description: "Wi-Fi enabled smart thermostat that learns your schedule and preferences. Control from anywhere with your smartphone and save on energy bills.",
    rating: 4.8,
    reviewCount: 176,
    features: ["Wi-Fi connectivity", "Smartphone app control", "Learning algorithm", "Energy usage reports", "Compatible with most HVAC systems", "Voice assistant integration", "Sleek, modern design"],
    reviews: [
      {
        id: 1,
        user: "Michael B.",
        rating: 5,
        date: "2025-04-15",
        comment: "This thermostat paid for itself in the first three months with energy savings. The app works flawlessly and installation was easy."
      },
      {
        id: 2,
        user: "Jennifer L.",
        rating: 5,
        date: "2025-04-02",
        comment: "I love being able to adjust the temperature before arriving home. The energy reports are eye-opening!"
      }
    ]
  },
  {
    id: 8,
    name: "Interior Paint Kit",
    price: 45.99,
    category: "Home Improvement",
    categorySlug: "home-improvement",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnQlMjBidWNrZXR8ZW58MHx8MHx8fDA%3D",
    description: "Complete interior painting kit with premium low-VOC paint, roller, tray, brushes, and painter's tape. Everything you need for room makeovers.",
    rating: 4.5,
    reviewCount: 92,
    features: ["1 gallon premium paint", "Extendable roller handle", "2 roller covers", "Paint tray", "3 paintbrushes", "Painter's tape", "Plastic drop cloth"],
    reviews: [
      {
        id: 1,
        user: "Sandra W.",
        rating: 4,
        date: "2025-03-30",
        comment: "Great starter kit for DIY painting. The quality of the brushes surprised me - they didn't shed bristles like cheaper ones."
      },
      {
        id: 2,
        user: "Thomas R.",
        rating: 5,
        date: "2025-03-15",
        comment: "Everything I needed for painting my bedroom. The paint coverage is excellent."
      }
    ]
  },
  // Fashion Category Products
  {
    id: 9,
    name: "Women's Casual Blazer",
    price: 89.99,
    discountPrice: 69.99,
    category: "Fashion",
    categorySlug: "fashion",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwYmxhemVyfGVufDB8fDB8fHww",
    description: "Versatile casual blazer perfect for office wear or dressing up jeans. Features a modern slim fit and comfortable stretch fabric.",
    rating: 4.6,
    reviewCount: 153,
    isHot: true,
    features: ["95% polyester, 5% spandex", "Fully lined", "Two front pockets", "Single button closure", "Machine washable", "Available in sizes XS-XXL"],
    reviews: [
      {
        id: 1,
        user: "Catherine P.",
        rating: 5,
        date: "2025-04-18",
        comment: "Perfect fit and very flattering. I've received many compliments when wearing this blazer."
      },
      {
        id: 2,
        user: "Rachel M.",
        rating: 4,
        date: "2025-04-05",
        comment: "Great quality for the price. The fabric has a nice weight to it and doesn't wrinkle easily."
      }
    ]
  },
  {
    id: 10,
    name: "Men's Slim Fit Dress Shirt",
    price: 49.99,
    category: "Fashion",
    categorySlug: "fashion",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBkcmVzcyUyMHNoaXJ0fGVufDB8fDB8fHww",
    description: "Classic button-down dress shirt with modern slim fit. Made from wrinkle-resistant, breathable cotton blend fabric.",
    rating: 4.5,
    reviewCount: 127,
    features: ["65% cotton, 35% polyester", "Wrinkle-resistant", "Spread collar", "Buttoned cuffs", "Chest pocket", "Machine washable", "Available in multiple colors"],
    reviews: [
      {
        id: 1,
        user: "James H.",
        rating: 5,
        date: "2025-04-10",
        comment: "Great fitting shirt that stays tucked in throughout the day. The wrinkle-resistant fabric really works."
      },
      {
        id: 2,
        user: "David S.",
        rating: 4,
        date: "2025-03-28",
        comment: "Nice quality and fits as expected. Good value for the price."
      }
    ]
  },
  {
    id: 11,
    name: "Leather Crossbody Bag",
    price: 79.99,
    discountPrice: 59.99,
    category: "Fashion",
    categorySlug: "fashion",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3Jvc3Nib2R5JTIwYmFnfGVufDB8fDB8fHww",
    description: "Genuine leather crossbody bag with adjustable strap and multiple compartments. Perfect size for everyday essentials.",
    rating: 4.7,
    reviewCount: 188,
    isFeatured: true,
    features: ["100% genuine leather", "Adjustable strap", "Multiple compartments", "Zipper closure", "Interior pockets", "Metal hardware", "Available in multiple colors"],
    reviews: [
      {
        id: 1,
        user: "Elizabeth C.",
        rating: 5,
        date: "2025-04-20",
        comment: "This bag is both beautiful and functional. The leather is soft but durable, and I love all the pockets."
      },
      {
        id: 2,
        user: "Angela B.",
        rating: 5,
        date: "2025-04-12",
        comment: "Perfect size for everyday use. The quality is exceptional - this will last for years."
      }
    ]
  },
  // Laundry Category Products
  {
    id: 12,
    name: "Portable Steaming Brush",
    price: 39.99,
    category: "Laundry",
    categorySlug: "laundry",
    image: "https://images.unsplash.com/photo-1520637858143-04284113551c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXMlMjBzdGVhbWVyfGVufDB8fDB8fHww",
    description: "Handheld steaming brush that removes wrinkles from clothing quickly. Compact design perfect for travel or quick touch-ups.",
    rating: 4.4,
    reviewCount: 95,
    features: ["1200W power", "30-second heat-up", "Continuous steam", "Water tank capacity: 120ml", "Auto shut-off", "Travel-friendly size", "Suitable for all fabrics"],
    reviews: [
      {
        id: 1,
        user: "Laura P.",
        rating: 4,
        date: "2025-04-15",
        comment: "Great little steamer for quick touch-ups. It heats up fast and works well on most of my clothes."
      },
      {
        id: 2,
        user: "Kevin M.",
        rating: 5,
        date: "2025-04-02",
        comment: "Perfect for business trips! I no longer have to deal with hotel irons or wrinkled shirts."
      }
    ]
  },
  {
    id: 13,
    name: "Eco-Friendly Laundry Detergent",
    price: 18.99,
    category: "Laundry",
    categorySlug: "laundry",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeSUyMGRldGVyZ2VudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Plant-based laundry detergent that's tough on stains but gentle on skin and the environment. Concentrated formula for up to 64 loads.",
    rating: 4.8,
    reviewCount: 210,
    isHot: true,
    features: ["Plant-based formula", "Hypoallergenic", "Biodegradable", "Free from dyes and artificial fragrances", "Concentrated (64 loads)", "Effective in cold water", "Works in all washing machines"],
    reviews: [
      {
        id: 1,
        user: "Melissa K.",
        rating: 5,
        date: "2025-04-18",
        comment: "Finally found a natural detergent that actually cleans well! No more skin irritation for my sensitive family."
      },
      {
        id: 2,
        user: "Brian T.",
        rating: 5,
        date: "2025-04-10",
        comment: "Love that it's eco-friendly but still removes tough stains. The subtle natural scent is perfect."
      }
    ]
  },
  {
    id: 14,
    name: "Foldable Laundry Basket",
    price: 24.99,
    discountPrice: 19.99,
    category: "Laundry",
    categorySlug: "laundry",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1bmRyeSUyMGJhc2tldHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Space-saving collapsible laundry basket with durable construction and comfortable handles. Perfect for small spaces.",
    rating: 4.6,
    reviewCount: 87,
    features: ["Collapsible design", "30L capacity", "Reinforced handles", "Water-resistant material", "Breathable mesh sides", "Lightweight", "Available in multiple colors"],
    reviews: [
      {
        id: 1,
        user: "Nicole R.",
        rating: 5,
        date: "2025-04-20",
        comment: "This basket is perfect for my small apartment. It collapses completely flat when not in use!"
      },
      {
        id: 2,
        user: "Mark P.",
        rating: 4,
        date: "2025-04-05",
        comment: "Sturdy basket that holds a good amount of laundry. The handles make it comfortable to carry."
      }
    ]
  },
  // Travel Category Products
  {
    id: 15,
    name: "Lightweight Carry-On Luggage",
    price: 149.99,
    discountPrice: 119.99,
    category: "Travel",
    categorySlug: "travel",
    image: "https://images.unsplash.com/photo-1553531384-411a247ccd73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycnklMjBvbiUyMGx1Z2dhZ2V8ZW58MHx8MHx8fDA%3D",
    description: "Ultra-lightweight 22\" carry-on with spinner wheels and expandable capacity. Meets most airline cabin requirements.",
    rating: 4.7,
    reviewCount: 245,
    isFeatured: true,
    isHot: true,
    features: ["22\" x 14\" x 9\" dimensions", "Lightweight polycarbonate shell", "360° spinner wheels", "TSA-approved lock", "Expandable capacity", "Interior organizers", "Telescoping handle"],
    reviews: [
      {
        id: 1,
        user: "Christopher J.",
        rating: 5,
        date: "2025-04-15",
        comment: "This suitcase rolls like a dream through airports. It's amazingly lightweight yet has protected my belongings perfectly."
      },
      {
        id: 2,
        user: "Susan M.",
        rating: 5,
        date: "2025-04-02",
        comment: "I've taken this on multiple international flights and it fits in every overhead bin. The organization inside is excellent."
      }
    ]
  },
  {
    id: 16,
    name: "Travel Adapter Kit",
    price: 29.99,
    category: "Travel",
    categorySlug: "travel",
    image: "https://images.unsplash.com/photo-1519212990858-5a1d68eacb39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYWRhcHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "All-in-one international travel adapter with USB ports. Compatible with outlets in over 150 countries.",
    rating: 4.5,
    reviewCount: 178,
    features: ["Universal compatibility", "Built-in surge protection", "4 USB ports", "1 USB-C port", "LED power indicator", "Compact design", "Carrying case included"],
    reviews: [
      {
        id: 1,
        user: "Emily T.",
        rating: 5,
        date: "2025-04-10",
        comment: "This little device saved me on my European trip! I could charge multiple devices at once with no issues."
      },
      {
        id: 2,
        user: "Alexander W.",
        rating: 4,
        date: "2025-03-28",
        comment: "Solid construction and works as advertised. The multiple USB ports are very convenient."
      }
    ]
  },
  {
    id: 17,
    name: "Neck Support Travel Pillow",
    price: 34.99,
    discountPrice: 24.99,
    category: "Travel",
    categorySlug: "travel",
    image: "https://images.unsplash.com/photo-1523211428576-63cd5eb31c64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwcGlsbG93fGVufDB8fDB8fHww",
    description: "Memory foam travel pillow that provides optimal neck support. Adjustable design for customized comfort during long flights or car rides.",
    rating: 4.6,
    reviewCount: 203,
    isLimited: true,
    features: ["Memory foam filling", "Removable, washable cover", "Adjustable toggles", "Compresses for easy packing", "Includes carrying bag", "Weighs only 8 oz", "Available in multiple colors"],
    reviews: [
      {
        id: 1,
        user: "Victoria L.",
        rating: 5,
        date: "2025-04-18",
        comment: "This pillow made my 12-hour flight so much more comfortable. I actually got some sleep for once!"
      },
      {
        id: 2,
        user: "Greg K.",
        rating: 4,
        date: "2025-04-05",
        comment: "Good support and stays in place better than other travel pillows I've tried. Compresses small enough to clip to my backpack."
      }
    ]
  },
  {
    id: 18,
    name: "Packing Cubes Set",
    price: 28.99,
    category: "Travel",
    categorySlug: "travel",
    image: "https://images.unsplash.com/photo-1588850708478-c671c5f56d5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2luZyUyMGN1YmVzfGVufDB8fDB8fHww",
    description: "Set of 6 lightweight packing cubes in various sizes. Helps organize your luggage and compress clothing to save space.",
    rating: 4.9,
    reviewCount: 312,
    features: ["Set of 6 cubes in different sizes", "Durable nylon construction", "Mesh tops for visibility", "Reinforced seams", "Webbing handles", "Lightweight", "Available in multiple colors"],
    reviews: [
      {
        id: 1,
        user: "Hannah B.",
        rating: 5,
        date: "2025-04-20",
        comment: "These cubes completely changed how I pack! Everything stays organized and I can fit so much more in my suitcase."
      },
      {
        id: 2,
        user: "Paul D.",
        rating: 5,
        date: "2025-04-12",
        comment: "Excellent quality and very lightweight. They make unpacking at the hotel so much easier."
      }
    ]
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Hair Styling Tools Every Woman Should Own",
    slug: "top-hair-styling-tools",
    excerpt: "Discover the essential styling tools that will transform your hair routine and give you salon-quality results at home.",
    content: `
    <p>Having the right hair styling tools can make all the difference in achieving salon-quality hair at home. Here are the five essential tools every woman should consider adding to her beauty arsenal:</p>
    
    <h3>1. Professional Hair Dryer with Ionic Technology</h3>
    <p>A good hair dryer is perhaps the most essential styling tool. Look for one with multiple heat and speed settings, ionic technology (which helps reduce frizz), and attachments like concentrator nozzles for precise styling. Investing in a quality hair dryer can cut drying time in half while minimizing heat damage.</p>
    
    <h3>2. Ceramic Flat Iron</h3>
    <p>A high-quality ceramic flat iron is versatile enough to straighten hair, create waves, or even curl the ends of your hair. Ceramic plates distribute heat evenly and are gentler on hair than metal plates. Models with adjustable temperature settings allow you to customize the heat level for your specific hair type.</p>
    
    <h3>3. Round Brush Set</h3>
    <p>Round brushes are essential for creating volume and shape while blow-drying. A set with different sizes allows you to create everything from loose waves to tight curls. Ceramic or tourmaline-infused bristles help distribute heat more evenly for better styling results.</p>
    
    <h3>4. Curling Wand or Iron</h3>
    <p>For versatile styling options, a curling wand or iron is a must. Barrel sizes between 1 and 1.25 inches work well for most hair lengths and styles. Many newer models feature ceramic or tourmaline technology to protect hair from excessive heat damage.</p>
    
    <h3>5. Heat Protection Spray</h3>
    <p>While not technically a "tool," heat protection spray is an essential companion to all your hot styling tools. Using a quality heat protectant before applying heat can significantly reduce damage and keep your hair healthier in the long run.</p>
    
    <p>Remember, investing in quality tools may cost more initially but will provide better results and last longer than cheaper alternatives. Your hair deserves the best care possible!</p>
    `,
    author: "Jessica Williams",
    date: "2025-04-15",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXIlMjBzdHlsaW5nfGVufDB8fDB8fHww",
    category: "Beauty"
  },
  {
    id: 2,
    title: "Packing Light: Travel Essentials for the Minimalist Traveler",
    slug: "packing-light-travel-essentials",
    excerpt: "Learn how to pack efficiently for your next adventure with these minimalist travel tips and essential gear recommendations.",
    content: `
    <p>Traveling light doesn't mean sacrificing comfort or style—it's about being intentional with what you pack. Here's how to master the art of minimalist travel:</p>
    
    <h3>Choose Versatile Clothing</h3>
    <p>The key to packing light is selecting items that can be mixed and matched to create multiple outfits. Stick to a consistent color palette so everything coordinates. Choose fabrics that are lightweight, wrinkle-resistant, and quick-drying. A few quality basics will serve you better than numerous single-purpose garments.</p>
    
    <h3>Invest in the Right Luggage</h3>
    <p>A lightweight carry-on with spinner wheels makes navigating airports and train stations much easier. Look for one with thoughtful organization features like compression straps and multiple compartments. Avoiding checked luggage saves time at the airport and eliminates the risk of lost bags.</p>
    
    <h3>Master the Art of Packing Cubes</h3>
    <p>Packing cubes are a game-changer for organized travel. They not only compress your clothing to save space but also keep everything neatly categorized. Assign different cubes for different types of items (shirts in one, bottoms in another, etc.) to easily find what you need without unpacking everything.</p>
    
    <h3>Minimize Toiletries</h3>
    <p>Most hotels provide basic toiletries, so consider what you truly need to bring. Transfer products into small reusable containers rather than bringing full-sized bottles. Solid toiletries like shampoo bars and solid perfumes save space and eliminate the risk of spills.</p>
    
    <h3>Embrace Multi-Purpose Items</h3>
    <p>Look for items that serve multiple functions. A large scarf can be a wrap for chilly evenings, a blanket on the plane, a beach cover-up, or a picnic blanket. A phone can replace a camera, map, guidebook, and more. The fewer single-purpose items you pack, the lighter your bag will be.</p>
    
    <p>Remember, almost anything can be purchased at your destination if absolutely necessary. The freedom of traveling light brings peace of mind and greater mobility—making your journey more enjoyable from start to finish.</p>
    `,
    author: "Michael Chen",
    date: "2025-04-10",
    image: "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D",
    category: "Travel"
  },
  {
    id: 3,
    title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
    slug: "sustainable-fashion-eco-friendly-wardrobe",
    excerpt: "Discover practical tips for creating a stylish wardrobe that's better for the planet without sacrificing personal style.",
    content: `
    <p>As consumers become more conscious of fashion's environmental impact, sustainable wardrobes are increasingly popular. Here's how to make your closet more eco-friendly while maintaining your personal style:</p>
    
    <h3>Quality Over Quantity</h3>
    <p>The foundation of a sustainable wardrobe is investing in fewer, better-quality pieces rather than following fast fashion trends. Look for well-constructed garments made from durable materials that will last for years rather than weeks. Though the initial cost may be higher, the cost-per-wear becomes much lower over time.</p>
    
    <h3>Choose Sustainable Materials</h3>
    <p>The fabrics your clothes are made from matter enormously for environmental impact. Look for organic cotton (uses significantly less water than conventional), linen (requires minimal water and pesticides), Tencel/lyocell (made from sustainably sourced wood pulp), and recycled materials. Avoid synthetic fabrics when possible, as they shed microplastics when washed.</p>
    
    <h3>Research Brands' Ethical Practices</h3>
    <p>Support companies that prioritize fair labor practices, sustainable materials, and transparent supply chains. Many brands now publish detailed information about their manufacturing processes and ethical commitments. Apps and websites like Good On You can help you evaluate a brand's sustainability credentials.</p>
    
    <h3>Embrace Secondhand Shopping</h3>
    <p>Buying pre-loved clothing extends the lifecycle of garments and prevents them from entering landfills. Thrift stores, consignment shops, and online marketplaces offer unique finds often at a fraction of the original price. Vintage shopping adds character to your wardrobe while being inherently sustainable.</p>
    
    <h3>Learn Basic Repair Skills</h3>
    <p>Extending the life of your existing clothes is perhaps the most sustainable fashion choice you can make. Learning to sew on a button, mend a small tear, or take up a hem can keep serviceable garments from becoming waste. Many communities offer repair workshops or classes to help you build these skills.</p>
    
    <p>Remember that building a sustainable wardrobe is a journey, not an overnight transformation. Start with small changes, and as items wear out, replace them with more sustainable alternatives. Your style—and the planet—will thank you.</p>
    `,
    author: "Sophia Rodriguez",
    date: "2025-04-05",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzdGFpbmFibGUlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    category: "Fashion"
  },
  {
    id: 4,
    title: "Home Organization Tips for a Clutter-Free Living Space",
    slug: "home-organization-tips",
    excerpt: "Transform your home into a peaceful, organized sanctuary with these practical tips and product recommendations.",
    content: `
    <p>A well-organized home creates a sense of calm and makes daily life more efficient. Here are some practical strategies to help you tackle clutter and create a more peaceful living environment:</p>
    
    <h3>Start with a Mindful Decluttering Session</h3>
    <p>Before organizing, take time to evaluate what you truly need and use. The popular KonMari method suggests keeping only items that "spark joy" or serve a specific purpose. Working room by room, sort belongings into categories: keep, donate, sell, and discard. This foundation makes organizing the remaining items much more effective.</p>
    
    <h3>Implement the "One In, One Out" Rule</h3>
    <p>To prevent future clutter buildup, adopt the practice of removing one item whenever you bring something new home. This approach is particularly effective for clothing, kitchenware, and decorative items. It ensures your possessions remain at a manageable level.</p>
    
    <h3>Maximize Vertical Space</h3>
    <p>Many homes have underutilized vertical space that can provide valuable storage. Install floating shelves, wall-mounted organizers, or tall bookcases to take advantage of wall space. In kitchens, consider pot racks or magnetic knife strips. In closets, double hanging rods and shelf dividers make use of every inch.</p>
    
    <h3>Invest in Multi-Functional Furniture</h3>
    <p>Furniture that provides storage is invaluable in keeping spaces organized. Ottoman with storage compartments, beds with drawers underneath, coffee tables with shelves, and dining benches with hidden storage are all smart investments for homes of any size.</p>
    
    <h3>Create Designated Homes for Everything</h3>
    <p>The secret to maintaining organization is having a specific place for each item. Use labeled bins, drawer dividers, and clear containers to create designated spaces. This makes it easy to find things when needed and—more importantly—to put them away properly afterward.</p>
    
    <p>Remember that organization is an ongoing process rather than a one-time project. Schedule regular maintenance sessions to keep systems working effectively. Even 15 minutes of daily tidying can preserve the organized environment you've worked hard to create.</p>
    `,
    author: "Jonathan Pierce",
    date: "2025-03-28",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Home"
  }
];

// Helper functions to filter products
export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getHotProducts = () => products.filter(product => product.isHot);
export const getLimitedProducts = () => products.filter(product => product.isLimited);
export const getProductsByCategory = (categorySlug: string) => products.filter(product => product.categorySlug === categorySlug);
export const getProductById = (id: number) => products.find(product => product.id === id);
