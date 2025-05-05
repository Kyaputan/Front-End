import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ title, description, image, link }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
