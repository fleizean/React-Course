import React from 'react'
import { Link } from 'react-router-dom';
import error404Image from '../assets/error404.svg';

export default function Error404() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Page</h1>
        <h2 style={styles.heading}>Not Found</h2>
        <p style={styles.subheading}>        
          Üzgünüz, istediğiniz sayfa ya silinmiş, taşınmış veya geçici olarak erişilemez hale gelmiş olabilir. <br /><br />
          Sağdaki sinirli robotumuz senin için bir ışınlanma butonu yarattı onu kullan!
        </p>
        <Link to="/" style={styles.button}>Geri Git</Link>
      </div>
      <div style={styles.imageContainer}>
        <img src={error404Image} alt="404 Error" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  },
  imageContainer: {
    marginRight: '-100px',
  },
  image: {
    width: '500px',
    height: '500px',
    objectFit: 'cover',
    textAlign: 'right',
  },
  textContainer: {
    textAlign: 'left',
  },
  heading: {
    fontFamily: 'Overpass',
    fontSize: '64px',
    color: '#372A7F',
    fontWeight: 'bold',
    marginBottom: '-40px',
  },
  subheading: {
    fontFamily: 'Overpass',
    fontSize: '17px',
    fontWeight: 'ExtraLight',
    marginTop: '60px',
  },
  button: {
    fontFamily: 'Roboto',
    display: 'inline-block',
    padding: '18px 50px',
    background: '#FF5768',
    color: 'white',
    borderRadius: '35px',
    margin: '15px 0 10px 0px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};
