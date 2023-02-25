import React , {Component} from "react";
import './Items.css'

class Items extends Component {

    render(){
        const x = 0;
        const {items} = this.props;
        const theItems = items.map(item => {
            return item.count>x ? (
                    <div className="item" key={item.id}>
                        <p>ID : {item.id}</p>
                        <p>Name : {item.name}</p>
                        <p>Age : {item.age}</p>
                        <p>_______________</p>
                    </div>
            ) : null
        })
        return(
            <div className="App">
                {theItems}
            </div>
        )
    }

}

export default Items;

            // if(item.count > x){
            //     return(
            //         <div key={item.id}>
            //             <p>{item.id}</p>
            //             <p>{item.name}</p>
            //             <p>{item.age}</p>
            //             <p>_______________</p>
            //         </div>
            //     )
            // } else{
            //     return(
            //     <div>No items larger than {x}</div>
            //     )
            // }