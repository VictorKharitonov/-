import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const useTypedSelector = useSelector.withTypes<RootState>();

export default useTypedSelector;
