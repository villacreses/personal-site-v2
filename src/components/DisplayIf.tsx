import {FC, ReactElement} from 'react';

const DisplayIf: FC<{condition: boolean}> = ({
  children,
  condition,
}) => condition ? children as ReactElement : null;

export default DisplayIf;