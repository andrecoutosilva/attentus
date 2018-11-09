import React from 'react';

class ContentPage extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return (
            <div className="p-5">
                Hello World
            </div>
        );
    }
}

export default ContentPage;
// Example usage: <ContentPage />