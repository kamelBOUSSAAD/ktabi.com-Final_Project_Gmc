
import React, { Component } from "react";
import "./User_Books.css";
import coverBook from "../../../images/book-cover-default.jpg";
import { deleteBook } from "../../../actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "./Popup_Update";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Items extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onDeleteClick(id) {
    this.props.deleteBook(id);
  }

  render() {
    
    return (
      <div className="book">
        <div className="img-book">
          <img src={coverBook} width="130px" height="100%" alt="bookimg" />
        </div>
        <div className="data bookInfo">
          <div>
            <h4>
              Titre : <span>{this.props.book.title}</span>
            </h4>
          </div>
          <div>
            <h4>
              Auteur :<span>{this.props.book.author}</span>
            </h4>
          </div>
          <div>
            <h4>
              Evaluation : <span>{this.props.book.rate}</span>
            </h4>
          </div>

          <div>
            <h4>
              Description :<span>{this.props.book.description}</span>
            </h4>
          </div>
          <div>
            <h4>
              L'opération proposé est : <span>{this.props.book.operation}</span>
            </h4>
          </div>
          <div>
            <h4>
              Ce livre est publié par :<span>{this.props.book.user.name}</span>
            </h4>
          </div>
          <div>
            <h4>
              Publié le : <span>{this.props.book.date.slice(0, 10)}</span>
            </h4>
          </div>
        </div>
        <div className="option">
          <button
            type="button"
            onClick={this.onDeleteClick.bind(this, this.props.book._id)}
            className="btn btn-danger"
          >
            {" "}
            Supprimer
          </button>
          <button type="button"
            onClick={this.openModal}
            className="btn btn-info">
            Modifier
          </button>
           <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Modifier livre</h2>
          <Popup book={this.props.book} />

          <button className="btn btn-danger" onClick={this.closeModal}>close</button>
          
        </Modal>
      </div>
        </div>
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
