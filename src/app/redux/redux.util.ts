import * as _ from 'lodash';

export class ReduxUtil {

    /**
     * addData - adds data from the action to data from the state.
     *
     * @static
     * @param  {Array<T>} actionData - data from the action
     * @param  {Array<T>} stateData - data from the state
     * @return {Array<T>} - new state
     */
    static addData<T>(actionData: Array<T>, stateData: Array<T>): Array<T> {
        if (!_.isArray(actionData)) {
            return [...stateData];
        }
        const newActionData: Array<T> = _.map(actionData, (item) => _.cloneDeep(item));
        return [...stateData, ...newActionData];
    }
}
