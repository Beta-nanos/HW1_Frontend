
var Note = React.createClass({
    edit: function() {
        alert('editing note'+ document.getElementById('title_input').value);
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
                <button type="submit" className="btn btn-primary" onClick={this.edit}>UPDATE</button>
                </form>
            </div>
            );
    }
});
React.render(<div>
    <Note/>
    </div>, 
    document.getElementById('update'));

