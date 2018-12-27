import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import PropTypes from "prop-types";
import { addBook, getBooks } from "../../../actions/bookActions";
import { loginUser } from "../../../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css'
import notfound from '../../../images/nothing-found.png'


import Items from "./Items";
import { connect } from "react-redux";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      operation: "",
      categorie: "",
      errors: {},
      books:this.props.books
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getBooks(user.id);
    this.setState({
      errors: this.props.errors,
      books: this.props.books
     });
    // this.setState({ books: this.props.books.books });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        books: nextProps.books
       });
    }
  }
  clearForm = () => {
    this.setState({
      title: '',
      author: '',
      description: '',
      operation: '',
      categorie: ''
    })
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

    this.props.addBook(bookData, this.props.history)
      .then(() => this.clearForm()
      )
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    const { books } = this.state;
  
    const BooksMap = () =>
   books == null || books=== undefined ? 

       <div className="book-null"> 
        <div>
          <img src={notfound} width="80px" height="80px" alt="not-found(result"/>
        </div>
        Aucun livre a votre profile
        </div> :
          books.map((currentElement, i) => (
        <div key={i}>
          <Items book={currentElement} />
        </div>
        
      ));
    return (
      <div className=" block">
        
        <div className="block-1 col-lg-4">
          <form className="add-book" onSubmit={this.onSubmit}>
          <h5 className="desc-add-book"> Ajouter vos livres pour partager aves les autres  </h5>
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
          </form>
        </div>

        <div className="block-2 col-lg-8" >
          <BooksMap />
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  addBook: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  books: state.books.books
});

export default connect(
  mapStateToProps,
  { addBook, loginUser, getBooks }
)(Container);
