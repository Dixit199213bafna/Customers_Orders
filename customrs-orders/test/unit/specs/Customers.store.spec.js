import customerStore from '../../../src/store/modules/customer/customers';

describe('Customers actions and Store', () => {
  it('should dispatch action setCustomers', () => {
    const commit = jest.fn();
    customerStore.actions.setCustomers({ commit }, [
      {
        customerId: 1111,
      },
    ]);
    expect(commit).toHaveBeenCalledWith('SET_CUSTOMERS', [
      {
        customerId: 1111,
      },
    ]);
  });

  it('should update customers in state', () => {
    const state = {
      customers: [],
    };
    customerStore.mutations.SET_CUSTOMERS(state, [
      {
        customerId: 1111,
      },
    ]);
    expect(state).toEqual({ customers: [
      {
        customerId: 1111,
      },
    ] });
  });
});
