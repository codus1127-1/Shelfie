import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import noImage from '../assets/noImage.png'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            price: 0,
            toggleEdit: false
        }
    }

    componentDidMount = () => {
        let {id} = this.props.match.params;
        if (id) {
            axios.get(`/api/products/${id}`)
            .then(res => {
                this.setState({
                    image: res.data.image,
                    name: res.data.name,
                    price: res.data.price,
                    toggleEdit: true
                })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.path !== prevProps.match.path) {
            this.setState({
                name: '',
                price: 0,
                image: '',
                toggleEdit: false
            })
        }
    }

    addImage = (image) => {
        this.setState({
            image: image
        })
    }

    addName = (name) => {
        this.setState({
            name: name
        })
    }

    addPrice = (price) => {
        this.setState({
            price: price
        })
    }

    cancelItem = () => {
        this.setState({name:''})
        this.setState({price: 0})
        this.setState({image: ''})
    }

    addProduct = () => {
        axios.post('/api/products', this.state)
        .then(this.props.history.push('/'))
    }

    handleEdit = () => {
        let { name, price, image} = this.state
        let {id} = this.props.match.params;
        if (name) {
            let product = {name, price, image}
            axios.put(`/api/products/${id}`, product)
            .then(this.props.history.push('/'))
        } else {
            alert('The name input needs a value')
        }
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div className="imgDisplay">
                    <img className='productImg' src={this.state.image ? this.state.image : noImage} alt="noImage default" />
                </div>
                <div className="form">
                    <h1>Image URL</h1>
                    <input 
                    onChange = {e => this.addImage(e.target.value)}
                    type="text"
                    value={this.state.image}/>
                    <h1>Product Name</h1>
                    <input 
                    onChange = {e => this.addName(e.target.value)}
                    type="text"
                    value={this.state.name}/>
                    <h1>Price</h1>
                    <input 
                    onChange = {e => this.addPrice(e.target.value)}
                    type="number"
                    value={this.state.price}/>
                </div>
                <div className="buttonContainer">
                    <button className='button' onClick={()=> this.cancelItem()} >Cancel</button>
                    {this.state.toggleEdit 
                    ? <button className='button' onClick={()=> this.handleEdit()}>Save Changes</button>
                    : <button className='button' onClick={()=> this.addProduct()}>Submit</button>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter (Form);