import { makeAutoObservable } from 'mobx';

export default class DataStore {
  selfCheckouts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]; // список всех касс
  activeSelfCheckout = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveSelfCheckout(id) {
    this.activeSelfCheckout = id;
  }

  // получения списка всех касс
  get getSelfCheckouts() {
    return this.selfCheckouts;
  }

  // получение номера активной кассы
  get getActiveSelfCheckout() {
    return this.setActiveSelfCheckout;
  }
}
