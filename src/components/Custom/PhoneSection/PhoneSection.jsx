import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { reselect } from 'store/selectors/selectors';
import css from './PhoneSection.module.scss';
import { StyledContainer } from './PhoneSection.styled';

const PhoneSection = ({ title, children }) => {
  const authComlete = useSelector(reselect.authenticationComplete);
  return (
    <section className={css.test}>
      <h2>{title}</h2>
      <StyledContainer className={authComlete ? `` : `disactive`}>
        {children}
      </StyledContainer>
    </section>
  );
};

export default PhoneSection;

PhoneSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
