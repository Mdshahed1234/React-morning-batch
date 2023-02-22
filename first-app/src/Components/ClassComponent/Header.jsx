import React,{Component} from "react"
import "./Header.css"

export class Header extends Component{
    render(){
        return (
          <nav>
            <a href={this.props.linkname.google}>Google</a>
            <a href={this.props.linkname.youtube}>YouTube</a>
            <a href={this.props.linkname.facebook}>Facebooke</a>
            <a href={this.props.linkname.React}>React</a>
          </nav>
        );
    }
}