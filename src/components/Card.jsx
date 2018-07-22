import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                    <a href={this.props.btnLink} className="btn btn-primary">{this.props.btnTitle}</a>
                </div>
            </div>
        )
    }
}

export default Card;