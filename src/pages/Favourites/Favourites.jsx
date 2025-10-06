import React, { useState, useEffect } from 'react';
import { FaHeart, FaSearch, FaThList, FaThLarge, FaTrash, FaTimes } from 'react-icons/fa';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Favourites.css';

// Mock data for favourites
const mockFavourites = [
  {
    id: 1,
    name: 'Logitech MX Master 3S',
    price: 99.99,
    image: '/images/products/mx-master-3s.png',
    category: 'Mouse',
    rating: 4.9,
    sale: true,
    salePercentage: 15,
    originalPrice: 119.99,
    description: 'Advanced wireless mouse with ultra-fast scrolling and ergonomic design.',
    inStock: true
  },
  {
    id: 2,
    name: 'Logitech G Pro X Superlight',
    price: 149.99,
    image: '/images/products/g-pro-superlight.png',
    category: 'Mouse',
    rating: 4.8,
    sale: false,
    originalPrice: 149.99,
    description: 'Ultra-lightweight wireless gaming mouse designed for esports professionals.',
    inStock: true
  },
  {
    id: 3,
    name: 'Logitech MX Keys',
    price: 119.99,
    image: '/images/products/mx-keys.png',
    category: 'Keyboard',
    rating: 4.7,
    sale: true,
    salePercentage: 10,
    originalPrice: 129.99,
    description: 'Advanced wireless illuminated keyboard with perfect stroke typing.',
    inStock: true
  },
  {
    id: 4,
    name: 'Logitech G915 TKL',
    price: 229.99,
    image: '/images/products/g915-tkl.png',
    category: 'Keyboard',
    rating: 4.8,
    sale: false,
    originalPrice: 229.99,
    description: 'Wireless RGB mechanical gaming keyboard with low profile GL switches.',
    inStock: false
  },
  {
    id: 5,
    name: 'Logitech G Pro X Headset',
    price: 129.99,
    image: '/images/products/g-pro-x-headset.png',
    category: 'Headset',
    rating: 4.6,
    sale: true,
    salePercentage: 20,
    originalPrice: 159.99,
    description: 'Professional gaming headset with Blue VO!CE microphone technology.',
    inStock: true
  },
  {
    id: 6,
    name: 'Logitech Brio 4K Webcam',
    price: 199.99,
    image: '/images/products/brio-4k.png',
    category: 'Webcam',
    rating: 4.5,
    sale: false,
    originalPrice: 199.99,
    description: 'Ultra HD 4K webcam with HDR and Windows Hello support.',
    inStock: true
  }
];

const Favourites = () => {
  // State for favourites
  const [favourites, setFavourites] = useState(mockFavourites);
  const [filteredFavourites, setFilteredFavourites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort favourites
  useEffect(() => {
    let result = [...favourites];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }
    
    setFilteredFavourites(result);
  }, [favourites, searchQuery, sortOption]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };


  // Handle clear all
  const handleClearAll = () => {
    setFavourites([]);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="wishlist-main-container">
      {/* Header Section */}
      <header className="wishlist-header-section">
        <div className="wishlist-title-wrapper">
          <div className="wishlist-icon-container">
            <FaHeart className="wishlist-main-icon" />
          </div>
          <div>
            <h1 className="wishlist-page-title">My Wishlist</h1>
            <p className="wishlist-page-subtitle">Your favorite Logitech products in one place</p>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="wishlist-controls-panel">
          <div className="wishlist-search-wrapper">
            <FaSearch className="wishlist-search-icon" />
            <input
              type="text"
              className="wishlist-search-input"
              placeholder="Search your wishlist..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="wishlist-control-buttons">
            <select 
              className="wishlist-sort-dropdown" 
              value={sortOption} 
              onChange={handleSortChange}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            
            <div className="wishlist-view-toggle">
              <button 
                className={`wishlist-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => handleViewModeChange('grid')}
                aria-label="Grid View"
              >
                <FaThLarge />
              </button>
              <button 
                className={`wishlist-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => handleViewModeChange('list')}
                aria-label="List View"
              >
                <FaThList />
              </button>
            </div>
            
            {favourites.length > 0 && (
              <button 
                className="wishlist-clear-all-btn" 
                onClick={handleClearAll}
                aria-label="Clear All Items"
              >
                <FaTrash /> Clear All
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="wishlist-content-area">
        {isLoading ? (
          <div className="wishlist-loading">
            <div className="wishlist-loading-spinner"></div>
            <h2>Loading your wishlist...</h2>
          </div>
        ) : favourites.length === 0 ? (
          <div className="wishlist-empty-state">
            <div className="wishlist-empty-icon">
              <FaHeart />
            </div>
            <h2 className="wishlist-empty-title">Your wishlist is empty</h2>
            <p className="wishlist-empty-description">
              Browse our shop and add your favorite Logitech products to your wishlist.
            </p>
          </div>
        ) : filteredFavourites.length === 0 ? (
          <div className="wishlist-empty-state">
            <div className="wishlist-empty-icon">
              <FaSearch />
            </div>
            <h2 className="wishlist-empty-title">No matching products found</h2>
            <p className="wishlist-empty-description">
              We couldn't find any products matching your search criteria.
            </p>
            <button 
              className="wishlist-clear-search-btn" 
              onClick={handleClearSearch}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className={`wishlist-items-grid ${viewMode}`}>
            {filteredFavourites.map((product) => (
              <div 
                key={product.id}
                className="wishlist-item-wrapper"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favourites;
