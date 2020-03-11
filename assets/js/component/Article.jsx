import React from 'react'
import axios from 'axios'

class Article extends React.Component {
    state = {
        articles : [],
        username : "",
        password: ""
    }
    
    componentDidMount(){
        this.getArtciles()
    }

    getArtciles = () => {
        axios.get('http://127.0.0.1:8000/api/articles/')
        .then(response => response.data)
        .then(data => console.log(data))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submit = (e) => {
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <div className="login-form">
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange}/> <br/>
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    <button type="submit" onClick={this.submit}>Sign In</button>
                </div>
            </div>
        )
    }
}

export default Article