import allRecipesSelector from './allRecipesSelector';
import {makeActiveItemSelector} from '../../shared/services';

export default makeActiveItemSelector(allRecipesSelector);
