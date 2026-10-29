export interface MenuItem {
  id: string
  name: string
  category: MenuCategory
  description: string
  price: number
  badge?: string
  dietary?: 'veg' | 'vegan' | 'chef-choice'
  image: string
}

export type MenuCategory =
  | 'Coffee & Espresso'
  | 'Cold Coffee & Refreshers'
  | 'Tea & Other Beverages'
  | 'Quick Bites'
  | 'Desserts & Sweet Treats'

export interface GalleryItem {
  id: string
  title: string
  category: 'Interiors' | 'Coffee' | 'Food' | 'Ambience' | 'Details'
  image: string
  aspect: 'square' | 'wide' | 'tall'
  caption: string
}

export interface ReviewItem {
  id: string
  author: string
  role: string
  rating: number
  comment: string
  date: string
}

export interface HighlightItem {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  icon: string
}

export interface CafeConfig {
  brand: {
    name: string
    wordmark: string
    tagline: string
    eyebrow: string
    headline: string
    heroSupporting: string
    primaryCta: string
    secondaryCta: string
  }
  contact: {
    addressLine1: string
    addressLine2: string
    cityStateZip: string
    landmark: string
    phoneDisplay: string
    phoneCall: string
    whatsappNumber: string
    whatsappLink: string
    email: string
    instagramHandle: string
    instagramUrl: string
    googleMapsUrl: string
    googleMapsEmbedUrl: string
  }
  timings: {
    weekdays: string
    weekends: string
    kitchenCloses: string
  }
  media: {
    heroVideoUrl: string
    heroVideoFallbackUrl: string
    heroPoster: string
    storyImage1: string
    storyImage2: string
    storyImage3: string
  }
  highlights: HighlightItem[]
  menuCategories: MenuCategory[]
  menuItems: MenuItem[]
  gallery: GalleryItem[]
  reviews: ReviewItem[]
}

