import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    buttonStyle: props => {
      return {
        marginBottom: '10px',
        margin: props.margin,
        padding: props.padding || "15px 0",
        color: props.color,
        backgroundColor: props.bgColor,
        boxShadow: props.boxShadow,
        width: props.width || '100%',
        maxWidth: props.maxWidth || '100%',
        fontSize: props.fontSize || '1rem',
        "&:hover": {
          color: props.hColor,
          backgroundColor: props.hbgColor
        }
      }
    }
});

export const useInputStyles = makeStyles({
  root: props => {
    return{
      marginBottom: props.marginBottom || "6px",
    }
  },
  inputStyle: props => {
    return {
      marginBottom: props.marginBottom || "6px",
      backgroundColor: props.backgroundColor || '#fff',
      color: props.color || '#000',
      width: props.width || "100%",
      maxWidth: props.maxWidth || "100%",
      minWidth: props.minWidth || "100%",
    }
  }
});