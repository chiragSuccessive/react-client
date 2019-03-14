const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    cursor: 'pointer',
  },
});

export default styles;
