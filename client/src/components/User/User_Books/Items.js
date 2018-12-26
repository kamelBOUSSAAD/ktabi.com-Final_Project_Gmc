import React, { Component } from "react";
import "./User_Books.css";
import coverBook from "../../../images/book-cover-default.jpg";
import { deleteBook } from "../../../actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "./Popup_Update";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  onDeleteClick(id) {
    this.props.deleteBook(id);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="book">
        <div className="img-book">
          <img src={coverBook} width="130px" height="100%" alt="bookimg" />
        </div>
        <div className="data bookInfo">
          <div>
            <h4>Titre : <span>{this.props.book.title}</span></h4>
          </div>
          <div>
            <h4>Auteur :<span>{this.props.book.author}</span></h4>
          </div>
          <div>
            <h4>Evaluation : <span>{this.props.book.rate}</span></h4>
          </div>
          
          <div>
            <h4>Description :<span>{this.props.book.description}</span></h4>
          </div>
          <div>
            <h4>L'opération proposé est : <span>{this.props.book.operation}</span></h4>
          </div>
          <div>
            <h4>Ce livre est publié par :<span>{this.props.book.user.name}</span></h4>
          </div>
          <div>
            <h4>Publié le : <span>{this.props.book.date.slice(0, 10)}</span></h4>
          </div>
        </div>
        <div className="option">
          <button type="button"
            onClick={this.onDeleteClick.bind(this, this.props.book._id)}
            className="btn btn-danger">
          
            {" "}
            Supprimer
          </button>
          <button type="button"
            onClick={this.togglePopup.bind(this)}
            className="btn btn-info">
            {" "}
            Modifier
          </button>
        </div>

        {this.state.showPopup ? (
          <Popup
            book={this.props.book}
            // errors={this.state.errors}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

Items.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { deleteBook }
)(Items);
