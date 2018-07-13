import React from 'react'
import ScrollArea from 'react-scrollbar';

class CustomScrollbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            itemsCount : 40
        };
    }

    render() {
        var itemElements = [];

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}>item {i}</div>);
        }

        let scrollbarStyles = {borderRadius: 5};

        return (
            <div>
                <ScrollArea
                  className="area"
                  contentClassName="custom-content"
                  horizontal={false}
                  verticalScrollbarStyle={{
                    backgroundColor: 'black',
                  }}
                  verticalContainerStyle={{
                    backgroundColor: '#e6e6e6',
                    position: 'absolute',
                    width: '10px',
                    top: '25%',
                    right: '8%',
                    marginRight: '20px',
                    height: '200px',
                    overflow: 'hidden',
                    borderWidth: '1px',
                    borderColor: 'black',
                    borderStyle: 'solid',
                  }}
                  horizontalScrollbarStyle={scrollbarStyles}
                  horizontalContainerStyle={scrollbarStyles}
                  smoothScrolling= {true}
                  minScrollSize={40}
                  onScroll={this.handleScroll}
                  >

                    {itemElements}

                </ScrollArea>

            </div>
        );
    }
}

export default CustomScrollbar;
