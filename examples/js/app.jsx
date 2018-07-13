import React from 'react'
import SimpleExample from './simple';
import ChangingChildren from './changing-children';
import CustomScrollbar from './custom-scrollbar';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'custom-scrollbar'
        };
    }

    switchExample(event) {
        this.setState({selected: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="example-selector">
                    <div>Example:</div>
                    <select value={this.state.selected} onChange={this.switchExample.bind(this)}>
                        <option value="basic">Basic</option>
                        <option value="changing-children">Changing Children</option>
                        <option value="custom-scrollbar">Custom scrollbar</option>
                    </select>
                </div>
                {(() => {
                    switch (this.state.selected) {
                        case 'changing-children':
                            return <ChangingChildren/>;
                        case 'basic':
                            return <SimpleExample/>;
                        case 'custom-scrollbar':
                            return <CustomScrollbar/>;
                        default:
                            return null;
                    }
                })()}
            </div>
        );
    }
}

export default App;
