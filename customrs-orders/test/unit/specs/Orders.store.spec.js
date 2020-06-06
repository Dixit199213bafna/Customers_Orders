import orderStore from '../../../src/store/modules/Orders/orders';

describe('Orders actions and Store', () => {
  it('should dispatch action setToken', () =>{
    const commit = jest.fn();
    orderStore.actions.setOrders({ commit }, [
      {
        orderId: 1111
      }
    ]);
    expect(commit).toHaveBeenCalledWith('SET_ORDERS', [
      {
        orderId: 1111
      }
    ]);
  });

  it('should update orders in state', () => {
    const state = {
      orders: [],
      orderDetail: null,
    }
    orderStore.mutations.SET_ORDERS(state, [
      {
        orderId: 1111
      }
    ])
    expect(state).toEqual({ orders: [
        {
          orderId: 1111
        }
      ], orderDetail: null});
  })

  it('should update order detail in state', () => {
    const state = {
      orders: [],
      orderDetail: null,
    }
    orderStore.mutations.SET_ORDER_DETAIL(state, {
      orderId: 1111
    })
    expect(state).toEqual({ orders: [], orderDetail: {
        orderId: 1111
      }});
  })
})
