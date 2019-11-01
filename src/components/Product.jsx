import React, { Component } from 'react';
import axios from 'axios'

class Product extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render(){
        return(
            <div className='flexinInven'>
                {this.props.mappedInventory}
            </div>
        )
    }
}

export default Product;