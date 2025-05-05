import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Rachata. All rights reserved.</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
