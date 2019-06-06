import { connect } from "react-redux";
import {
  fetchCategoryProducts,
  clearProducts
} from "../../actions/product_actions";
import ProductIndexByCategory from "./product_index";

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    indextype: "categories"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchCategoryProducts()),
    clearProducts: () => dispatch(clearProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndexByCategory);
