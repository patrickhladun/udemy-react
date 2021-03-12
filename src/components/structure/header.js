import React from 'react';

class Header extends React.Component {
    render() {
        const { title, description } = this.props;
        return (
            <div className="header">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default Header;