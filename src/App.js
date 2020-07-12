import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/Reducer/appReducer';
import Home from './app/Components/Home';
import '../style.less';

class App extends React.Component{
    render(){
        configureStore.subscribe(()=>{
            console.log('Store', configureStore.getState());
        });
        return(
            <Provider store={configureStore}>
                <div>
                    <Home/>
                </div>
            </Provider>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));