import config from './config';
import colors from './colors';

const mainStyles = {
  fullScreen: {
    width: config.width,
    height: config.height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.black,
    zIndex: 2,
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
};

export default mainStyles;
