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
      title: "",
      author: "",
      description: "",
      operation: "",
      categorie: "",
      errors: this.props.errors
    };
    this.onChange = this.onChange.bind(this);
    this.onSub = this.onSub.bind(this);
  }

  componentDidMount() {
    this.setState({
      errors: this.props.errors,
     });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }
  
  onSub(e) {
    console.log("xcdfdfd")
    
    const bookData = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      operation: this.state.operation,
      categorie: this.state.categorie
    };

   this.props.updateBook(bookData, this.props.book.id);
 
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { errors } = this.state;
    return (
      <div className="popup">
        <div className="popup_inner">
          <form className="add-book" >
            
            <TextFieldGroup
              placeholder={this.props.book.title}
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              error={errors.title}
              info=""
            />

            <TextFieldGroup
              placeholder={this.props.book.author}
              name="author"
              value={this.state.author}
              onChange={this.onChange}
              error={errors.author}
              info=""
            />
            <TextFieldGroup
              placeholder={this.props.book.description}
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
              info=""
            />
            <TextFieldGroup
              placeholder={this.props.book.operation}
              name="operation"
              value={this.state.operation}
              onChange={this.onChange}
              error={errors.operation}
              info=""
            />
            <TextFieldGroup
              placeholder={this.props.book.categorie}
              name="categorie"
              value={this.state.categorie}
              onChange={this.onChange}
              error={errors.categorie}
              info=""
            />

            <button className="button-enregistrer" >
             Enregistrer
            </button>
           
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
    errors: state.books.errorsUpdate,

  });
  
  export default connect(
    mapStateToProps,
    { updateBook }
  )(Popup);
  