export const CAFE_CONFIG: CafeConfig = {
  brand: {
    name: 'A-Town Café',
    wordmark: 'A-TOWN CAFÉ',
    tagline: 'Good Coffee. Great Company.',
    eyebrow: 'YOUR EVERYDAY ESCAPE',
    headline: 'Good Coffee. Great Company.',
    heroSupporting: 'Your little corner for coffee, conversations and moments worth slowing down for.',
    primaryCta: 'EXPLORE OUR MENU',
    secondaryCta: 'COME VISIT US',
  },
  contact: {
    addressLine1: 'Plot 42, Sunrise Boulevard, Sector 5',
    addressLine2: 'Opposite Central Promenade Garden',
    cityStateZip: 'A-Town — 302020',
    landmark: 'Near Boulevard Fountain',
    phoneDisplay: '+91 98765 43210',
    phoneCall: 'tel:+919876543210',
    whatsappNumber: '+91 98765 43210',
    whatsappLink: 'https://wa.me/919876543210?text=Hi%20A-Town%20Café!%20I%20would%20like%20to%20reserve%20a%20table.',
    email: 'hello@atowncafe.com',
    instagramHandle: '@atowncafe',
    instagramUrl: 'https://instagram.com/atowncafe',
    googleMapsUrl: 'https://maps.google.com/?q=A-Town+Cafe',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.6789!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
  },
  timings: {
    weekdays: 'Monday – Friday: 8:00 AM – 10:30 PM',
    weekends: 'Saturday – Sunday: 8:00 AM – 11:30 PM',
    kitchenCloses: 'Kitchen takes last orders 45 mins prior to closing',
  },
  media: {
    // High-performance direct video of specialty barista coffee brewing & warm café ambience
    heroVideoUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-machine-dropping-coffee-in-cup-43187-large.mp4',
    heroVideoFallbackUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-latte-art-coffee-43188-large.mp4',
    // Rich, warm cinematic interior poster featuring pendant lamps, wooden tables & mustard tones
    heroPoster:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85',
    storyImage1:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85',
    storyImage2:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85',
    storyImage3:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85',
  },
  highlights: [
    {
      id: 'highlight-coffee',
      title: 'Coffee Worth Slowing Down For',
      tagline: 'Artisanal Single Origins & Precise Roasts',
      description:
        'Sourced from shade-grown estates and roasted in small batches to preserve nuanced citrus, caramel, and nutty notes in every cup.',
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
      icon: 'Coffee',
    },
    {
      id: 'highlight-food',
      title: 'Comfort Food, Happy Moments',
      tagline: 'Freshly Baked & Handcrafted Daily',
      description:
        'Flaky golden sourdough croissants, warm artisan paninis, fresh pasta bowls, and desserts designed to accompany your favorite brew.',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85',
      icon: 'Utensils',
    },
    {
      id: 'highlight-ambience',
      title: 'Your Favourite Conversation Spot',
      tagline: 'Warm Pendants, Natural Oak & Cozy Corners',
      description:
        'Whether you need a sunlit book nook, a quiet desk with reliable power outlets, or a snug booth for friends, we saved a seat for you.',
      image:
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85',
      icon: 'Armchair',
    },
    {
      id: 'highlight-rituals',
      title: 'Everyday Moments, Made Special',
      tagline: 'From Morning Fuel to Evening Unwind',
      description:
        'Breathe in the aroma of freshly ground arabica beans, soft indie playlists, and warm smiles that make you feel instantly at home.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85',
      icon: 'Sparkles',
    },
  ],
  menuCategories: [
    'Coffee & Espresso',
    'Cold Coffee & Refreshers',
    'Tea & Other Beverages',
    'Quick Bites',
    'Desserts & Sweet Treats',
  ],
  menuItems: [
    // Coffee & Espresso
    {
      id: 'c1',
      name: 'Signature Spanish Cortado',
      category: 'Coffee & Espresso',
      description: 'Equal parts bold double ristretto espresso and silky textured condensed whole milk.',
      price: 210,
      badge: 'House Special',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c2',
      name: 'Artisan Pour-Over (V60)',
      category: 'Coffee & Espresso',
      description: 'Single-origin washed Ethiopian beans highlighting jasmine floral aroma and citrus zest.',
      price: 240,
      badge: "Barista's Pick",
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c3',
      name: 'Velvet Flat White',
      category: 'Coffee & Espresso',
      description: 'Double shot of our signature espresso poured over ultra-fine microfoam in a warm ceramic cup.',
      price: 195,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c4',
      name: 'Caramel Macchiato',
      category: 'Coffee & Espresso',
      description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and caramel drizzle.',
      price: 225,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c5',
      name: 'Classic Americano',
      category: 'Coffee & Espresso',
      description: 'Double espresso pulled long over hot mountain mineral water, deep crema and bold chocolate notes.',
      price: 160,
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    },

    // Cold Coffee & Refreshers
    {
      id: 'cc1',
      name: 'A-Town Signature Iced Shakerato',
      category: 'Cold Coffee & Refreshers',
      description: 'Espresso vigorously shaken over crystal ice with orange zest, organic brown sugar, and sea salt.',
      price: 230,
      badge: 'Signature',
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cc2',
      name: 'Nitro Cascara Cold Brew',
      category: 'Cold Coffee & Refreshers',
      description: '18-hour slow-steeped arabica cold brew infused with nitrogen for a velvety stout-like texture.',
      price: 245,
      badge: 'Popular',
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cc3',
      name: 'Yuzu Tonic Cold Brew',
      category: 'Cold Coffee & Refreshers',
      description: 'Artisanal cold brew layered over Japanese yuzu sparkling botanical tonic water with fresh rosemary.',
      price: 260,
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cc4',
      name: 'Vietnamese Iced Coffee',
      category: 'Cold Coffee & Refreshers',
      description: 'Dark roasted chicory-infused espresso dripped slow over sweetened condensed milk and crushed ice.',
      price: 210,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    },

    // Tea & Other Beverages
    {
      id: 't1',
      name: 'Ceremonial Matcha Oat Latte',
      category: 'Tea & Other Beverages',
      description: 'First-harvest Uji matcha whisked with warm barista oat milk and a touch of raw wild honey.',
      price: 260,
      badge: 'Must Try',
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 't2',
      name: 'Artisan Kashmiri Kahwa',
      category: 'Tea & Other Beverages',
      description: 'Whole green tea leaves infused with saffron strands, crushed green cardamom, and slivered almonds.',
      price: 190,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 't3',
      name: 'Belgian Spiced Hot Chocolate',
      category: 'Tea & Other Beverages',
      description: '70% dark Callebaut chocolate melted into creamy milk, dusted with Ceylon cinnamon and sea salt.',
      price: 240,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80',
    },

    // Quick Bites
    {
      id: 'qb1',
      name: 'Truffle Mushroom Melt Panini',
      category: 'Quick Bites',
      description: 'Charred sourdough loaded with sautéed portobello, thyme, truffle oil, and molten gouda cheese.',
      price: 320,
      badge: "Chef's Special",
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'qb2',
      name: 'Smoked Sun-Dried Tomato Toast',
      category: 'Quick Bites',
      description: 'Avocado mash on seeded artisanal sourdough, cherry tomatoes, feta crumble, and toasted seeds.',
      price: 290,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'qb3',
      name: 'Rosemary Garlic Pull-Apart Brioche',
      category: 'Quick Bites',
      description: 'Warm house-baked brioche loaf brushed with confit garlic herb butter and aged parmesan.',
      price: 240,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
    },

    // Desserts & Sweet Treats
    {
      id: 'd1',
      name: 'Caramelized Basque Burnt Cheesecake',
      category: 'Desserts & Sweet Treats',
      description: 'Ultra-creamy custard center with deep caramelized crust, served with fresh berry compote.',
      price: 280,
      badge: 'Best Seller',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'd2',
      name: 'Flaky Pistachio Cardamom Croissant',
      category: 'Desserts & Sweet Treats',
      description: 'French butter laminated pastry filled with roasted pistachio frangipane and cardamom sugar.',
      price: 220,
      badge: 'Freshly Baked',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'd3',
      name: 'Classic Espresso Tiramisu',
      category: 'Desserts & Sweet Treats',
      description: 'Espresso-soaked savoiardi ladyfingers layered with whipped mascarpone cream and Valrhona cocoa.',
      price: 295,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    },
  ],
  gallery: [
    {
      id: 'g1',
      title: 'Warm Pendant Canopy',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide',
      caption: 'Handcrafted woven pendant lighting casting a soft golden glow over natural oak tables.',
    },
    {
      id: 'g2',
      title: 'Precision Espresso Extraction',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85',
      aspect: 'tall',
      caption: 'Every espresso shot is weighed to the gram and pulled on our customized manual machine.',
    },
    {
      id: 'g3',
      title: 'The Sunlit Reading Nook',
      category: 'Ambience',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'A serene corner bathed in afternoon sunlight with quiet acoustics and comfortable seating.',
    },
    {
      id: 'g4',
      title: 'Morning Bakery Counter',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Freshly baked golden pastries, flaky croissants, and daily artisanal sourdough treats.',
    },
    {
      id: 'g5',
      title: 'Barista Latte Artistry',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Hand-poured silky microfoam creating intricate rosettas on warm ceramic cups.',
    },
    {
      id: 'g6',
      title: 'Evening Café Courtyard',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide',
      caption: 'Warm mustard accents, cozy banquettes, and ambient conversation as dusk settles in A-Town.',
    },
    {
      id: 'g7',
      title: 'Handcrafted Comfort Plates',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85',
      aspect: 'tall',
      caption: 'Wholesome, colorful brunch plates crafted with locally sourced farm-fresh ingredients.',
    },
    {
      id: 'g8',
      title: 'Warm Wood & Woven Textures',
      category: 'Details',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Natural timber, earthy ceramics, and tactile details thoughtfully chosen to make you pause.',
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Aanya Sharma',
      role: 'Local Architect & Regular',
      rating: 5,
      comment:
        'A-Town Café has completely changed my mornings. The Spanish Cortado is perfection, and the natural wood interiors with warm lighting make it the most peaceful spot in town to sketch and unwind.',
      date: 'Visited last week',
    },
    {
      id: 'rev-2',
      author: 'Rohan Mehra',
      role: 'Coffee Enthusiast',
      rating: 5,
      comment:
        'Finally a place that takes single-origin pour-overs seriously! The Ethiopian V60 is vibrant and fruity. The staff are warm, attentive, and genuinely passionate about good brew.',
      date: 'Visited 2 weeks ago',
    },
    {
      id: 'rev-3',
      author: 'Priya & Kabir',
      role: 'Weekend Brunchers',
      rating: 5,
      comment:
        'The Truffle Mushroom Panini paired with the Iced Shakerato is our weekend ritual. Cozy booths, wonderful acoustics where you can actually have a conversation, and the sweetest vibe.',
      date: 'Visited this month',
    },
  ],
}

