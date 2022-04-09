import React from 'react'
import {connect} from "react-redux"
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    console.log(props);
  return (
    <ul>
        {props.blogs.map(blog => {
            return <BlogListItem key={blog.id} {...blog}/>
        })}
    </ul>
  )
}

const maStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(maStateToProps)(BlogList)