import React, { Component } from "react";
import { Link } from "gatsby";

class ProjectTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button>{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default ProjectTags;
