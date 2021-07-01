import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MyFormController extends Controller {
  @service router;

  @action
  submitForm() {
    this.router.transitionTo("index");
  }
}
