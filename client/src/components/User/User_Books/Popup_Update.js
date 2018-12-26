import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../../common/TextFieldGroup";
import  {updateBook}  from '../../../actions/bookActions';
import "./User_Books.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    title: this.props.book.title,
    author: this.props.book.author,
    description: this.props.book.description,
    operation: this.props.book.operation,
    categorie: this.props.book.categorie,
    errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  this.setState({
      errors :this.props.errors
  })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }
  

  onSubmit(e) {
    e.preventDefault();
    const bookData = {
        
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      operation: this.state.operation,
      categorie: this.state.categorie
    };

    this.props.updateBook(bookData, this.props.book._id);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { errors } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <form className="add-book" onSubmit={this.onSubmit}>
            <h5 className="desc-add-book">
              {" "}
              Ajouter vos livres pour les partager avec les autres{" "}
            </h5>
            <TextFieldGroup
              placeholder="Titre de livre"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              error={errors.title}
              info=""
            />

            <TextFieldGroup
              placeholder="Auteur"
              name="author"
              value={this.state.author}
              onChange={this.onChange}
              error={errors.author}
              info=""
            />
            <TextFieldGroup
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
              info=""
            />
            <TextFieldGroup
              placeholder="operation"
              name="operation"
              value={this.state.operation}
              onChange={this.onChange}
              error={errors.operation}
              info=""
            />
            <TextFieldGroup
              placeholder="categorie"
              name="categorie"
              value={this.state.categorie}
              onChange={this.onChange}
              error={errors.categorie}
              info=""
            />

            <button className="button-enregistrer" type="submit">
              Ajouter un livre
            </button>
            <button onClick={this.props.closePopup}>Fermer</button>
          </form>

         
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
    updateBook: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    errors: state.errors,

  });
  
  export default connect(
    mapStateToProps,
    { updateBook }
  )(Popup);
  
