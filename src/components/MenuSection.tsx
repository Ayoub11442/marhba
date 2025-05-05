
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Flame, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useOrder } from '../contexts/OrderContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Enhanced menu data with better images
const menuItems = [
  {
    id: 1,
    name: "Tagine d'Agneau",
    description: "Tender lamb slow-cooked with prunes, almonds and aromatic spices",
    price: "120 MAD",
    image: "https://assets.tmecosys.cn/image/upload/t_web667x528/img/recipe/ras/Assets/9629d2cd-6280-4401-a940-b36a3fc3f6fe/Derivates/f5c140f8-b315-4f46-b722-15f8303f3408.jpg",
    category: "Main",
    tags: ["bestseller", "spicy"]
  },
  {
    id: 2,
    name: "Couscous Royal",
    description: "Steamed semolina with seven vegetables and choice of meat",
    price: "90 MAD",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/D3FE131E-EB10-46E8-9E93-5E178323751D/Derivates/A0B1EE28-94D2-4922-B871-CFB63832A281.jpg",
    category: "Main",
    tags: []
  },
  {
    id: 3,
    name: "Pastilla au Poulet",
    description: "Sweet and savory chicken pie with cinnamon and almonds",
    price: "85 MAD",
    image: "https://www.minahalal.com/wp-content/uploads/2015/02/pastilla-au-poulet_11066.png",
    category: "Appetizer",
    tags: ["chefchoice"]
  },
  {
    id: 4,
    name: "Thé à la Menthe",
    description: "Traditional mint tea served with pine nuts",
    price: "25 MAD",
    image: "https://roadofkitchen.com/wp-content/uploads/2023/04/41-1.jpg",
    category: "Beverage",
    tags: ["vegan"]
  },
  {
    id: 5,
    name: "Salade Marocaine",
    description: "Fresh tomatoes, cucumbers, onions with citrus dressing",
    price: "40 MAD",
    image: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/146969/Salade_marocaine.JPG",
    category: "Appetizer",
    tags: ["vegan"]
  },
  {
    id: 6,
    name: "Baklava Assortie",
    description: "Selection of honey-soaked pastries with pistachios",
    price: "60 MAD",
    image: "https://www.africanbites.com/wp-content/uploads/2022/05/IMG_6168.jpg",
    category: "Dessert",
    tags: ["vegetarian"]
  }
];

// Function to render tag badges
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

const MenuSection: React.FC = () => {
  // Use the custom hook for scroll animations
  useScrollAnimation();
  const { addToOrder } = useOrder();
  const { toast } = useToast();
  
  type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    tags: string[];
  };
  
  const handleAddToOrder = (item: MenuItem) => {
    addToOrder(item);
    toast({
      title: `Added to Order!`,
      description: `${item.name} has been added to your order.`,
      variant: "default",
    });
  };
  
  return (
    <section id="menu" className="bg-cafe-beige py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="section-title mx-auto w-max">Featured Menu</h2>
          <p className="section-subtitle mx-auto">Discover our authentic Moroccan dishes made with love and tradition</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group animate-on-scroll overflow-hidden border-none transform hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-0 left-0 z-10 m-4 px-3 py-1 rounded-full bg-cafe-terracotta text-white text-sm font-medium">
                  {item.category}
                </div>
                
                {/* Tag badges */}
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                    {item.tags.map((tag, i) => (
                      <TagBadge key={i} tag={tag} />
                    ))}
                  </div>
                )}
                
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 border-t border-cafe-beige/40">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cafe-brown font-playfair">{item.name}</h3>
                  <span className="px-3 py-1 bg-cafe-brown/10 text-cafe-terracotta font-bold text-lg rounded-full">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="h-px w-full bg-cafe-beige/70 my-4"></div>
                <div className="flex justify-between items-center">
                  <Link to="/menu" className="text-cafe-terracotta text-sm font-medium flex items-center hover:text-cafe-brown transition-colors">
                    View Details 
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Button 
                    variant="ghost"
                    className="flex items-center text-sm font-medium text-white bg-cafe-terracotta hover:bg-cafe-brown transition-colors px-4 py-2 rounded-full"
                    onClick={() => handleAddToOrder(item)}
                  >
                    <Plus size={14} className="mr-1.5" /> Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/menu" 
            className="btn-primary inline-flex group bg-cafe-brown hover:bg-cafe-terracotta"
          >
            View Full Menu
            <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
