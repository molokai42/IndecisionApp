console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'app',
    options: [] 
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const removeAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const numbers = [100, 51, 87];

const render = () => {
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p> Here are your options </p> : <p> No options </p>}
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
    <button onClick={removeAll}>Remove All</button>
   
   <ol>
    {

        app.options.map((option) => {
            return <li key={option}>{option}</li>
        })
    }
    </ol>
    <ol>
    <li>item 1</li>
    <li>item 2</li>
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    </form>    
</div>

);
ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
render();