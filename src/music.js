
/*var Note = React.createClass({
    edit: function() {
        alert('editing note'+ document.getElementById('title_input').value);
        var xmlHttp = new XMLHttpRequest();
        var data = "title=fred&price=500&rating=5";
        xmlHttp.open( "PUT", "http://localhost:1337/localhost:7000/Albums/mario&100&5", true ); // false for synchronous request
        xmlHttp.send(data);
        console.log(xmlHttp.responseText+data);
        
    },
    remove: function() {
        alert('removing note');
    },
    render: function() {
        return (
            <div className="note">
                <form>
                <div>
                    <label>Tittle</label>
                    <input type="text" id="title_input"/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.edit}>CREATE</button>
                </form>
            </div>
            );
    }
});*/

var UserForm = React.createClass({
  getInitialState: function() {
    return {title: '',price: '', rating:''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handlePriceChange: function(e) {
    this.setState({price: e.target.value});
  },
  handleRatingChange: function(e) {
    this.setState({rating: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var price = this.state.price.trim();
    var rating = this.state.rating.trim();
    if (!title || !price) {
      return;
    }
    alert("Succesfully inserted");
        var xmlHttp = new XMLHttpRequest();
        var data = "title=fred&price=500&rating=5";
        xmlHttp.open( "PUT", "http://localhost:1337/localhost:7000/Albums/"+title+"&"+price+"&"+rating+"", true ); // false for synchronous request
        xmlHttp.send(null);
        console.log(xmlHttp.responseText+data);
    this.setState({username: '', password: ''});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required="required"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="Price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            required="required"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="Rating">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            required="required"
            value={this.state.rating}
            onChange={this.handleRatingChange}
          />
        </div>
          <button type="submit" className="btn btn-primary"><span>Save</span></button>
      </form>
    );
  }
});
React.render(<div>
    <UserForm/>
    </div>, 
    document.getElementById('create'));

