import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

// function ScrollToTop(props) {
//     console.log(props)
//     useEffect((prevProps) => {
//         if (props.location !== prevProps.location) {
//             window.scrollTo(0, 0)
//         }

//     }, [props.location])
//     return props.children
// }
export default withRouter(ScrollToTop);