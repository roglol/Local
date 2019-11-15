import Header from '../components/Header';
import axios from 'axios';

const Index =  ({products}) =>{
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || {}
    const addToCart =  (e) =>{
        const id = e.target.closest('div').getAttribute('id')
        if(!cartProducts[id]){
            cartProducts[id] = 1
        }else{
            cartProducts[id] = cartProducts[id] + 1
        }
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }
    return(
        <div>
        <Header/>
        {products.slice(1,10).map((product,i) =>{
            return (
<div key={i}  id={product.id}>
                <button onClick={addToCart}>Add To Cart</button>
                <div style={{marginTop:'10px', background:'seagreen', color:"#ffff"}}>{product.title}</div>
                <div style={{marginTop:'10px', background:'seagreen', color:"#ffff"}}>{product.body}</div>
                </div>
            )
            })}
    </div>
    )
}

Index.getInitialProps = async function(){
     let products = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {products: products.data}
}

export default Index;