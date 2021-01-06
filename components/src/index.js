import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails'
import 'semantic-ui-css/semantic.min.css'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'




const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="jane" timeAgo="today at 5:45pm" commentText="Thanks for the post bro" avatar={faker.image.people()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="mubeen" timeAgo="today at 6:45pm" commentText="Your post is very helpfull" avatar={faker.image.people()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="gokul" timeAgo="today at 4:45pm" commentText="bro the post is really cool.." avatar={faker.image.people()}/>
            </ApprovalCard>
        </div>
    )
};



ReactDOM.render(<App/>,document.querySelector('#root'))