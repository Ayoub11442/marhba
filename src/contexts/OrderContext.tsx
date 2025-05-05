
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuItem {
  id: number | string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  quantity?: number;
}

interface OrderContextType {
  orderItems: MenuItem[];
  addToOrder: (item: MenuItem) => void;
  removeFromOrder: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearOrder: () => void;
  totalItems: number;
  isOrderOpen: boolean;
  toggleOrderPanel: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const addToOrder = (item: MenuItem) => {
    setOrderItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: (i.quantity || 1) + 1 } 
            : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    
    // Auto-open the order panel when adding first item
    if (orderItems.length === 0) {
      setIsOrderOpen(true);
    }
  };

  const removeFromOrder = (id: number | string) => {
    setOrderItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number | string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(id);
      return;
    }
    
    setOrderItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const toggleOrderPanel = () => {
    setIsOrderOpen(prev => !prev);
  };

  const totalItems = orderItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <OrderContext.Provider value={{
      orderItems,
      addToOrder,
      removeFromOrder,
      updateQuantity,
      clearOrder,
      totalItems,
      isOrderOpen,
      toggleOrderPanel
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
