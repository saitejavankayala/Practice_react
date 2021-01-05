import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

/*
import {Media} from 'reactstrap';

--------basic sturcture 
class Menu extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(

        );
    }
}
export default Menu;
*/

class Menu extends Component {

    constructor(props) {
        super(props);

       this.state={
           selectedDish:null
       }
    }
onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
   

   
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div>
                    <DishDetail selectedDish = {this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}


export default Menu;
/*
https://s3.amazonaws.com/coursera-uploads/peer-review/22666f60c86c25cfce161350586f1385/DishdetailComponent.js
https://s3.amazonaws.com/coursera-uploads/peer-review/285aea5c97d75baba82a515fdf3f5755/MenuComponent.jsx
*/