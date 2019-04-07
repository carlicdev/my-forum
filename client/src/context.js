import React, { Component } from 'react';

// Create context
const AppContext = React.createContext();

// Provider
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logInEmail: '',
            logInPassword: '',
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpPassword2: '',
            title: '',
            author: '',
            category: '',
            threadId: '',
            thread: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.setThread = this.setThread.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
    }

    componentDidMount() {
        this.setThread('5ca7ac3416c3943ea44732e9');
    }

    handleChange = e => {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    setThread = (id) => {
        fetch('/api/forum/thread/' + id)
            .then(response => response.json())
            .then(response => {
                this.setState(() => {
                    return {thread: response.threadPosts}
                });
            }).catch(err => console.log(err));
    }

    setAuthor = id => {
        fetch('/api/user/' + id)
            .then(response => response.json())
            .then(response => {
                this.setState(() => {
                    return {author: response.userDetails}
                });
            })
            .catch(err => console.log(err));
    }

    getBooks = () => {
        fetch('/api/books/')
            .then(response => response.json())
            .then(response => {
              this.setState(() => {
                return {books: response}
              })
            })
            .catch(err => console.log(err));
      }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                handleChange: this.handleChange,
                setThread: this.setThread,
                setAuthor: this.setAuthor,
            }}
            >
            {this.props.children}
            </AppContext.Provider>
        );
    }
}

// Consumer
const AppConsumer = AppContext.Consumer;

export {AppProvider, AppConsumer};