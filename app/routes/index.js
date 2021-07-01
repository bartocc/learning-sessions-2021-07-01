import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  model() {
    const foo = this.store.peekRecord("my-form", "foo");
    if (!foo)
      this.store.createRecord("my-form", {
        id: "foo",
        name: "foo",
        desc: "bar"
      });
    return this.store.peekAll("my-form");
  }
}
