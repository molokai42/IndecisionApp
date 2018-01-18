


/* this was mine
const appRoot = document.getElementById('app');

const toggle = () => {
if (count === 0) {
count = 1
toggleTag = 'Here are some detes';
buttonToggle = 'Hide details';
renderVisible();
}else{
count = 0;
toggleTag = '';
buttonToggle = 'Show Details'
renderVisible();
}
};
let toggleTag = '';
let buttonToggle = 'Show Details';
let count = 0;
const renderVisible = () => {
    const visibleTemp = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggle}>{buttonToggle}</button>
    {<p>{toggleTag}</p>}
    </div>
);
ReactDOM.render(visibleTemp, appRoot);
};

renderVisible();
*/

// this was his
/*

let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                <p>Hey, These are some details you can see now!</p>
                </div>
            )}
       </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();
 */

 // CLASS BASED



 class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
           visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return { 
            visibility : !prevState.visibility
            }
        });
       
    };
  
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show Details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>Hey, These are some details you can see now!</p>
                </div>
            )}
       </div>
        );
    }
}
 ReactDOM.render(<Visible />, document.getElementById('app'));
