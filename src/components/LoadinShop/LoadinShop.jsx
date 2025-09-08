import './LoadinShop.css'
export default function LoadinShop(){
    return(
            <div className="loading-container">
              <div className="loading-animation">
                <div className="loading-spinner-container">
                  <div className="loading-spinner"></div>
                  <div className="loading-spinner-inner"></div>
                </div>
                <div className="loading-pulse"></div>
              </div>
              <p className="loading-text">Loading products...</p>
            </div>

    )
}