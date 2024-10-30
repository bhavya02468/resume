import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
<a style={{ 
      color: 'black', 
    
    }}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
      <div className="proj-imgbx">
        <img  style={{ 
            width: '100%', 
            height: '200px', 
          
          }}  src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-link"></a>
          <span>{description}</span>
        </div>
      </div>
          </a>
    </Col>
  )
}
