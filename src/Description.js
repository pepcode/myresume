import React, { Component } from 'react';
class Description extends Component {

    // constructor(props) {
    //     super(props);

    //     this.handleScroll = this.handleScroll.bind(this);
    // }

    render() {
        return (
            <div>
                {this.props.value.map(descritpion => (
                    <li>
                        {descritpion}
                    </li>
                ))}
            </div>
        );
    }
}

export default Description;