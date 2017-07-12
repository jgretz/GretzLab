import {ENTRY} from '../../constants';
import {makeLoadAction} from '../../shared/services';

export const loadEntries = () => makeLoadAction(ENTRY, 'blog');
