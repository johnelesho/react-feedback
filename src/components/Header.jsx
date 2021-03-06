import PropTypes from 'prop-types';
import React from 'react';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header>
      <div className="container" style={headerStyles}>
        <h1>FeedBack UI {text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
