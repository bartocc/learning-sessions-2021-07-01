import Route from "@ember/routing/route";

export default class MyFormEditRoute extends Route {
  model(params) {
    const record = this.store.peekRecord("my-form", params["my-form_id"]);
    return record;
  }
}
