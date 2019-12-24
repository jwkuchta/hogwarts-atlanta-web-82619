import React from 'react';
import HogTile from './HogTile'

class Hog extends React.Component {

    state = {
        showHogInfo: false
    }

    showHogInfo = () => {
        this.setState({
            showHogInfo: !this.state.showHogInfo
        })
    }

    urlSuffix = this.props.hog.name.toLowerCase().split(" ").join("_") + ".jpg"

    render () {
        // const {hog.name} = this.props.hog.name;
        // this didn't work, how to use destructuring in React
        return (
            <div onClick={this.showHogInfo} className="ui eight wide column">
                <div className="ui card">
                    <div className="content">
                        <div className="header">{(this.props.hog.name)}</div>
                        <div className="description">{this.state.showHogInfo ? <HogTile hog={this.props.hog}/> : <img src={require(`../hog-imgs/${this.urlSuffix}`)} alt={this.props.hog.name}></img>}</div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default Hog