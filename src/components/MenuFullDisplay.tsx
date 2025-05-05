
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useOrder } from '../contexts/OrderContext';
import { Plus, Flame, Leaf, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Enhanced menu data by categories with better images
const menuCategories = [
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      {
        id: "breakfast-1",
        name: "Moroccan Breakfast Platter",
        description: "Assortment of Moroccan breads, honey, olive oil, fresh cheese and mint tea",
        price: "65 MAD",
        image: "https://moroccanzest.com/wp-content/uploads/2019/05/Moroccan-breakfast-goodfreephtotos-original-F.jpg",
        tags: ["bestseller"]
      },
      {
        id: "breakfast-2",
        name: "Msemen with Honey",
        description: "Traditional Moroccan square-shaped pancakes served with honey and butter",
        price: "35 MAD",
        image: "https://www.tastingtable.com/img/gallery/msemen-is-the-moroccan-style-crepe-your-morning-needs/intro-1691690397.webp",
        tags: ["vegetarian"]
      },
      {
        id: "breakfast-3",
        name: "Beghrir",
        description: "Moroccan honeycomb pancakes served with honey butter sauce",
        price: "30 MAD",
        image: "https://www.beaurecipes.com/wp-content/uploads/2024/09/BAGHRIR-MOROCCAN-SEMOLINA-PANCAKES%F0%9F%87%B2%F0%9F%87%A6%F0%9F%92%9B-1.jpeg.webp",
        tags: ["vegetarian"]
      },
    ]
  },
  {
    id: "traditional",
    title: "Traditional Moroccan Dishes",
    items: [
      {
        id: "trad-1",
        name: "Tagine d'Agneau",
        description: "Tender lamb slow-cooked with prunes, almonds and aromatic spices",
        price: "120 MAD",
        image: "https://assets.tmecosys.cn/image/upload/t_web667x528/img/recipe/ras/Assets/9629d2cd-6280-4401-a940-b36a3fc3f6fe/Derivates/f5c140f8-b315-4f46-b722-15f8303f3408.jpg",
        tags: ["bestseller", "spicy"]
      },
      {
        id: "trad-2",
        name: "Couscous Royal",
        description: "Steamed semolina with seven vegetables and choice of meat",
        price: "90 MAD",
        image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/D3FE131E-EB10-46E8-9E93-5E178323751D/Derivates/A0B1EE28-94D2-4922-B871-CFB63832A281.jpg",
        tags: []
      },
      {
        id: "trad-3",
        name: "Pastilla au Poulet",
        description: "Sweet and savory chicken pie with cinnamon and almonds",
        price: "85 MAD",
        image: "https://www.minahalal.com/wp-content/uploads/2015/02/pastilla-au-poulet_11066.png",
        tags: ["chefchoice"]
      },
      {
        id: "trad-4",
        name: "Kefta Tagine",
        description: "Moroccan meatballs in spicy tomato sauce with eggs",
        price: "95 MAD",
        image: "http://tasteofmaroc.com/wp-content/uploads/2018/02/kefta-tagine-oysy-bigstock-kofta-tajine-kefta-tagine-mo-65105917-740x493.jpg.webp",
        tags: ["spicy"]
      }
    ]
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        id: "drink-1",
        name: "Thé à la Menthe",
        description: "Traditional mint tea served with pine nuts",
        price: "25 MAD",
        image: "https://roadofkitchen.com/wp-content/uploads/2023/04/41-1.jpg",
        tags: ["bestseller", "vegan"]
      },
      {
        id: "drink-2",
        name: "Café Nous Nous",
        description: "Half coffee, half milk - the traditional Moroccan way",
        price: "20 MAD",
        image: "https://uniquedeserttour.com/wp-content/uploads/2022/01/istockphoto-480500417-170667a.jpg",
        tags: []
      },
      {
        id: "drink-3",
        name: "Orange Juice",
        description: "Freshly squeezed Moroccan oranges",
        price: "30 MAD",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2574&auto=format&fit=crop",
        tags: ["vegan"]
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "dessert-1",
        name: "Baklava Assortie",
        description: "Selection of honey-soaked pastries with pistachios",
        price: "60 MAD",
        image: "https://somebodyfeedseb.com/wp-content/uploads/2022/05/2021.02.25-Briouat-0923.jpg",
        tags: ["chefchoice", "vegetarian"]
      },
      {
        id: "dessert-2",
        name: "Chebakia",
        description: "Flower-shaped cookies coated with honey and sesame seeds",
        price: "40 MAD",
        image: "https://www.thespruceeats.com/thmb/k2E7nemkY_S4jRIE8IkHnla3hRg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/moroccan-sesame-cookies-with-honey-2394409-hero-01-0ca60d689076402ab991c37bc3b89754.jpg",
        tags: ["vegetarian"]
      },
      {
        id: "dessert-3",
        name: "Moroccan Orange Cake",
        description: "Moist orange-infused cake with almond flour",
        price: "45 MAD",
        image: "https://static01.nyt.com/images/2021/09/29/dining/nb-meskouta/nb-meskouta-master768.jpg?quality=75&auto=webp",
        tags: []
      }
    ]
  }
];

