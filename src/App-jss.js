//define styles with JSS
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    '.bodyStyle1': {
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
      background: 'linear-gradient(to bottom, #e6f7ff, #3399cc) no-repeat, #3399cc',
      margin: 0,
      display: 'flex',
      placeItems: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      flexDirection: 'column',
    },
    '.bodyStyle2': {
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
      background: 'linear-gradient(to bottom, #f0fffc, #19cccc) no-repeat, #19cccc',
      margin: 0,
      display: 'flex',
      placeItems: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      flexDirection: 'column',
    }
  },
  taskListStyle1:
  {
    backgroundColor: '#e6f7ff'
  },
  taskListStyle2:
  {
    backgroundColor: '#f0f0f0'
  }
});

export default useStyles;