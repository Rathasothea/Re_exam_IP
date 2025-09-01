// Enhanced menu items with more variety and better descriptions
export const menuItems = [
    {
        id: 1,
        name: 'Margherita Supreme',
        description: 'Authentic Italian pizza with San Marzano tomatoes, fresh mozzarella, and garden-fresh basil leaves',
        price: 4.50,
        category: 'Breakfast',
        icon: '🍕'
    },
    {
        id: 2,
        name: 'Caesar Salad Royale',
        description: 'Crisp romaine lettuce, house-made croutons, aged parmesan, and our signature caesar dressing',
        price: 3.20,
        category: 'Breakfast',
        icon: '🥗'
    },
    {
        id: 3,
        name: 'Gourmet Beef Burger',
        description: 'Premium grass-fed beef patty, caramelized onions, aged cheddar, and truffle mayo on brioche',
        price: 6.00,
        category: 'Lunch',
        icon: '🍔'
    },
    {
        id: 4,
        name: 'Golden Crispy Fries',
        description: 'Hand-cut potatoes fried to perfection, seasoned with sea salt and fresh herbs',
        price: 2.50,
        category: 'Sides',
        icon: '🍟'
    },
    {
        id: 5,
        name: 'Fluffy Buttermilk Pancakes',
        description: 'Stack of three fluffy pancakes with real maple syrup, fresh berries, and whipped cream',
        price: 5.50,
        category: 'Breakfast',
        icon: '🥞'
    },
    {
        id: 6,
        name: 'Herb-Crusted Chicken',
        description: 'Tender free-range chicken breast with Mediterranean herbs, lemon zest, and roasted vegetables',
        price: 8.00,
        category: 'Lunch',
        icon: '🍗'
    },
    {
        id: 7,
        name: 'Decadent Chocolate Cake',
        description: 'Rich Belgian chocolate cake with velvety ganache, fresh strawberries, and gold leaf',
        price: 4.00,
        category: 'Dessert',
        icon: '🍰'
    },
    {
        id: 8,
        name: 'Artisan Coffee',
        description: 'Single-origin Ethiopian beans, expertly roasted and freshly brewed to perfection',
        price: 2.80,
        category: 'Drinks',
        icon: '☕'
    }
];

export const getCategories = () => {
    const uniqueCategories = [...new Set(menuItems.map(item => item.category))];
    return uniqueCategories.sort();
};