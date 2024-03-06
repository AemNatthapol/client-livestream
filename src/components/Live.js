import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export default class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            formSubmitted: false
        };
    }
    handleChange = (e) => {
        this.setState({ code: e.target.value }); // Update state with the new input value
        // const { name, value } = e.target;
        // this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:3696/camera/'+this.state.code;
        // console.log(url);
        const response = await axios.get(url);
        // console.log(response);
        const camData = response.data[0];
        // console.log(camData);
        if (!camData) {
            alert("Your code was wrong!!!");
        }else{
            await this.setState({ 
                formSubmitted: true
            });
            await console.log(this.state)
        }    
    };

    render() {
        const nextPage = '/live/'+this.state.code;
        if (this.state.formSubmitted) {
            return <Redirect to={nextPage} />;
        }
        
        return(
            <>  
                <h2>Live</h2>   
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input 
                                type="text" 
                                name="code" 
                                id='code' 
                                value={this.state.code} 
                                onChange={this.handleChange}  
                                placeholder='Please input your code' 
                                className='kobfile2' 
                                required
                            />
                        </p>
                        <p>
                            <button type="submit" className='kobfile2' >OK</button>
                        </p>
                    </form>
                </div>
                
            </>
        );
    }
}