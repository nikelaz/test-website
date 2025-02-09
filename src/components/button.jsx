import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  },
});

const Button = () => (
  <button {...stylex.props(styles.button)}>Click me!</button>
);

export default Button;
