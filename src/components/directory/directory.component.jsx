import React from 'react';
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import menuItems from "../../data/menu-items.js"

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: menuItems
        };

        console.log(menuItems);
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.items.map((item) => <MenuItem title={item.title}></MenuItem>)};
            </div>
        );
    }
}

export default Directory;