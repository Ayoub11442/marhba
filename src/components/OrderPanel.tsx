
import React from 'react';
import { useOrder, MenuItem } from '../contexts/OrderContext';
import { X, Plus, Minus, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const OrderPanel: React.FC = () => {
  const { orderItems, removeFromOrder, updateQuantity, clearOrder, isOrderOpen, toggleOrderPanel, totalItems } = useOrder();
  const { toast } = useToast();

  const handleCheckout = () => {
    // Construct WhatsApp message with order details
    let message = "Hello! I'd like to place an order:\n\n";
    orderItems.forEach(item => {
      message += `${item.quantity || 1}x ${item.name} (${item.price})\n`;
    });
    message += `\nTotal: ${formattedTotal}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/123456789?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your order details will be sent via WhatsApp.",
      variant: "default",
    });
    
    clearOrder();
    toggleOrderPanel();
  };

  // Calculate total price from all items
  const totalPrice = orderItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + price * (item.quantity || 1);
  }, 0);

  // Format to MAD currency
  const formattedTotal = `${totalPrice.toFixed(2)} MAD`;

  const OrderItem = ({ item }: { item: MenuItem }) => {
    return (
      <div className="flex items-center justify-between py-3 border-b border-cafe-beige/30 group">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-md overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h4 className="font-medium text-cafe-brown">{item.name}</h4>
            <p className="text-sm text-muted-foreground">{item.price}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
            <button 
              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
              className="px-2.5 py-1 hover:bg-cafe-beige/20 transition-colors text-cafe-brown"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="px-3 font-medium">{item.quantity || 1}</span>
            <button 
              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
              className="px-2.5 py-1 hover:bg-cafe-beige/20 transition-colors text-cafe-brown"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          <button 
            onClick={() => removeFromOrder(item.id)}
            className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <>
      {/* Order trigger button - visible on smaller screens as a fixed button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={toggleOrderPanel}
          className="relative bg-cafe-terracotta text-white p-4 rounded-full shadow-lg hover:bg-cafe-brown transition-colors duration-300 transform hover:scale-105"
          aria-label="View order"
        >
          <ShoppingBag size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-pulse">
              {totalItems}
            </span>
          )}
        </button>
      </div>
      
      {/* Enhanced Order panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
          isOrderOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col max-h-screen`}
      >
        <div className="flex items-center justify-between p-4 border-b border-cafe-beige bg-cafe-terracotta/5">
          <h3 className="text-xl font-bold text-cafe-brown font-playfair flex items-center">
            <ShoppingBag size={20} className="mr-2" /> Your Order
          </h3>
          <button 
            onClick={toggleOrderPanel}
            className="p-2 rounded-full hover:bg-cafe-beige/30 transition-colors text-cafe-brown"
            aria-label="Close order panel"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {orderItems.length > 0 ? (
            <div className="space-y-3">
              {orderItems.map(item => (
                <OrderItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingBag size={48} className="mb-4 text-cafe-beige" />
              <h4 className="text-xl font-medium text-cafe-brown mb-2">Your order is empty</h4>
              <p className="text-muted-foreground">Add some delicious items from our menu to get started!</p>
              <Button
                onClick={toggleOrderPanel}
                variant="outline"
                className="mt-6 border-cafe-terracotta text-cafe-terracotta hover:bg-cafe-terracotta hover:text-white"
              >
                Browse Menu
              </Button>
            </div>
          )}
        </div>
        
        {orderItems.length > 0 && (
          <div className="p-4 border-t border-cafe-beige bg-cafe-offWhite">
            <div className="flex justify-between mb-4 items-end">
              <div>
                <span className="text-muted-foreground text-sm">Order Total</span>
                <div className="font-bold text-xl text-cafe-brown">{formattedTotal}</div>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground text-sm">Items</span>
                <div className="font-medium text-cafe-brown">{totalItems}</div>
              </div>
            </div>
            <div className="space-y-3">
              <Button 
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </Button>
              <Button 
                onClick={clearOrder}
                variant="outline" 
                className="w-full border-cafe-brown text-cafe-brown hover:bg-cafe-brown/10 mt-2"
              >
                Clear Order
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Enhanced backdrop overlay with blur effect when order panel is open */}
      {isOrderOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-500"
          onClick={toggleOrderPanel}
        />
      )}
    </>
  );
};

export default OrderPanel;
