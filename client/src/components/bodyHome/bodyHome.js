import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Item from "../home/bookHome/bookHome.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../bodyHome/bodyHome.css";
import { getAllBooks } from "../../actions/bookActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BodyHome extends Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    const BooksMap = () =>
      !this.props.allBooks.length === 0 ? (
        <div className="book-null">Aucun livre a votre profile</div>
      ) : (
        this.props.allBooks.map((currentElement, i) => (
          <div className="col-lg-6" key={i}>
            <Item book={currentElement} />
          </div>
        ))
      );
    return (
      <div className="">
        <div className="BooksHeader">
          <div>
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-recent-tab"
                  data-toggle="tab"
                  href="#Livres-recents"
                  role="tab"
                  aria-controls="nav-recent"
                  aria-selected="true"
                >
                  Livres Recents
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-top-tab"
                  data-toggle="tab"
                  href="#Top-livres"
                  role="tab"
                  aria-controls="nav-top"
                  aria-selected="false"
                >
                  Top Livres
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-recent-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-top-tab"
              />
            </div>
          </div>
        </div>

        <div className="row BooksContent">
          <div className="BookMap">
            <BooksMap />
          </div>
        </div>
        <div />
      </div>
    );
  }
}

BodyHome.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
  allBooks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  allBooks: state.books.all
});

export default connect(
  mapStateToProps,
  { getAllBooks }
)(BodyHome);
