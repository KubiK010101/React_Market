
class ProductsRepository  {
    url = 'http://91.238.103.106:23845/Products/';

    get(id) {
       console.log(this.url + id ?? '');
       return fetch(this.url + (id ?? ''), {
           method: 'GET',
       })
       .then((response) => {
           return response.json() 
       })
    } 
    add(product) {
       return fetch(this.url, {
           method: 'POST',
           body: JSON.stringify(product),
           headers: {
               'Content-Type': 'application/json'
               // 'Content-Type': 'application/x-www-form-urlencoded',
             },
       })
    } 
    update(product){
        return fetch (this.url +(product.id ?? ''),{
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
               'Content-Type': 'application/json'
               // 'Content-Type': 'application/x-www-form-urlencoded',
             },
        })
        
    }
    delete(id){
       return fetch (this.url +(id ?? ''),{
           method: 'DELETE',
       })
    }
}
let productRepository = new ProductsRepository();
export default productRepository;

