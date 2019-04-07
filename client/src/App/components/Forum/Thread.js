import React, { Component } from 'react';
import { AppConsumer } from '../../../context';
import ShowPost from '../Forum/ShowPost';
import CreatePost from '../Forum/CreatePost';

class Thread extends Component {
    render() {
        return (
            <React.Fragment>
            <AppConsumer>
                {(value) => {
                    const { thread } = value;
                    return (
                        <div>
                            <h1>{thread.length}</h1>
                            {thread.map(post => {
                                return <ShowPost key={post._id} post={post} author={post.authorId} index={thread.indexOf(post) + 1}/>
                            })}
                        </div>
                    );
                }}
            </AppConsumer>
            <CreatePost />
            </React.Fragment>
        );
    }
}

export default Thread;