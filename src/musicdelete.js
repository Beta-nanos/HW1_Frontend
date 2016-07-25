
var Note = React.createClass({
    edit: function() {
        alert('editing note'+ document.getElementById('id_album').value);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "DELETE", "http://localhost:1337/localhost:7000/Albums/", true ); // false for synchronous request
        var data = ""+document.getElementById('id_album').value+""
        xmlHttp.send(data);
        console.log(xmlHttp.responseText+ data);
        //alert('Deleted succesfully');
    },
    remove: function() {
        alert('removing note');
    },
    render: function() {
        return (
            <div className="note">
                <form>
                <div>
                    <label>ID Album</label>
                    <input type="text" id="id_album"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.edit}>DELETE</button>
                </form>
            </div>
            );
    }
});

var UserForm = React.createClass({
  getInitialState: function() {
    return {id_album: ''};
  },
  handleIDChange: function(e) {
    this.setState({id_album: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var id = this.state.id_album.trim();
    if (!id) {
      return;
    }
    var xmlHttp = new XMLHttpRequest();
    var data = id+"";
    xmlHttp.open( "DELETE", "http://localhost:1337/localhost:7000/Albums/"+data, true ); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText+data);
    this.setState({username: '', password: ''});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="id_album">Id Album</label>
          <input
            type="text"
            id="id_album"
            name="id_album"
            required="required"
            value={this.state.id_album}
            onChange={this.handleIDChange}
          />
        </div>
        <button type="submit" className="btn btn-primary"><span>Delete</span></button>
      </form>
    );
  }
});
React.render(<div>
    <UserForm/>
    </div>, 
    document.getElementById('delete'));

