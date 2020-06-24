import authStore from '../../../src/store/modules/Auth/Auth';

describe('Auth actions and Store', () => {
  it('should dispatch action setToken', () => {
    const commit = jest.fn();
    authStore.actions.setToken({ commit }, 'new-token');
    expect(commit).toHaveBeenCalledWith('SET_TOKEN', 'new-token');
  });

  it('should update token in state', () => {
    const state = {
      token: null,
      error: null,
    };
    authStore.mutations.SET_TOKEN(state, 'access-token');
    expect(state).toEqual({ token: 'access-token', error: null });
  });

  it('should update error in state', () => {
    const state = {
      token: null,
      error: null,
    };
    authStore.mutations.SET_ERROR(state, 'In Valid');
    expect(state).toEqual({ token: null, error: 'In Valid' });
  });
});
