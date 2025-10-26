import { useState, useEffect, useRef } from 'react';
import { FiFilter, FiChevronLeft, FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import './Shop.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import {getProducts} from '../../utilitas/apiService'
import {getCatogries} from '../../utilitas/apiService'
import LoadinShop from '../../components/LoadinShop/LoadinShop'
import NavInAnotherPage from '../../components/NavInAnotherPage/NavInAnotherPage';
import { getFavouritesFunction } from '../../utilitas/getFavourites';
import { useDispatch, useSelector } from 'react-redux';


// Categories for filter


export default function Shop() {
  // State for products and filters
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchInputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [saleFilter, setSaleFilter] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userSlice.info);
  const loadinSlice = useSelector(state => state.loading.info);
  
  const productsPerPage = 10;
  

  // get favourites product 
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
          await getFavouritesFunction(userData , dispatch);
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    };
    fetchFavourites();
  }, []);

  // loading state from redux
  useEffect(() => {
    setIsLoading(loadinSlice);
  }, [loadinSlice]);
  
  // Toggle category filter
  const toggleCategoryFilter = (category) => {
    if (categoryFilters.includes(category)) {
      setCategoryFilters(categoryFilters.filter(cat => cat !== category));
    } else {
      setCategoryFilters([...categoryFilters, category]);
    }
  };
  
  // Update price range
  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    setPriceRange({
      ...priceRange,
      [type]: value
    });
  };
  
  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];
    
    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category[0].value.toLowerCase().includes(query)
      );
    }
    
    // Category filter
    if (categoryFilters.length > 0) {
      filtered = filtered.filter(product => categoryFilters.includes(product.category[0].value));
    }
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // In stock filter
    if (saleFilter) {
      filtered = filtered.filter(product => product.sale !== "0.00");
    }
    
    // New products filter
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (newest first based on id for this mock data)
        filtered.sort((a, b) => b.id - a.id);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  };
  
  // Reset filters
  const resetFilters = () => {
    setCategoryFilters([]);
    setPriceRange({ min: 0, max: 1000 });
    setSaleFilter(false);
    setSortOption('default');
    setSearchQuery('');
    setFilteredProducts(products);
    setCurrentPage(1);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  // Focus search input
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  // Fetch products (simulated)
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        setIsLoading(true);
        const res =  await getProducts();
        const productsFromGet = res.data.results;
        setProducts(productsFromGet);
        setFilteredProducts(productsFromGet);
        const res2 = await getCatogries()
        const catgroiesFromGet = res2.data.results
        const mappedCategories = catgroiesFromGet.map(catgeroy => catgeroy.catogryName);
        setCategories(mappedCategories);        
      }catch(err){
        console.log("Error in get product" , err)
      }finally{
        setTimeout(() => {
          setIsLoading(false)
          
        }, 1000);
      }
    };
    fetchProducts();
  }, []);
  
  // Apply filters when filter states change
  useEffect(() => {
    if (!isLoading) {
      applyFilters();
    }
  }, [categoryFilters, priceRange, saleFilter, sortOption, searchQuery, isLoading]);
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const paginate = (pageNumber) => {setCurrentPage(pageNumber) , window.scrollTo({ top: 0, behavior: "smooth" });};
  
  return (
    <>
    <NavInAnotherPage />
    <div className="shop-container" data-aos="fade-right" data-aos-duration="1500">
      {/* Mobile filter toggle */}
      <button 
        className="mobile-filter-toggle"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FiFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      
      {/* Filter sidebar */}
      <div className={`filter-sidebar ${showFilters ? 'active' : ''}`} >
        <h2 className="filter-title">Filters</h2>
        
        {/* Category filter */}
        <div className="filter-group" >
          <h3 className="filter-group-title">Categories</h3>
          <div className="filter-options">
            {categories.map(category => (
              <label key={category} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={categoryFilters.includes(category)}
                  onChange={() => toggleCategoryFilter(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        
        {/* Price range filter */}
        <div className="filter-group">
          <h3 className="filter-group-title">Price Range</h3>
          <div className="price-range">
            <div className="price-inputs">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => handlePriceChange(e, 'min')}
                min="0"
                max={priceRange.max}
              />
              <span>to</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => handlePriceChange(e, 'max')}
                min={priceRange.min}
                max="1000"
              />
            </div>
            <input
              type="range"
              className="price-slider"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={(e) => handlePriceChange(e, 'max')}
            />
          </div>
        </div>
        
        {/* Availability filter */}
        <div className="filter-group">
          <h3 className="filter-group-title">Availability</h3>
          <div className="filter-options">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={saleFilter}
                onChange={() => setSaleFilter(!saleFilter)}
              />
              In sale
            </label>
          </div>
        </div>
        
        {/* Filter buttons */}
        <div className="filter-buttons">
          <button className="filter-button reset-filter" onClick={resetFilters}>Reset</button>
        </div>
      </div>
      
      {/* Products section */}
      <div className="products-section">
        {/* Search bar */}
        <div 
          className={`search-container-shop ${isSearchFocused ? 'focused' : ''} `} 
          onClick={focusSearchInput}

        >
          <div className="search-icon-shop">
            <FiSearch />
          </div>
          <input
            type="text"
            className="search-input-shop"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            ref={searchInputRef}
            aria-label="Search products"
          />
          {searchQuery && (
            <button 
              className="clear-search" 
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}
        </div>
        
        <div className="products-header" data-aos="zoom-in" data-aos-duration="1500">
          <div className="products-title-section">
            <h1 className="products-title">Our Products</h1>
            <div className="product-count-container">
              <span 
                className="product-count-number">
                {filteredProducts.length}
              </span>
              <span className="product-count-text">products found</span>
            </div>
          </div>
          <div className="products-sort">
            <span className="sort-label">Sort by:</span>
            <select 
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="products-grid">
          {isLoading ? (
            <div className="loadingInShop">
              <LoadinShop />
            </div>
          ) : currentProducts.length > 0 ? (
            currentProducts.map(product => (
              <div key={product.id} className="product-card" data-aos="flip-right" data-aos-duration="1500">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="no-products">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3>No Products Found</h3>
              <p>We couldn't find any products that match your current filters. Try adjusting your filter criteria or browse our full collection.</p>
              <button className="reset-all-filters" onClick={resetFilters}>Reset All Filters</button>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <div className="pagination-shop">
            <button 
              className="pagination-shop-button"
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
            >
              <FiChevronLeft />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`pagination-shop-button ${currentPage === number ? 'active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className="pagination-shop-button"
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}