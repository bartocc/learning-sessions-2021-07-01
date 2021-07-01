import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class IndexController extends Controller {
  @action
  delete(item) {
    this.store.deleteRecord(item);
  }
}
