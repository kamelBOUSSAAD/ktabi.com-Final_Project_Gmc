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
        <div className="data">
          <div>
            <h4>Titre : {this.props.book.title}</h4>
          </div>
          <div>
            <h4>Auteur :{this.props.book.author}</h4>
          </div>
          <div>
            <h4>Evalution : {this.props.book.rate}</h4>
          </div>
          <div>
            <h4>Evalution : {this.props.book._id}</h4>
          </div>
          <div>
            <h4>Déscription :{this.props.book.description}</h4>
          </div>
          <div>
            <h4>L'opération proposé est : {this.props.book.operation}</h4>
          </div>
          <div>
            <h4>Cette livre est publié par : {this.props.book.user.name}</h4>
          </div>
          <div>
            <h4>Publieé le : {this.props.book.date.slice(0, 10)}</h4>
          </div>
        </div>
        <div className="option">
          <button
            onClick={this.onDeleteClick.bind(this, this.props.book._id)}
            className="button-supprimer"
          >
            {" "}
            Supprimer
          </button>
          <button
            className="button-modifier"
            onClick={this.togglePopup.bind(this)}
          >
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
