import Model, { attr } from '@ember-data/model';

export default class MyFormModel extends Model {
  @attr() name;
  @attr() desc;
}
