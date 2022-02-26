import React, {Component} from "react";

class BookCard extends Component {
    render() {
        return (
            <div class="col-md-6 col-lg-4">
                <div class="card p-2 my-3">
                    <div class="card-thumbnail">
                        <img class="card-img-top" src={this.props.image} alt="" />
                    </div>
                    <div class="card-body">
                        <h3>{this.props.title}</h3>
                        <h4>{this.props.author}</h4>
                        <p>{this.props.publishedDate}</p>
                        <a href={this.props.previewLink} class="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default BookCard;