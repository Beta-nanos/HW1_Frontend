
var Id = React.createClass({
    edit: function() {
        alert('editing note'+ document.getElementById('title_input').value);
    },
    remove: function() {
        alert('removing note');
    },
    render: function() {
        return (
            <div className="id">
                <form>
                <div>
                    <label>id</label>
                </div>
            </div>
            );
    }
});
React.render(<div>
    <Note/>
    </div>, 
    document.getElementById(''));

