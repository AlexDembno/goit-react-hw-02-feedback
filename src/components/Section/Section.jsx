import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={style.wrapper_app}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