// Function to render enhanced tag badges
const TagBadge = ({ tag }: { tag: string }) => {
  if (tag === "bestseller") {
    return (
      <span className="px-2.5 py-1 bg-yellow-500/90 text-white text-xs font-medium rounded-full flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Best Seller
      </span>
    );
  } else if (tag === "vegan") {
    return (
      <span className="px-2 py-0.5 bg-green-500/90 text-white text-xs font-medium rounded-full flex items-center">
        <Leaf size={12} className="mr-1" /> Vegan
      </span>
    );
  } else if (tag === "vegetarian") {
    return (
      <span className="px-2 py-0.5 bg-green-600/90 text-white text-xs font-medium rounded-full flex items-center">
        <Leaf size={12} className="mr-1" /> Vegetarian
      </span>
    );
  } else if (tag === "spicy") {
    return (
      <span className="px-2 py-0.5 bg-red-500/90 text-white text-xs font-medium rounded-full flex items-center">
        <Flame size={12} className="mr-1" /> Spicy
      </span>
    );
  } else if (tag === "chefchoice") {
    return (
      <span className="px-2 py-0.5 bg-purple-500/90 text-white text-xs font-medium rounded-full flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1"></span> Chef's Choice
      </span>
    );
  }
  return null;
};

const MenuFullDisplay = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [animateItems, setAnimateItems] = useState(false);
  
  // Use the custom hook for scroll animations
  useScrollAnimation();
  const { addToOrder, toggleOrderPanel } = useOrder();
  const { toast } = useToast();
  
  // Add animation effect on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    tags: string[];
    category?: string;
  }
  
  const handleAddToOrder = (item: MenuItem) => {
      const itemWithCategory = {
        ...item,
        category: menuCategories.find(cat => 
          cat.items.some(i => i.id === item.id)
        )?.id || ''
      };
      addToOrder(itemWithCategory);
      toast({
        title: `Added to Order!`,
        description: `${item.name} has been added to your order.`,
        variant: "default",
      });
    };
  
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveFilter(categoryId);
    }
  };
  
  return (
    <section className="py-16 sm:py-28 bg-cafe-offWhite">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cafe-brown font-playfair mb-6">Our Menu</h1>
          <div className="w-24 h-1 bg-cafe-terracotta mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-cafe-brown/80 max-w-2xl mx-auto">
            Discover our authentic Moroccan flavors, prepared with love and tradition
          </p>
        </div>
        
        {/* Enhanced Category Navigation */}
        <div className="mb-12 overflow-x-auto pb-4 animate-on-scroll sticky top-20 z-30 bg-cafe-offWhite/90 backdrop-blur-sm py-4 shadow-sm rounded-lg">
          <div className="flex gap-2 md:gap-4 justify-center min-w-max mx-auto">
            {menuCategories.map(category => (
              <Button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`px-5 py-2 whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id 
                    ? 'bg-cafe-terracotta text-white hover:bg-cafe-terracotta/90 shadow-md' 
                    : 'bg-white hover:bg-cafe-beige/20 text-cafe-brown'
                }`}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-24">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="menu-section animate-on-scroll scroll-mt-32">
              <div className="relative mb-10 flex items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-cafe-brown font-playfair relative mr-6">
                  {category.title}
                  <span className="absolute -bottom-3 left-0 w-16 h-1 bg-cafe-terracotta"></span>
                </h2>
                <div className="h-px bg-cafe-terracotta/30 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {category.items.map((item, index) => (
                  <Card 
                    key={`${category.id}-${item.id}`} 
                    className={`overflow-hidden bg-white border-none shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group rounded-xl ${
                      animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-52 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Tag badges */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                          {item.tags.map((tag, i) => (
                            <TagBadge key={i} tag={tag} />
                          ))}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-cafe-brown font-playfair">{item.name}</h3>
                        <div className="bg-cafe-terracotta/10 text-cafe-terracotta font-bold font-playfair px-3 py-1 rounded-full">
                          {item.price}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <Separator className="my-4 bg-cafe-beige/40" />
                      
                      <div className="flex justify-center">
                        <Button 
                          onClick={() => handleAddToOrder(item)}
                          className="flex items-center gap-2 bg-cafe-terracotta hover:bg-cafe-brown text-white w-full justify-center py-5 rounded-full transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Plus size={18} /> Add to Order
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Order Button (Mobile) */}
        <button
          onClick={toggleOrderPanel}
          className="fixed bottom-6 right-6 z-40 bg-cafe-terracotta text-white p-4 rounded-full shadow-lg hover:bg-cafe-brown transition-all duration-300 transform hover:scale-105 md:hidden flex items-center justify-center"
        >
          <span className="sr-only">View Order</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        
        <div className="text-center mt-20 pt-10 border-t border-cafe-beige/40 animate-on-scroll">
          <p className="text-lg text-cafe-brown mb-6">
            Have a question about our menu or need dietary accommodations?
          </p>
          <a 
            href="https://wa.me/123456789" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex bg-green-600 hover:bg-green-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuFullDisplay;
