import {TALK} from '../../constants';
import {makeLoadAction} from '../../shared/services';

export const loadTalks = () => makeLoadAction(TALK, 'talk', ['conferences']);
