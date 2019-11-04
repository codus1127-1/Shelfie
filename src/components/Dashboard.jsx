import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }


    }

    componentDidMount = () => {
        this.getInventory()
    }

    getInventory = () => {
        axios.get('/api/products')
            .then(res => {
                this.setState({
                    inventory: res.data
                })
            })
    }

    deleteProduct(id) {
        axios.delete(`/api/products/${id}`)
        this.componentDidMount()
    }

    render() {
        let mappedInventory = this.state.inventory.map((el, i) => {
            return (
                <div className='inventoryItems' key={i + el.name}>
                    <img className='productImg' src={el.image} alt={el.name} />
                    <div className="info">
                        <h4>{el.name}</h4>
                        <h4>${el.price}</h4>
                        <div className="bContainer">
                            <button onClick={() => this.deleteProduct(el.id)}>Delete</button>
                            <button onClick={_ => this.props.history.push(`/edit/${el.id}`)}>Edit</button>
                       
                        </div>
                         </div>
                </div>
            )
        })
        return (
            <div className='dashboard'>
                <Product
                    mappedInventory={mappedInventory}
                />

            </div>
        )
    }
}

export default Dashboard;