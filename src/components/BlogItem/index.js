// Write your JS code her cle
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <li className="list-item">
      <div className="blog-list-item">
        <h1 className="blog-list-title">{title}</h1>
        <p className="blog-list-date">{publishedDate}</p>
      </div>
      <p className="blog-list-description">{description}</p>
    </li>
  )
}

export default BlogItem
