import SimpleWorker from "~/assets/js/simple.worker";

export default (context, inject) => {
  inject("worker", {
    createSimpleWorker() {
      return new SimpleWorker();
    },
  });
};
