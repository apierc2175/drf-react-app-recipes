import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      cook_method: '',
      prep_time: '',
      cook_time: '',
      cook_temp: '',
      temperature_unit: '',
      yield_amount: '',
      yield_unit: '',
      directions: '',
      note: '',
      image:null,
      preview: null,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleImageChange(e) {
    let file = e.target.files[0];
    this.setState({image: file});

    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({preview: reader.result});
    };
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('cook_method', this.state.cook_method);
    formData.append('image', this.state.image);
    formData.append('prep_time', this.state.prep_time);
    formData.append('cook_time', this.state.cook_time);
    formData.append('cook_temp', this.state.cook_temp);
    formData.append('temperature_unit', this.state.temperature_unit);
    formData.append('yield_amount', this.state.yield_amount);
    formData.append('yield_unit', this.state.yield_unit);
    formData.append('directions', this.state.directions);
    formData.append('note', this.state.note);
    axios.post('/api/v1/recipes/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      let recipes = [...this.state.recipes];
      recipes.push(res.data);
    })
    .catch(error => {
      console.log(error)
    });
  }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
          <p>Cook Method</p>
          <input type='text' name='cook_method' value={this.state.cook_method} onChange={this.handleChange}/>
          <p>Prep Time</p>
          <input type='text' name='prep_time' value={this.state.prep_time} onChange={this.handleChange}/>
          <p>Cook Time</p>
          <input type='text' name='cook_time' value={this.state.cook_time} onChange={this.handleChange}/>
          <p>Cook Temperature</p>
          <input type='text' name='cook_temp' value={this.state.cook_temp} onChange={this.handleChange}/>
          <p>Temperature Unit</p>
          <input type='text' name='temperature_unit' value={this.state.temperature_unit} onChange={this.handleChange}/>
          <p>Yield Amount</p>
          <input type='text' name='yield_amount' value={this.state.yield_amount} onChange={this.handleChange}/>
          <p>Yield Unit</p>
          <input type='text' name='yield_unit' value={this.state.yield_unit} onChange={this.handleChange}/>
          <p>Directions</p>
          <input type='text' name='directions' value={this.state.directions} onChange={this.handleChange}/>
          <p>Notes</p>
          <input type='text' name='note' value={this.state.note} onChange={this.handleChange}/>
          <p>Add Image</p>
          <input type='file' name='image' onChange={this.handleImageChange}/>

          {this.state.image ? (
            <img src={this.state.preview} alt='preview' />
          ) : (
            null
          )}

          <button>Upload</button>
          </form>
      </React.Fragment>
    )
  }
}

export default App;
