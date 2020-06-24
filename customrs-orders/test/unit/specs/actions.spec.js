import {
  loadCustomer,
  loadOrders,
  signIn,
  signUp,
  fetchOrderDetail,
} from '../../../src/store/actions';
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));


describe('Test API calls', () => {
  it('should load customers', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        customers: [
          {
            name: 'aaaa',
          },
        ],
      } }));
    const endPoint = 'http://northwind.netcore.io/customers?format=json';
    const commit = jest.fn();
    await loadCustomer({ commit });
    expect(axios.get).toBeCalledWith(endPoint);
    expect(commit).toHaveBeenCalledWith(
      'SET_CUSTOMERS', [
        {
          name: 'aaaa',
        },
      ]);
  });

  it('should load orders', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: [
          {
            name: 'aaaa',
          },
        ],
      } }));
    const endPoint = 'http://northwind.netcore.io/orders?format=json';
    const commit = jest.fn();
    await loadOrders({ commit });
    expect(axios.get).toBeCalledWith(endPoint);
    expect(commit).toHaveBeenCalledWith(
      'SET_ORDERS', [
        {
          name: 'aaaa',
        },
      ]);
  });

  it('should load orders detail', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: [
          {
            name: 'aaaa',
          },
        ],
      } }));
    const endPoint = 'http://northwind.netcore.io/query/orders?Id=1111&include=Total&format=json';
    const commit = jest.fn();
    await fetchOrderDetail({ commit }, 1111);
    expect(axios.get).toBeCalledWith(endPoint);
    expect(commit).toHaveBeenCalledWith(
      'SET_ORDER_DETAIL',
      { name: 'aaaa' },
    );
  });

  it('should sign in with user details', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: {
        idToken: 'access-token',
      } }));
    const endPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc';
    const commit = jest.fn();
    await signIn({ commit }, { email: 'a@gmail.com', password: '1111' });
    expect(axios.post).toBeCalledWith(endPoint, { email: 'a@gmail.com', password: '1111' });
    expect(commit).toHaveBeenCalledWith(
      'SET_TOKEN',
      'access-token',
    );
  });

  it('should sign up with user details', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: {
        idToken: 'access-token',
      } }));
    const endPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc';
    const commit = jest.fn();
    await signUp({ commit }, { email: 'a@gmail.com', password: '1111' });
    expect(axios.post).toBeCalledWith(endPoint, { email: 'a@gmail.com', password: '1111' });
    expect(commit).toHaveBeenCalledWith(
      'SET_TOKEN',
      'access-token',
    );
  });
});
