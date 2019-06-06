import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import ProductIndexByCategory from "./product_index_by_category";

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    indextype: "normal"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndexByCategory);
