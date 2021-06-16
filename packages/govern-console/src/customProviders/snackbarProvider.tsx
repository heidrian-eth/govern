import { FC } from 'react';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  success: {
    backgroundColor: '#E8FAF9 !important',
    color: '#17C271 !important',
    width: '293px',
  },
  error: {
    backgroundColor: '#F8E8EB !important',
    color: '#FF6A60 !important',
    width: '293px',
  },
  warning: {
    backgroundColor: '#FFF8EA !important',
    color: '#F9A31B !important',
    width: '293px',
  },
  info: {
    width: '293px',
    backgroundColor: '#E9F3FF !important',
    color: '#0176FF !important',
  },
}));

const SnackBarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const toastClasses = useStyles();
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      classes={{
        variantSuccess: toastClasses.success,
        variantError: toastClasses.error,
        variantWarning: toastClasses.warning,
        variantInfo: toastClasses.info,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackBarProvider;