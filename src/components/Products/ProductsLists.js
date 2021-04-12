import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/ProductsActions"
import { bindActionCreators } from "redux";
import ListPagination from './ListPagination';
import { event } from "jquery";



class Productcard extends React.Component {
  render() {
    const product = this.props;
    return (
      <div className="col-xl-3 col-sm-6">
        <div className="card" style={{ height: '500px'}}><div className="products-admin">
        <div className="card-body product-box">
          <div className="img-wrapper">
            <div className="lable-block">
              </div>
              <div className="front">
              
                  <img className="img-fluid blur-up bg-img lazyloaded" src={ product.image_url }/>
                <div className="product-hover"><ul><li><button className="btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="editBtn"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button></li><li><button className="btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="deleteBtn"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></li></ul></div></div></div><div className="product-detail"><div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><a> <h6>{product.productName}<small>{product.productBrand}</small></h6></a><h4>{product.productPrice} </h4><a type="button" href={product.url } target="_blank">visit website</a></div></div></div></div></div>
  
    );
  }
}



class Form extends React.Component {

	handleSubmit = (event) => {
  	
    this.props.onSubmit(event.target.value);
    
  };

	render() {
  	return (
      <div className="container">
        <section className="search-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <form className="form-header">
                  <div className="input-group">
                    <input
                      onChange={this.handleSubmit}
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Search Products......"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-2">
                <button
                  type="button"
                  style={{lineHeight: "2.2"}}
                  className="fas fa-arrow-circle-down add-button btn-block"
                >
                  Price
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}





class ProductLists extends React.Component {
  componentDidMount() {
    
    const { products, actions } = this.props;
    
    if (products.length === 0) {
      
      actions.loadProducts(0,-1).catch(error => {
        alert("Loading products failed" + error);
      });
    }

  }

  loadSelectedPage=(page)=>
  {

    if (this.props){
const { products, actions } = this.props;
    
    if (products.currentPage !== page) {
      
      actions.loadProducts(page).catch(error => {
        alert("Loading products failed" + error);
      });
    }

 }
  }


  loadbyName=(name)=>
  {

    if (this.props){
const {  actions } = this.props;
    
    if (name) {
      
      actions.loadProductsbyName(name).catch(error => {
        alert("Loading products failed" + error);
      });
      }
    else {
       actions.loadProducts(0).catch(error => {
        alert("Loading products failed" + error);
      });
      }

 }
  }


render(){
  return (
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <div className="page-body">
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>
                      Product List<small></small>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ol className="breadcrumb pull-right">
                    <li className="breadcrumb-item">
                      <a href="/multikart-admin/products/physical/mutikart-admin/dashboard">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          setrokeLinejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </a>
                    </li>
                    <li className="breadcrumb-item">Product</li>
                    <li className="breadcrumb-item active">Product List</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <ListPagination
            articlesCount={this.props.products.totalItems}
            currentPage={this.props.products.currentPage}
            onSetPage={this.loadSelectedPage}
          />
          <Form onSubmit={this.loadbyName} />

          <div style={{ padding: "20px" }} className="container-fluid">
            <div className="row products-admin ratio_asos">
              {this.props.products.products ? (
                this.props.products.products.map((Prods) => (
                  <Productcard key={Prods.id} {...Prods} />
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ListPagination
        articlesCount={this.props.products.totalItems}
        currentPage={this.props.products.currentPage}
        onSetPage={this.loadSelectedPage}
      />
    </div>
  );
}
}



ProductLists.propTypes = {
   products: PropTypes.array.isRequired,
 
};

function mapDispatchToProps(dispatch) {
 
  return {
    actions:bindActionCreators(productsActions, dispatch)
     
  };
}


function mapStateToProps(state) {
 
  return {
          
    products: state.products
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductLists);
