import { Link } from "react-router-dom";
import "./styles/PricingCardStyles.css";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$1</p>
          <p>3 days</p>
          <p>3 pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>Intermediate</h3>
          <span className="bar"></span>
          <p className="btc">$5</p>
          <p>5 days</p>
          <p>5 pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>Advanced</h3>
          <span className="bar"></span>
          <p className="btc">$10</p>
          <p>100 days</p>
          <p>10 pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
