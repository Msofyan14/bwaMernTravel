import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import ItemDetails from "json/itemDetails.json";
import FeauturedImage from "parts/FeauturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Fade from "react-reveal";

import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";

class DetailPages extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}> </Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeauturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailPages);
