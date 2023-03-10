import React , {Component} from "react";
import axios from "axios";

class Blog extends Component {

    state = {
        users : []
    }

    componentDidMount(){
        console.log(this.props);
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.setState({
                users : res.data
            })
            console.log(res.data);
        })
    }

    render(){
        const {users} = this.state;
        const usersList = users.map(user =>{
            return(
                <div key={user.id}>
                    <div className="content">
                        <div>Name : {user.name}</div>
                        <div>Username : {user.username}</div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                <h2>Blog</h2>
                <p>This is Blog section</p>
                <div>
                    {usersList}
                </div>
            </div>
        );
    }
}

export default Blog;