import Route from "@ember/routing/route";

export default class MyFormNewRoute extends Route {
  model() {
    return this.store.createRecord("my-form");
  }
}
