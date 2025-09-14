import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiHeart, FiShoppingCart, FiTrash2, FiGrid, FiList, FiFilter, FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import LoadinShop from '../../components/LoadinShop/LoadinShop';
import './Favourites.css';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Favourites() {
    const [favorites, setFavorites] = useState([
        
    ]);
    
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [sortBy, setSortBy] = useState('dateAdded'); 
    const [filterCategory, setFilterCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories
    const categories = ['all', ...new Set(favorites.map(item => item.category[0].value))];

    // Filter and sort favorites
    const filteredFavorites = favorites
        .filter(item => {
            const matchesCategory = filterCategory === 'all' || item.category[0].value === filterCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price':
                    return parseFloat(a.price) - parseFloat(b.price);
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'dateAdded':
                default:
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
            }
        });




    return (
        <div className="favourites-container">
            {/* Header Section */}
            <div className="favourites-header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="favourites-title">
                            <FiHeart className="title-icon" />
                            My Favourites
                        </h1>
                        <p className="favourites-subtitle">
                            {filteredFavorites.length} {filteredFavorites.length === 1 ? 'item' : 'items'} in your wishlist
                        </p>
                    </div>
                    <div className="header-actions">
                        <div className="search-container">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search favorites..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <button 
                            className={`filter-toggle ${showFilters ? 'active' : ''}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <FiFilter />
                        </button>
                        <div className="view-controls">
                            <button 
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <FiGrid />
                            </button>
                            <button 
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                <FiList />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters Panel */}
                <div className={`filters-panel ${showFilters ? 'show' : ''}`}>
                    <div className="filter-group">
                        <label>Sort by:</label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="dateAdded">Date Added</option>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label>Category:</label>
                        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="favourites-content">
                {filteredFavorites.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">
                            <FiHeart />
                        </div>
                        <h3>No favorites found</h3>
                        <p>
                            {searchQuery || filterCategory !== 'all' 
                                ? 'Try adjusting your search or filters'
                                : 'Start adding products to your favorites to see them here'
                            }
                        </p>
                    </div>
                ) : (
                    <div className="products-grid">
                        {favorites.map(product => (
                        <div key={product.id} className="product-card" data-aos="flip-right" data-aos-duration="1500">
                            <ProductCard product={product} />
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}