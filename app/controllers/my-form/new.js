import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { guidFor } from "@ember/object/internals";

export default class MyFormNewController extends Controller {
  @service router;

  @action
  submitForm() {
    this.model.id = guidFor(this.model);
    this.router.transitionTo("index");
  }
}
