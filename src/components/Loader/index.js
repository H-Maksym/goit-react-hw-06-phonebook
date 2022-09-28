import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Circles
      height="150"
      width="150"
      color=" orange"
      ariaLabel="circles-loading"
      wrapperStyle={{
        position: 'fixed',
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '100',
      }}
      visible={true}
    />
  );
}
